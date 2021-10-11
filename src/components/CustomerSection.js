import { 
    Grid,
    GridItem,
    Flex,
    Spacer,
    Wrap,
    WrapItem,
    Box,
    Heading,
    Text,
    Container
  } from '@chakra-ui/layout'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
  } from "@chakra-ui/react"


export const CustomerSection = () => {
  return(
    <Container
      maxWidth="full"
      h={{base:"100vh"}}
      minH="max"
      p={{base: 2, sm: 10, md:10}}
      px={{base: 5, sm: 20}}
      pt={{base: 10, sm: 0 }}
      justify="center"
      direction="column"
      bg="beige"
    >
      <Heading p={5}>Pricelist</Heading>

      <Box mt={20}>
        <Table size={{ base: "xsm", md: "lg", lg: "lg" }} variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
          <TableCaption>Contact for best price and more offer</TableCaption>  
        </Table>
      </Box>
    </Container>
  )   
}