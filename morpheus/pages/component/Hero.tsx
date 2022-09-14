import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <>
    <Box borderRadius="5%" className="bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg " p={3}>

          
          <Box>
            <Image  w="100%" h="100%" borderRadius="7%" src="./nft/fi.gif" alt="" />
          </Box>
          
       
        </Box>
        </>
  )
}

export default Hero