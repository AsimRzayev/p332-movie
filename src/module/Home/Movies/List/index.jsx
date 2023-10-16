import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ListFilter from './ListFilter'
import MoviesList from './MoviesList'
import { useFilter } from '../FilterProvider'
import { useQuery } from 'react-query'
import { MoviesService } from '../../../../services/moviesService'
import Loading from '../../../../components/Loading'
const movieService=new MoviesService();
const List = () => {
  const {filter}=useFilter();
       
  const {data:movies,isLoading,isError}=useQuery(["get.Movies",filter],()=>movieService.getMovies(filter))

 
if(isLoading){
  return <Loading/>
}

if(isError){
  return <h1>Request is failed</h1>
}

if(!movies.length){
  return <Flex py={10} color="white" justifyContent="center" alignItems="center" background="red.900" my={5}>Kino tapilmadi</Flex>
}

  return (
    <Box width="80%" p={4}>

      <ListFilter movieCount={movies.length}/>
     <MoviesList/>
        
    </Box>
  )
}

export default List