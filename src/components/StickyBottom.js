import { CTA } from "./CTA"

import { 
    Flex
  } from '@chakra-ui/layout'

export const StickyBottom = () => (
  <Flex 
    position="fixed"
    bottom="0"
    w="inherit"
    h='12vh'
    zIndex={2} 
    bg="whiteAlpha.600"
    justifyContent="center"
  >
    <Flex 
      w={{base:'100%', xsmtsm:'70%', lg:'40%'}} 
      h='full'
      justifyContent="center"
      flexDirection='column'
    >
      <CTA />
    </Flex>
  </Flex>
) 