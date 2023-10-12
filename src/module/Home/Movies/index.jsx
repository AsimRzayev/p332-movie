import { Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'
import List from './List'
import FilterProvider from './FilterProvider'

const Movies = () => {
  return (
    <FilterProvider>
      <Flex columnGap={10} py={10} px={6}>
        <Filter/>
        <List/>
     </Flex>
    </FilterProvider>
  )
}

export default Movies