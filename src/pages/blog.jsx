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
      // h={{base:"fit", xsm: "130vh", sm:"120vh", md: "110vh", lg: "100vh"}}
      h={{base:"fit-content", xsm: "fit-content", sm:"fit-content", md: "fit-content", lg: "100vh"}}
      py={{base: 2, sm: 10, md:10, lg: 5}}
      px={{base: 5, sm: 20}}
      flexDir={{base:"column", xsmtsm:"row"}}
      wrap="wrap"
      bg="#ebebeb"
    >
      {isLoading && 
        <Flex
          h="full"
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
      {posts && posts.map((post) => {
        console.log("posts.map : ", post)
        return (
            <Link href="/[slug]" as={`/${post.slug}`} key={post.id}>
              <Flex
                h={{base: "35vh", sm: "35vh", md: "40vh", lg:"50vh", xl:"40vh"}}
                w={{base: "90%", xsm: "80%", xsmtsm: "40%", sm: "40%", md: "30%",lg: "20%"}}
                mx={{base: "5%", xsm: "10%", xsmtsm: "5%", sm: "4%", md: "1%", lg: "2%"}}
                my={{base: "5%", xsm: "10%", xsmtsm: "5%", sm: "4%", md: "1%", lg: "1%"}}
                bg="#f7941e"
                overflow="auto"
                onClick={()=>setIsLoading(true)}
                display={isLoading ? 'none' : 'initial'}
              >
                <Flex
                  h="95%"
                  p="4"
                  flexDir="column"
                  justifyContent="space-between"
                >
                  <Text 
                    fontSize={{base:"xl",md:"3xl",lg:"3xl"}}
                    fontWeight="bold"
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
                      <Text fontWeight="bold" ml="1" fontSize="sm">
                        {post.author[0].fullName}
                      </Text>
                      {post && post.category.map(tags => (
                        <Badge 
                          ml="1" 
                          variant="solid" 
                          colorScheme="whiteAlpha"
                          fontSize={{base:"8px",lg: "8px"}}
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
  );
}

export default BlogPage