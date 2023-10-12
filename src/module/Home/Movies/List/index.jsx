import { Box } from '@chakra-ui/react'
import React from 'react'
import ListFilter from './ListFilter'
import MoviesList from './MoviesList'

const List = () => {
  return (
    <Box width="80%" p={4}>

      <ListFilter/>
     <MoviesList/>
        
    </Box>
  )
}

export default List