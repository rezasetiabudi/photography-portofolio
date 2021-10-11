import { Text, Flex } from "@chakra-ui/layout";
import { Container } from "../components/Container";
import Navbar from "../components/Navbar";

const Blog = () => {
    return(
        <Flex
        w={'full'}
        h={'100vh'}
        direction="column">
            <Navbar />
            <Text>
                this is blog
            </Text>
        </Flex>
    )
}

export default Blog