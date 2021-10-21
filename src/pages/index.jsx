import React, { useState } from "react";
import Hero from '../components/Hero'
import { AboutSection } from '../components/AboutSection'

import { 
	Flex,
	Text
} from '@chakra-ui/layout'

import { StickyBottom } from "../components/StickyBottom";
import { PortofolioSection } from "../components/PortofolioSection";

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
        <Flex w='full' bg='whiteAlpha.500'>
          <PortofolioSection posts={posts}/>
        </Flex>

        {/* FOOTER */}
        <Flex w='full' flexDir="column" p="5" pb='14vh' bg='whiteAlpha.800' h='fit-content' justifyContent="start" flexWrap='auto'>
          <Text textAlign="center" fontSize={{base:'lg',xsm:"2xl"}} fontWeight="bold" color='#f7941e'> {data.campaign} </Text>
        </Flex>
        <StickyBottom />
      </Flex>
    </Flex>
      
	)
}

export default Index
