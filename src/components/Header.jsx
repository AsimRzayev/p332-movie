import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'

import Logo from "../assets/images/logo/logo.jpg"

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" px={3} py={4}>
        <img src={Logo} alt='logo'/>
        <Box width="40%"> 
            <form>
                <Input type='search' placeholder='Serach movie'  bgColor="whiteAlpha.700" />
             </form>
        </Box>
    </Flex>
  )
}

export default Header