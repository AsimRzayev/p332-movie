import { Box, Flex, Grid, GridItem, HStack } from '@chakra-ui/react';
import React from 'react';
import ListItem from './ListItem';



const MoviesList = ({movies=[]}) => {

      
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