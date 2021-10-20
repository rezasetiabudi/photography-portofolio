import React, { useState } from 'react';
import Link from 'next/link'

import { 
  Flex,
  Button,
  Heading,
  Text
} from '@chakra-ui/layout'
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Img } from "@chakra-ui/react"

import { CTA } from './CTA'
import BlogPage from '../pages/blog'

export const AboutSection = ({companyProfile}) => {
  
  return(
    <Flex
      maxWidth="full"
      h={{base:"fit-content",lg:"fit-content"}}
      px={{base: 8, sm: 10, lg: 12, xl: 12}}
      py={{base: 10}}
      justify={{base:"center"}}
      direction="column"
      alignSelf="center"
    >
      <Heading 
        pb={{base: 1, md: 0}}
        fontSize={{base: "2xl", md:"2xl", lg: "3xl", xl: "4xl"}}
        color="#f7941e"
      >
        About Us
      </Heading>
      <Flex
        flexDirection={{base:"column", md:"row"}}
      >
        <Flex 
          flexDirection="column"
          pr={{md: 10}}
          w={{base:"100%", md:"65%"}}
          alignSelf="center"
        >
          <Text mt={4} textAlign="justify">
            {companyProfile}
          </Text>
          <Flex
            mt={{base:6}}
            flexDir="row-reverse"
          >
          </Flex>
        </Flex>
        <Img
          src="/assets/image/wsuff_logo.png"
          objectFit={{base:"cover", md:"initial"}}
          h={{base: "35vh", md:"fit-content"}}
          pt={{base: 5}}
          w={{base:"100%", md:"35%"}}
          alignSelf="start"
        />
      </Flex>
    </Flex>
  )
}