import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Badge,Heading, Container, VStack, HStack, DrawerHeader,Text,Box, SimpleGrid,useColorModeValue,Stack,Image, Center} from '@chakra-ui/react'
import { Card } from '../components/Card'
import { useAuth } from '../Contexts/AuthContexts'
import { useEffect } from 'react'
import  axios  from 'axios'
import pp from "../images/MemoryGame/question.gif"

export default function Profilepage() {
  const {currentUSer} = useAuth()
  let uid = currentUSer.uid;
  let Uname;
  const [name,setName] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      setName(response.data);
      
    });
  }, []);
  

function getName(){
  name.forEach(function (data){
    let id = data.uid;
    console.log(id);
    console.log(id);
    if(id === uid){
      Uname = data.Name;
      
    }
  })
}


  return (
    <Layout>
      <Center>
      <Heading>
        Profile page
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}>
        
        
        <SimpleGrid columns={[1, 1, 1, 1, 1, 1]}>
           <Box
        role={"group"}
        p={6}
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          alignContent={"center"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${pp})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={pp}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color={"green.500"}
          >
            {Uname}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Heading fontWeight={800} fontSize={"xl"}>
              Email : {currentUSer.email}
            </Heading>
           
          </Stack>
          <VStack direction={"row"} align={"center"}>
           <Text fontWeight={800} fontSize={"xl"}>
             Number: 000000
            </Text>
            
            <Stack direction={"row"} align={"center"}>
           <Text fontWeight={800} fontSize={"xl"}>
             Age : 5
            </Text>
          </Stack>
                      <Stack direction={"row"} align={"center"}>
           <Text fontWeight={800} fontSize={"xl"}>
             Gender : Male
            </Text>
          </Stack>
          </VStack>
        </Stack>
      </Box>
        </SimpleGrid>
      </Container>
      </Center>
    </Layout>
  )
}
