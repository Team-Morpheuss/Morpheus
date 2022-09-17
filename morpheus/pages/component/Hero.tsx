import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <>
      <Box
        borderRadius="5%"
        className="ml-2"
        p={3}
      >
        <Box>
          <Image
            w="90%"
            h="70%"
          
            src="./nft/nftSequence3.gif"
            alt=""
          />
        </Box>
      </Box>
    </>
  )
}

export default Hero
