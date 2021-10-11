import React, { useState } from 'react';
import { 
  Flex,
  Box,
  Heading,
  Text
} from '@chakra-ui/layout'

import { Img } from "@chakra-ui/react"

import { CTA } from './CTA'
import { Copywriting } from '../constants/Copywriting'

export const AboutSection = () => {
  
  return(
    <Flex
      w='full'
      h={{base:"160vh", xsm: "130vh", sm:"120vh", md: "110vh", lg: "100vh"}}
      p={{base: 2, sm: 10, md:10, lg: 20}}
      px={{base: 5, sm: 20}}
      flexDir="column"
      bg="ivory"
    >
      <Heading 
        size="xl" 
        p={{base: 5,sm: 10}}
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
          pt={{base: 10, md: 0}}
          w={{base:"100%", md:"40%"}}
          alignSelf="center"
        />
        <Text mt={4} textAlign="justify" w={{base:"100%", md:"40%"}}>
          {Copywriting.profile}
        </Text>
      </Flex>
          
    </Flex>
  )
}