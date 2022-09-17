import { Box, Flex, SlideFade } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { title } from 'process'
import styles from '../styles/Home.module.css'
import ConnectBtn from "./component/ConnectBtn"
import Hero from './component/Hero'
import Nav from './component/Navbar'
import Card from './component/Slider'

import Welcome from './component/Welcome'

const Home: NextPage = () => {
  return (
    <>
    <Box className="gradient-bg-welcome">
      <Box >
     <Nav/>
     </Box>
     <Flex  flexDirection={{base:"column", md:"column", lg:"row"}} justifyContent="space-evenly"  ml="2%" pt="20" className=" gradient-bg-welcome"  >
      <Box className="gradient-bg-hero " w={{base:"80%", md:"100%", sm:"100%", lg:"80%", xl:"38%"}}>
     <Welcome/>
     </Box>
     <Box className="" p={8}>
     <Hero/>
     </Box>
     </Flex>
     <Box>
     
      </Box>
   
     </Box>
    </>
  )
}

export default Home
