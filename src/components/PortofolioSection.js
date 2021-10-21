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
	Spinner,
} from '@chakra-ui/react'


export const PortofolioSection = ({posts}) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Flex
			w="full"
			h={{base:"fit-content",lg:"fit-content"}}
			px={{base: 8, sm: 10, lg: 12, xl: 12}}
			py={{base: 2}}
			justifyContent='center'
			direction="column"
			alignSelf="center"
		>
			<Heading 
				py={{base: 1, md: 4}}
				fontSize={{base: "2xl", md:"2xl", lg: "3xl", xl: "4xl"}}
				fontWeight="bold"
				color="#f7941e"
			>
				Our Client
			</Heading>

				{isLoading && 
				<Flex
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

				<Flex w="full" h="full" wrap="wrap" mt={4} justifyContent={{base:'center',xsmtsm:'space-between',xl:'start'}}>
				{posts && posts.map((post) => {
					console.log("posts.map : ", post)
					const [ cover ] = post.cover || [{url:null}]

					return (
						<Link href="/[slug]" as={`/${post.slug}`} key={post.id}>
						<Flex
							h={{base: "35vh", sm: "32vh", md: "35vh", lg:"35vh", xl:"35vh"}}
							w={{base: "90%", xsm: "90%", xsmtsm: "48%", sm: "48%", md: "48%", lg: "48%", xl: "30%"}}
							mr={{xl:'3.3%'}}
							mb={{base: "5%", xsm: "6%", xsmtsm: "4%", sm: "4%", md: "4%", lg: "4%", xl: "4%"}}
							backgroundImage={cover.url ? `url(${cover.url})` : "/assets/image/wsuff_logo.png"}
							backgroundSize="cover"
							backgroundPosition={'center center'}
							overflow="auto"
							onClick={()=>setIsLoading(true)}
							display={isLoading ? 'none' : 'initial'}
						>
							<Flex
							h="95%"
							p={{base: '4',xsmtsm: '2',sm:'2',md:"4"}}
							flexDir="column"
							justifyContent="space-between"
							bg="blackAlpha.500"
							shadow="dark-lg"
							>
							<Text 
								fontSize={{base:"lg",xsmtsm:"lg",md:"lg",lg:"lg",xl:"xl"}}
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
									fontSize={{base:"8px", xsmtsm: "8px",sm:'7px',md:'9px',lg:"10px"}}
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
	)
}
