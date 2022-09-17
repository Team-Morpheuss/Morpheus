import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <>
      <Box
        borderRadius="5%"
        className=""
        p={3}
      >
        <Box>
          <Image
            w="100%"
            h="100%"
            borderRadius="7%"
            src="./nft/nftSequence3.gif"
            alt=""
          />
        </Box>
      </Box>
    </>
  )
}

export default Hero
