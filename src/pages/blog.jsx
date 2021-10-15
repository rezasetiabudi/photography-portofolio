import React, { useState } from "react";
import Link from "next/link";
import { useBreakpointValue } from '@chakra-ui/media-query'

import { 
  Flex,
  Box,
  Heading,
  Text
} from '@chakra-ui/layout'

import {
  Badge,
  Avatar,
  Spinner
} from '@chakra-ui/react'

const NOTION_BLOG_ID = 'd0f805342b8f40369cfad72708b1319b'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
    revalidate: 10,
  };
}

function BlogPage({ posts }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Flex
      w='full'
      minH="100vh"
      h={{base:"fit-content", xsm: "fit-content", sm:"fit-content", md: "fit-content", lg: "fit-content"}}
      py={{base: 2, sm: 10, md:10, lg: 5}}
      px={{base: 5, sm: 20}}
      flexDir="column"
      bg="#ebebeb"
    >
      <Heading my="4" ml="2">Our Article and Portofolio</Heading>
      {isLoading && 
        <Flex
          h="80vh"
          w="full"
          flexDir="column"
          justifyContent="center"
        >
          <Spinner
            thickness="4px"
            speed="0.45s"
            emptyColor="#E5922B"
            color="#F7941e"
            size="xl"
            alignSelf="center"
          />
        </Flex>
      }

      <Flex w="full" h="full" wrap="wrap">
        {posts && posts.map((post) => {
          console.log("posts.map : ", post)
          const [ cover ] = post.cover || [{url:null}]

          return (
              <Link href="/[slug]" as={`/${post.slug}`} key={post.id}>
                <Flex
                  h={{base: "35vh", sm: "35vh", md: "40vh", lg:"35vh", xl:"35vh"}}
                  w={{base: "90%", xsm: "80%", xsmtsm: "40%", sm: "40%", md: "30%",lg: "30%"}}
                  mx={{base: "5%", xsm: "10%", xsmtsm: "5%", sm: "4%", md: "1%", lg: "1%"}}
                  my={{base: "5%", xsm: "10%", xsmtsm: "5%", sm: "4%", md: "1%", lg: "1%"}}
                  backgroundImage={cover.url ? `url(${cover.url})` : "/assets/image/wsuff_logo.png"}
                  backgroundSize="cover"
                  backgroundPosition={'center center'}
                  overflow="auto"
                  onClick={()=>setIsLoading(true)}
                  display={isLoading ? 'none' : 'initial'}
                >
                  <Flex
                    h="95%"
                    p="4"
                    flexDir="column"
                    justifyContent="space-between"
                    bg="blackAlpha.500"
                    shadow="dark-lg"
                    >
                    <Text 
                      fontSize={{base:"md", xsmtsm: "sm",md:"lg",lg:"lg",xl:"xl"}}
                      fontWeight="bold"
                      color="white"
                    >
                      {post.title}
                    </Text>
                    <Flex>
                      <Avatar 
                        src={post.author[0].profilePhoto} 
                        alignSelf="center" 
                        size="sm"
                      />
                      <Box>
                        <Text 
                          fontWeight="bold" 
                          ml="1" 
                          fontSize={{base:"12px", xsmtsm: "12px",lg: "md"}}
                          color="white"
                        >
                          {post.author[0].fullName}
                        </Text>
                        {post && post.category.map(tags => (
                          <Badge 
                            ml="1" 
                            variant="solid" 
                            colorScheme="whiteAlpha"
                            fontSize={{base:"8px", xsmtsm: "6px",lg: "8px"}}
                          >
                            {tags}
                          </Badge>
                        ))}
                        {/* <Text fontSize="sm" color="red">{post.slug}</Text> */}
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
        )})}
      </Flex>
    </Flex>
  );
}

export default BlogPage