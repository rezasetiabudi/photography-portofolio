
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
      w='100%'
      flexWrap='wrap'
    >
      <Flex py='2' pl={{base:0,xsmtsm:2}} w={{base:"100%", xsmtsm:"50%"}} onClick={e=>window.fbq('track', 'Lead')}>
        <Link href="https://wa.me/6281214269124?text=Hello%20wsuff...">
          <Button 
            rightIcon={<ChatIcon />} 
            colorScheme="whatsapp" 
            variant="solid"
            width="full"
            h="40px"
          >
            Whatsapp
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
