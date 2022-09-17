import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import {
  Box,
  HStack,
  VStack,
  StackDivider,
  Image,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react'
import ReactTyped from 'react-typed'

const outerBoxStyles = {
  boxSize: '250px',
  p: '10',
  background:
    'url(https://picsum.photos/id/1068/200/300) center/cover no-repeat',
}

const innerBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  boxSize: 'full',
  color: 'white',
  textShadow: '0 0 20px black',
  fontWeight: 'bold',
  fontSize: '20px',
}

const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
  return (
    <>
      <Box
        ml={{ base: '18%', md: '24px' }}
        className="flex mf:flex-row flex-col items-start justify-between py-20 mt-20 "
      >
        <div className="flex flex-1 justify-start items-start flex-col  ">
          <h1 className="text-7xl text-white py-1 font-semibold textFont">MORPHEUS</h1>
          <h3 className="text-5xl font-semibold textFont">
            <Text
              bgGradient="linear(to-r, yellow.500, yellow.300, yellow.600, yellow.300)"
              bgClip="text"
            >
              <ReactTyped
                strings={[
                  'Your No1. NFT Market',
                  'Explore cool NFTs',
                  'From top creators',
                  'Get started',
                  'Launch the App',
                  'Access more features',
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </Text>
          </h3>
          <p className="text-left text-2xl mt-5 text-white font-light md:w-9/12text-base">
            Marketplace for different NFT collection, non fungible token NFTS!
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <Button
              textColor="white"
              colorScheme="linear(to-r, purple.500, purple.300, blue.500)"
              h="50px"
              px={{ base: '50px', md: '60px', lg: '100px' }}
              className=" cursor-pointer bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
              bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
            >
              Launch App
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Welcome
