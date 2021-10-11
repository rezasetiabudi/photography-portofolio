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
        h="100vh"
        backgroundImage={{base: "assets/image/wsuff_hero_mobile.jpg" ,md:"/assets/image/wsuff_hero.jpg"}}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          h={'full'}
          justify={'center'}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading> 
              <Text
                color="#f7941e"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={size=='laptop' ? '8xl' : '4xl'}>
                {title}
              </Text>
            </Heading>
            <Text
              color={'white'}
              fontWeight={300}
              fontSize={["sm", "md", "lg", "xl"]}>
              {desc}
            </Text>
            <Stack direction={'row'}>
              <Link href='/blog'>

                <Button
                  bg={'whiteAlpha.300'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.500' }}
                  rightIcon={<ChevronRightIcon />} 
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
