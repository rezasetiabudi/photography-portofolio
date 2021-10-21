import { CTA } from "./CTA"

import { 
    Flex
  } from '@chakra-ui/layout'

export const StickyBottom = () => (
  <Flex 
    px="10" 
    px="2" 
    position="fixed"
    bottom="0"
    w="100%" 
    zIndex={2} 
    bg="whiteAlpha.600"
    justifyContent="center"
  >
    <Flex 
      w={{base:'100%', md:'70%', lg:'40%'}} 
      // h={{lg: '5vh'}}
      justifyContent="center"
    >
      <CTA />
    </Flex>
  </Flex>
) 