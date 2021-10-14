import { 
    Flex,
    Box,
    Heading,
    Text,
  } from '@chakra-ui/layout'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
  } from "@chakra-ui/react"


export const CustomerSection = () => {
  return(
    <Flex
      maxWidth="full"
      h={{base:"fit-content",lg:"100vh"}}
      px={{base: 5, sm: 10, lg: 12, xl: 12}}
      py={{base: 10}}
      justify={{base:"center"}}
      direction="column"
      bg="beige"
    >
      <Heading 
        pb={{base: 1, lg: 12}}
        fontSize={{base: "xl", md:"2xl", lg: "3xl", xl: "4xl"}}
      >
        pricelist soon... 
      </Heading>

    </Flex>
  )   
}