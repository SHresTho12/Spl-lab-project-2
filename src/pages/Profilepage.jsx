import React from 'react'
import { Layout } from '../components/Layout'
import { Badge, chakra, Code, Container, Heading } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { useAuth } from '../Contexts/AuthContexts'

export default function Profilepage() {
  const {currentUSer} = useAuth()
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
