import React, { useState } from 'react';
import { 
  Grid,
  GridItem,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  Container,
  Box,
  Heading,
  Text
} from '@chakra-ui/layout'
// import { Container } from './Container'
import { CTA } from './CTA'
import { Copywriting } from '../constants/Copywriting'

export const AboutSection = () => {
  
  return(
    <Container
      maxWidth={'full'}
      maxHeight={'full'}
      p={5}
      bg="ivory"
      centerContent
    >
      <Heading p={5}>About us</Heading>
      <Grid templateColumns="repeat(12, 1fr)" 
        alignItems="center"
        gap={2}
        w={'full'}
        h={'full'}
      >
        {Copywriting.profile && (
          <>
            <GridItem 
              colStart={2} 
              colEnd={6} 
              h="35vh"
              backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
              />
          
            <GridItem colStart={6} colEnd={12} h="35vh" align="center">
              <Box
              p={5}
              h="100%"
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              >
                <Heading fontSize="xl">Our Product</Heading>
                <Text mt={4} textAlign="justify">{Copywriting.profile}</Text>
              </Box>
            </GridItem>
          </>
        )}

        {Copywriting.tools && (
          <>
            <GridItem colStart={2} colEnd={8} h="35vh" align="center">
              <Box
              p={5}
              h="100%"
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              >
                <Grid templateRows="repeat(4)" h="full">
                  <GridItem rowStart={1} rowEnd={2}>
                    <Heading fontSize="xl">Tools</Heading>
                    <Text mt={4} textAlign="justify">{Copywriting.tools}</Text>
                  </GridItem>
                  <GridItem rowStart={4} alignSelf="end">
                      <CTA />
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>

            <GridItem 
              colStart={8} 
              colEnd={12} 
              h="35vh"
              backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
              }
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
            />
          </>
        )}

      </Grid>
    </Container>
  )
}