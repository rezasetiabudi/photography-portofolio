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

import { DetermineSize } from '../helper/DetermineSize';

const Hero = ({ title, desc }) => {
  const size = DetermineSize()
  return(
    <>
      <Flex
        w="full"
        h={{base: "60vh"}}
        backgroundImage={{base: `url(https://res.cloudinary.com/whyrezan/image/upload/c_scale,q_70:420,w_1280/v1634803972/wsuff_hero_mobile_iiydec.jpg)` ,md: `url(https://res.cloudinary.com/whyrezan/image/upload/c_scale,q_71:420,w_1280/v1634803964/wsuff_hero_dse7os.jpg)`}}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          h={'full'}
          p={{base: 8}}
          justify={'center'}
          bgGradient={'linear(to-r, blackAlpha.600, blackAlpha.300)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading> 
              <Text
                color="#f7941e"
                fontWeight={700}
                lineHeight={1.2}
                bg="ivory"
                px={4}
                fontSize={{base: "4xl", xsmtsm: "6xl", lg: "6xl", xl: "6xl"}}>
                {title}
              </Text>
            </Heading>
            <Text
              color={'white'}
              fontWeight={300}
              fontSize={{base: "2xl", xsmtsm: "3xl", sm: "3xl", lg: "3xl", xl: "4xl"}}>
              {desc}
            </Text>
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
