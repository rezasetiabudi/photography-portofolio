import React, { useState } from 'react';

import { 
  Flex,
  Heading,
  Text
} from '@chakra-ui/layout'
import { Img } from "@chakra-ui/react"

export const AboutSection = ({companyProfile}) => {
  
  return(
    <Flex
      w="full"
      h={{base:"fit-content",lg:"fit-content"}}
      px={{base: 8, sm: 10, lg: 12, xl: 12}}
      py={{base: 10}}
      justifyContent='center'
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
        flexDirection={{base:"column"}}
      >
        <Flex 
          flexDirection="column"
          pr={{md: 10}}
          w={{base:"100%"}}
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
          objectFit="cover"
          boxSize='30vh'
          pt={{base: 5}}
          alignSelf="center"
        />
      </Flex>
    </Flex>
  )
}