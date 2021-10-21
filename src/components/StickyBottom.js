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
    justifyContent="center"
  >
    <Flex 
      w={{base: '100%', sm: '70%',lg:'65%'}}
      h='full'
      justifyContent="center"
      flexDirection='column'
      bg="whiteAlpha.100"
      px='2vh'
      rounded="5px"
    >
      <CTA />
    </Flex>
  </Flex>
) 