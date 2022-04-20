import React from 'react'
import { Container } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { useAuth } from '../Contexts/AuthContexts'

export function Layout(props) {
  
  
  return (
    <>
      <Navbar />
      <Container maxW='100%'>{props.children}</Container>
    </>
  )
}
