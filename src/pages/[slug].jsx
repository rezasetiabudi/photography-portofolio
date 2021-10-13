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
      p={{base: 2, sm: 10, md:10, lg: 20}}
      py={{base: 2, sm: 5}}
      flexDir="column"
      bg="ivory"
    >
      <Center flexDir="column" w="full" bg="ivory">  
        <Heading 
          size="xl" 
          py={{base: 2,sm: 2,md: 12}}
        >
          {post && post.title}
        </Heading>
        <NotionRenderer blockMap={blocks} />
      </Center>
    </Flex>
  )
}