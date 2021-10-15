import React, { useState } from 'react';
import { 
  Flex,
  Box,
  Heading,
  Text
} from '@chakra-ui/layout'

import { Img } from "@chakra-ui/react"

import { CTA } from './CTA'

export const AboutSection = ({companyProfile}) => {
  
  return(
    <Flex
      maxWidth="full"
      h={{base:"fit-content",lg:"100vh"}}
      px={{base: 8, sm: 10, lg: 12, xl: 12}}
      py={{base: 10}}
      justify={{base:"center"}}
      direction="column"
      bg="ivory"
    >
      <Heading 
        pb={{base: 1, lg: 12}}
        fontSize={{base: "2xl", md:"2xl", lg: "3xl", xl: "4xl"}}
      >
        About Us
      </Heading>
      <Flex
        flexDirection={{base:"column", md:"row"}}
        justifyContent="space-evenly"
      >
        <Img
          src="/assets/image/wsuff.png"
          objectFit={{base:"cover", md:"initial"}}
          h={{base: "35vh", md:"35vh"}}
          pt={{base: 5}}
          w={{base:"100%", md:"40%"}}
          alignSelf="start"
        />
        <Flex 
          flexDirection="column"
          w={{base:"100%", md:"40%"}}
        >
          <Text mt={4} textAlign="justify">
            {companyProfile}
          </Text>
          <Flex
            mt={{base:6}}
            flexDir="row-reverse"
          >
            <CTA />
          </Flex>
        </Flex>
      </Flex>
          
    </Flex>
  )
}