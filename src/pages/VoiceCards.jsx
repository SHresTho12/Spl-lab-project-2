import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Layout } from '../components/Layout'
import {
  Box,
  Container,
  SimpleGrid,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
  Image,
  WrapItem,
  Wrap,
  Center,
  VStack,
} from '@chakra-ui/react'


import drink from "../images/VoiceCard/drink.jpg"
import food from "../images/VoiceCard/food.jpg"
import tire from "../images/VoiceCard/tired.jpg"
import hurt from "../images/VoiceCard/hurt.jpg"
import happy from "../images/VoiceCard/happy.jpg"
import angry from "../images/VoiceCard/angry.jpg"
import sad from "../images/VoiceCard/sad.jpg"
import home from "../images/VoiceCard/home.jpg"
import school from "../images/VoiceCard/school.jpg"
import grandma from "../images/VoiceCard/grandma.jpg"
import outside from "../images/VoiceCard/outside.jpg"
import scared from "../images/VoiceCard/scared.jpg"
function VoiceCards(){
    return (
        <Layout>
            <Wrap spacing='30px' justify='center'>
  <WrapItem>
    <Center w='380px' h='280px' bg='red.200'>
      <Image  boxSize='280px' w='380px'
        src={food} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='green.200'>
      <Image  boxSize='280px' w='380px'
        src={tire} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='tomato'>
     <Image  boxSize='280px' w='380px'
        src={hurt} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blue.200'>
        <VStack>
           <Image  m={0} boxSize='250px' w='380px'
        src={drink} alt='Dan Abramov' />
        <Container  m={0} maxW='md' h='30px' bg='blue.200' color='white'>
    <Text>I am Thirsty</Text>
  </Container>
            </VStack>
       
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
      <Image  boxSize='280px' w='380px'
        src={happy} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
      <Image  boxSize='280px' w='380px'
        src={angry} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
    <Image  boxSize='280px' w='380px'
        src={sad} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
      <Image  boxSize='280px' w='380px'
        src={home} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
      <Image  boxSize='280px' w='380px'
        src={school} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
     <Image  boxSize='280px' w='380px'
        src={outside} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
     <Image  boxSize='280px' w='380px'
        src={grandma} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='380px' h='280px' bg='blackAlpha.500'>
      <Image  boxSize='280px' w='380px'
        src={scared} alt='Dan Abramov' />
    </Center>
  </WrapItem>
</Wrap>  
        </Layout>
    )
}
export default VoiceCards