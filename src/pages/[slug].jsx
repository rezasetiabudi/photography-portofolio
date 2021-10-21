import { NotionRenderer } from "react-notion";
import { 
  Flex,
  Heading,
} from '@chakra-ui/layout'


import { getAllPosts } from '../pages/index'

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
      flexDir={{base:"row"}}
      w="full"
      justifyContent='center'
      bg='ivory'
    >
      <Flex
        flexDir='column'
        w={{base: '100%', sm: '70%',lg:'60%'}}
      >
        <Flex
          w='full'
          minH="100vh"
          h='fit-content'
          wrap="wrap"
          flexDir="column"
          bg="ivory"
        >
          <Flex
            w="full"
            bg="#F89E32"
            justifyContent="center"
          >
            <Heading
              w={{base: "95%", xsm: "90%", xsmtsm: "90%", sm: "86%", md: "86%", lg: "80%", xl: "80%"}}
              textAlign="center"
              color="ivory"
              fontSize={{base: "sm", xsmtsm: "md", sm: "xl", md:"xl", lg: "2xl", xl: "3xl"}} 
              py={{base: 4, xsm: 6, sm: 8}}
            >
              {post && post.title}
            </Heading>
          </Flex>

          <Flex
            w={{base: "85%", xsm: "80%", xsmtsm: "80%", sm: "80%", md: "80%", lg: "85%", xl: "75%"}}
            py={{base: 6, xsm: 8, xsmtsm: 10, sm: 14, md: 14, lg: 16, xl: 16  }}
            wrap="wrap"
            alignSelf="center"
            overflowWrap="break-word" 
          >
            <NotionRenderer blockMap={blocks} fullPage />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
