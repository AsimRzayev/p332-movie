import { Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'

const ListFilter = ({movieCount}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
    <Text color="blue.400">{movieCount} results found  </Text>
    <Select placeholder='Select option' w="20%" bg="tomato"  color="blue">
       <option value='option1'>Option 1</option>
       <option value='option2'>Option 2</option>
       <option value='option3'>Option 3</option>
     </Select>
  </Flex>
  )
}

export default ListFilter