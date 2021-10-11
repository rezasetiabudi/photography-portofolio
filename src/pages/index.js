import Link from 'next/link'

import {
  Link as ChakraLink,
  Code,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Box
} from '@chakra-ui/react'

import { Copywriting } from '../constants/Copywriting'

import { Container } from '../components/Container'
import Hero from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { CustomerSection } from '../components/CustomerSection'
import Navbar from '../components/Navbar'

const Index = () => (
  <>
    {/* <Navbar /> */}
    <Hero title={Copywriting.title} desc={Copywriting.desc} />
    <Container h='100vh' w={'auto'}>
      <AboutSection />
    </Container>
    <Container h='100vh' w={'auto'}>
      <CustomerSection />
    </Container>
  </>
)


export default Index
