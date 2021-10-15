import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link'
import { DetermineSize } from '../helper/DetermineSize';

const Hero = ({ title, desc }) => {
  const size = DetermineSize()
  return(
    <>
      <Flex
        w="full"
        h={{base: "100vh", xsmtsm:"100vh", lg:"100vh"}}
        backgroundImage={{base: "assets/image/wsuff_hero_mobile.jpg" ,md:"/assets/image/wsuff_hero.jpg"}}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          h={'full'}
          px={{base: 8}}
          justify={'center'}
          bgGradient={'linear(to-r, blackAlpha.600, blackAlpha.300)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading> 
              <Text
                color="#f7941e"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{base: "4xl", xsmtsm: "6xl", lg: "6xl", xl: "8xl"}}>
                {title}
              </Text>
            </Heading>
            <Text
              color={'white'}
              fontWeight={300}
              fontSize={{base: "2xl", xsmtsm: "3xl", sm: "3xl", lg: "3xl", xl: "4xl"}}>
              {desc}
            </Text>
            <Stack direction={'row'}>
              <Link href='/blog'>

                <Button
                  p={6}
                  bg={'blackAlpha.600'}
                  rounded={'full'}
                  color={'whiteAlpha.900'}
                  _hover={{ bg: 'blackAlpha.900' }}
                  rightIcon={<ChevronRightIcon />} 
                  fontSize={{base: "xl", xsmtsm: "xl", sm: "2xl", lg: "3xl", xl: "3xl"}}
                  >  
                  Our Portofolio
                </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  )
}

Hero.defaultProps = {
  title: 'ini judul',
  desc: 'ini deskripsi',
}

export default Hero;
