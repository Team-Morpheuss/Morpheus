import React from 'react'
import { Button } from '@chakra-ui/react'
const Buttin = () => {
  return (
    <>
    <Button
    textColor="white"
    colorScheme="linear(to-r, purple.500, purple.300, rgb(155, 39, 209))"
    h="50px"
    px={{ base: '50px', md: '60px', lg: '100px' }}
    className=" cursor-pointer bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
    bgGradient="linear(to-r, purple.500, purple.300, rgb(155, 39, 209) )"
  >
    Launch App
  </Button>
  </>
  )
}

export default Buttin