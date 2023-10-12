import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Flex py={5} justifyContent="center"><Spinner size="xl" color='blue.500' /></Flex>
  )
}

export default Loading