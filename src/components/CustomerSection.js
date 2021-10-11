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

// import { Container } from './Container'

export const CustomerSection = () => {
  return(
    <Container
      maxWidth={'full'}
      h={'full'}
      p={5}
      justify="center"
      direction="column"
      bg="beige"
    >
      <Heading p={5}>Pricelist</Heading>

      <Box mt={20}>
        <Table size="lg" variant="simple">
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