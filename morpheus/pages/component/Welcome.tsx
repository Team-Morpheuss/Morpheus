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
  Heading,
  useBreakpointValue
} from '@chakra-ui/react'
import ReactTyped from 'react-typed'
import Buttin from './UI/Button'


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
      mt={{base:"0", md:"0", lg:"1%", xl:"2%"}}
        ml={{ base: '18%', md: '24%', lg:"20%", xl:"27%" }}
        px={{ base:"6", md:"8", lg:"8", xl:"6"}}
        className="flex mf:flex-row flex-col items-start justify-between py-14  "
      >
        <div className="flex flex-1 justify-start items-start flex-col  ">
        <Heading mb="2%" fontSize={{ base: '4xl', md: '7xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  fontSize: 2,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                MORPHEUS
              </Text>
              <br />{' '}
              
            </Heading>
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
            Marketplace for different NFT collection, <br/> non-fungible token NFTS!
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <Buttin/>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Welcome
