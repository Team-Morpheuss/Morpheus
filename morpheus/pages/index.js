import {
  Box,
  Flex,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { capsFirst } from "./component/utils";

import ReactDOM from "react-dom";

import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import styles from "../styles/Home.module.css";
import ConnectBtn from "./component/ConnectBtn";
import Hero from "./component/Hero";
import Nav from "./component/Navbar";
import ChakraCarousel from "./component/ChakraCarousel";

import Welcome from "./component/Welcome";
import { NFT } from "web3uikit";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <Box className="gradient-bg-welcome">
        <Box>
          <Nav />
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          justifyContent="space-evenly"
          ml="2%"
          pt="20"
          className=" gradient-bg-welcome"
        >
          <Box
            className="gradient-bg-hero "
            w={{ base: "80%", md: "100%", sm: "100%", lg: "80%", xl: "38%" }}
          >
            <Welcome />
          </Box>
          <Box className="" p={8}>
            <Hero />
          </Box>
        </Flex>
        
       
      </Box>

      <Container
        overflowX="hidden"
        className="gradient-bg-slider"
        py={8}
        px={8}
        maxW={{
          base: "100%",
          sm: "75rem",
          md: "143.75rem",
          lg: "157.5rem",
          xl: "165rem",
          xxl: "187.5rem",
        }}
      >
         <Heading  mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, yellow.500, yellow.300, yellow.600, yellow.300)"
        bgClip="text" align="center">Top NFTS</Heading>
        <ChakraCarousel gap={32}>
          {data.slice(5, 15).map((post, index) => (
            <Flex
              key={index}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              className="w-72 h-92 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <NFT
                  moralisAuth={false}
                  address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
                  chain="eth"
                  tokenId="1"
                />
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <Tag size="sm" variant="outline" colorScheme="green">
                    User: {post.userId}
                  </Tag>
                  <Tag size="sm" variant="outline" colorScheme="cyan">
                    Post: {post.id - 5}
                  </Tag>
                </HStack>
                <Button
                  onClick={() => alert(`Post ${post.id - 5} clicked`)}
                  colorScheme="green"
                  fontWeight="bold"
                  color="gray.900"
                  size="sm"
                >
                  More
                </Button>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </>
  );
};

export default Home;
