import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, chakra, Code, Container, Heading } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { useAuth } from '../Contexts/AuthContexts'
import { useEffect } from 'react'
import  axios  from 'axios'
export default function Profilepage() {
  const {currentUSer} = useAuth()
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <Layout>
      <Heading>
        Profile page
        <Badge colorScheme='green' fontSize='lg' mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre>
          {JSON.stringify(currentUSer , null , 2)}
          
        </chakra.pre>
      </Container>
    </Layout>
  )
}
