
import Link from 'next/link'

import { 
  Flex,
  Button,
} from '@chakra-ui/react'

import {
  ChatIcon,
  EmailIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

export const CTA = () => {
  return (
    <Flex
      flexDir={{base:'column', xmstsm:'row'}}
      // bg='rebeccapurple'
      w='100%'
      flexWrap='wrap'
    >
      <Flex py='2' pr={{base:0,xsmtsm:2}} w={{base:"100%", xsmtsm:"50%"}}>
        <Link href="mailto:hellowsuff@gmail.com">
          <Button 
            rightIcon={<EmailIcon />} 
            color="red.500"
            variant="solid"
            width="full"
          >
            Email
          </Button>
        </Link>
      </Flex>
      <Flex py='2' pl={{base:0,xsmtsm:2}} w={{base:"100%", xsmtsm:"50%"}}>
        <Link href="https://wa.me/6281214269124?text=Halo%20Wsuff%20Studio">
          <Button 
            rightIcon={<ChatIcon />} 
            colorScheme="whatsapp" 
            variant="solid"
            width="full"
          >
            Whatsapp
          </Button>
        </Link>
      </Flex>
      <Flex py='2' w="full">
        <Link href='/blog'>
          <Button
            colorScheme="orange"
            _hover={{ bg: '#f7941e' }}
            rightIcon={<ChevronRightIcon />} 
            width="100%"
            >  
            Our Portofolio
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
