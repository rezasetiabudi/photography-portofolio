import React, { useState } from "react";
import Link from "next/link";

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
  };
}

function BlogPage({ posts }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Flex
      w='full'
      h={{base:"160vh", xsm: "130vh", sm:"120vh", md: "110vh", lg: "100vh"}}
      p={{base: 2, sm: 10, md:10, lg: 20}}
      px={{base: 5, sm: 20}}
      flexDir={{base:"column", md:"row"}}
      bg="#ebebeb"
    >
      {posts && posts.map((post) => {
        console.log("posts.map : ", post)
        return (
            <Link href="/[slug]" as={`/${post.slug}`} key={post.id}>
              <Flex
                h={{base: "35vh", sm: "35vh", md: "35vh", lg:"50vh", xl:"40vh"}}
                w={{base: "90%", xsm: "80%", xsmtsm: "60%", sm: "40%", lg: "25%"}}
                mx={{base: "5%", xsm: "10%", xsmtsm: "20%",sm: 0, lg: 0}}
                mt={{base: "10%", xsm: "10%", sm: 0, lg: 0,}}
                bg="#f7941e"
                onClick={()=>setIsLoading(true)}
              >
                {isLoading && 
                  <Flex
                    h="full"
                    w="full"
                    flexDir="column"
                    justifyContent="center"
                    bg="whiteAlpha.500"
                  >
                    <Spinner
                      thickness="4px"
                      speed="0.45s"
                      emptyColor="#ebebeb"
                      color="#F7941e"
                      size="xl"
                      alignSelf="center"
                    />
                  </Flex>
                }
                {!isLoading && 
                  <Flex
                    h="95%"
                    p="4"
                    flexDir="column"
                    justifyContent="space-between"
                  >
                    <Text 
                      fontSize={{base:"xl",md:"3xl",lg:"4xl"}}
                      fontWeight="bold"
                    >
                      {post.title}
                    </Text>
                    <Flex>
                      <Avatar 
                        src={post.author[0].profilePhoto} 
                        alignSelf="center" 
                        size="md"
                      />
                      <Box>
                        <Text fontWeight="bold" ml="1">
                          {post.author[0].fullName}
                        </Text>
                        {post && post.category.map(tags => (
                          <Badge 
                            ml="1" 
                            variant="solid" 
                            colorScheme="whiteAlpha"
                            fontSize={{base:"10px",lg: "14"}}
                          >
                            {tags}
                          </Badge>
                        ))}
                        {/* <Text fontSize="sm" color="red">{post.slug}</Text> */}
                      </Box>
                    </Flex>
                  </Flex>
                }
              </Flex>
            </Link>
      )})}
    </Flex>
  );
}

export default BlogPage