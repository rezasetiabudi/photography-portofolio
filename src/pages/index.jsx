import React, { useState } from "react";
import Link from "next/link";
import Hero from '../components/Hero'
import { AboutSection } from '../components/AboutSection'

import { 
	Flex,
	Box,
	Heading,
	Text
} from '@chakra-ui/layout'

import {
	Badge,
	Spinner,
} from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons';
import BlogPage from "./blog";
import { StickyBottom } from "../components/StickyBottom";

const NOTION_COMPANY_PROFILE_ID = '45599b13194944f386da9cedfb6f197c'
const NOTION_BLOG_ID = 'fd42bb34317a4e96870562b87491274b'


export const getCopyWritingData = async () => {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${NOTION_COMPANY_PROFILE_ID}`
	).then((res) => res.json());
}

export const getAllPosts = async () => {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
	).then((res) => res.json());
}

export async function getStaticProps() {
	const datas = await getCopyWritingData()
	const posts = await getAllPosts()

	return {
		props: {
			datas,
			posts
		},
		revalidate: 30,
	};
}

const Index = (props) => {
	const {datas: [data], posts} = props

	const [isLoading, setIsLoading] = useState(false);
	
	return (
		<Flex
			flexDir={{base:"row"}}
			w="full"
      justifyContent='center'
      bg='whitesmoke'
		>
      <Flex
        flexDir='column'
        w={{base: '100%', sm: '70%',lg:'65%'}}
      >
        {/* HERO */}
        <Flex w='full'>
          <Hero title={data.title} desc={data.desc} />
        </Flex>
        
        {/* ABOUT US */}
        <Flex w='full' py={{base: 0, md: 5}} bg='ivory'>
          <AboutSection companyProfile={data.profile} />
        </Flex>

        {/* PORTOFOLIO */}
        <Flex
        w='full'
        minH="100vh"
        h={{base:"fit-content", xsm: "fit-content", sm:"fit-content", md: "fit-content", lg: "fit-content"}}
        py={{base: 2, sm: 10, md:10, lg: 5}}
        px={{base: 5, sm: 20}}
        flexDir="column"
        bg="#ebebeb"
      >
          <Flex>
            <Heading my="4" ml="4">Our Client</Heading>
          </Flex>
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
                          <Box>
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
                          </Box>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Link>
            )})}
          </Flex>
        </Flex>

        {/* FOOTER */}
        <Flex w='full' flexDir="column" p="5" pb='12vh' bg="ivory" h='fit-content' justifyContent="start" flexWrap='auto'>
          <Text textAlign="center" fontSize={{base:'lg',xsm:"2xl"}} fontWeight="bold" color="#f7941e"> {data.campaign} </Text>
        </Flex>
        <StickyBottom />
      </Flex>
    </Flex>
      
	)
}

export default Index
