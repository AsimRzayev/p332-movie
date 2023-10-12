import { Box, Flex, Heading, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { decreaseText } from '../../../../utils'

const ListItem = ({movie}) => {

    const {image,title,description,rating,publishDate,language}=movie

  return (
    <VStack spacing={4} alignItems="flex-start" border="1px" borderColor="blue.400" p={4} mt={10}>
        <Heading as="h4" fontSize="2xl">{decreaseText(title)}</Heading>
        <Img width="100%" height="300px" src={image} alt="Deadpol"/>
        <Text fontSize="md" color="gray.500" as="p">{decreaseText(description,100)}</Text>
        <Flex justifyContent="space-between" w="full">
            <Box>
                <Text color="blue.400">Rating: {rating}</Text>
                <Text color="blue.400">Language: {language}</Text>
            </Box>

            <Text color="blue.500">{publishDate}</Text>
        </Flex>
    </VStack>
  )
}

export default ListItem