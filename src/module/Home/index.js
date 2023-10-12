import React from 'react'
import Header from '../../components/Header'
import { Box } from '@chakra-ui/react'
import Movies from './Movies'

const Home = () => {
  return (
    <Box minH="100vh" backgroundColor="#333333" color="white">
            <Header/>   
            <Movies />  
    </Box>
  )
}

export default Home