import React from "react";
import {
  Box,
  Flex,
  Badge,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Spacer,
  useColorMode,
 
} from "@chakra-ui/react";

function TutorialCards(props) {
  const { product, summary, longLine, image } = props;
   const { colorMode, toggleColorMode} = useColorMode();

  return ( 
     <Box rounded="20px"  margin="5" maxW="32rem" overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} mt={10} border='1px' borderColor='green.200' boxShadow='2xl '  >
        <Image src=
{image}
               alt="Card Image" boxSize="32rem">
        </Image>
        <Box p={5} bg={ colorMode === "dark" ? "gray.500": "green.50"}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="green" 
              rounded="full" px={2}>
            {product}
            </Badge>
          </Stack>
          <Stack align="center" marginBottom={4} >
            <Text as="h2" fontWeight="normal" my={2} color={colorMode === "dark"?"white":"black"}>
             {summary}
            </Text>
            <Text fontWeight="light"  color={colorMode === "dark"?"white":"black"}>
              {longLine}
            </Text>
          </Stack>
          <Flex>  
            <Spacer />
           
            <Button variant="solid" 
              colorScheme="green" size="lg">
                Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
  );
}

export default TutorialCards;
