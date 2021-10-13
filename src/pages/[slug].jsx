import { NotionRenderer } from "react-notion";
import { 
  Flex,
  Box,
  Heading,
  Text
} from '@chakra-ui/layout'

import { 
  Center,
} from "@chakra-ui/react"

import { getAllPosts } from './blog'

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
    revalidate: 10,
  };
}

export default ({ post, blocks }) => {
  return(
    <Flex
      w='full'
      minH="100vh"
      wrap="wrap"
      justifyContent="space-between"
      flexDir="column"
      bg="#F89E32"
    >
      {/* <Center flexDir="column" w="full" bg="ivory">   */}
        <Heading 
          fontSize={{base: "md", xsmtsm: "xl", sm: "2xl", md:"3xl"}} 
          color="ivory"
          alignSelf="center"
          px={{base: "10%", }}
          py={{base: "10%", sm: "4%", lg: "4%"}}
        >
          {post && post.title}
        </Heading>
        <Flex
          w="full"
          px={{base: "10%", md:"10%", lg: "15%", xl: "20%"}}
          pt={{base: "8%", xsmtsm: "7%", sm: "7%", md: "7%", lg:"10%", xl: "5%"}}
          bg="ivory"
          wrap="wrap"
          overflowWrap="break-word"
        >
          <NotionRenderer blockMap={blocks} />
        </Flex>
      {/* </Center> */}
    </Flex>
  )
}