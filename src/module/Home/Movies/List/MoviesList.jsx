import { Box, Flex, Grid, GridItem, HStack } from '@chakra-ui/react';
import React from 'react';
import ListItem from './ListItem';
import {useQuery} from "react-query";
import Loading from '../../../../components/Loading';
import { useFilter } from '../FilterProvider';


const MoviesList = () => {

        const {filter}=useFilter();
   

    const {data:movies,isLoading,isError}=useQuery(["get.Movies",filter],async function(){
        if(filter.category.length){

            let queryParams=filter.category.map((x,index)=>{
                let params= filter.category.length-1!==index?`category=${x}&`:`category=${x}`;
                return params;
            }).join("")

            let resp= await fetch(`http://localhost:4000/movies?${queryParams}`);
            let data=resp.json();
            return data;
        }

        let resp= await fetch("http://localhost:4000/movies");
        let data=resp.json();
        return data;
 
    })
   
    if(isLoading){
        return <Loading/>
    }

    if(isError){
        return <h1>Request is failed</h1>
    }

  return (
    <>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {movies.map(movie=>
    <GridItem w='100%' key={movie.id}>
        <ListItem movie={movie} />
    </GridItem>
    )} 

  </Grid>
  <Flex justifyContent="center" mt={10}>
        <HStack spacing={4}>
        <Box px={4} py={3} background="blue" cursor="pointer" _hover={{
                opacity:"0.7"
            }}>
                Prev
                </Box>
                {[1,2,3,4].map(num=> <Box key={num} px={4} py={3} background="blue" cursor="pointer" _hover={{
                opacity:"0.7"
            }}>
                {num}
            </Box>)}
          
            <Box px={4} py={3} background="blue" cursor="pointer" _hover={{
                opacity:"0.7"
            }}>
                Next
            </Box>
        </HStack>
</Flex>
  </>
  )
}

export default MoviesList