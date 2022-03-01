import React from 'react'
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Flex,
  Heading
  
} from '@chakra-ui/react'
import Player from './Player'
import {  GrVolume } from 'react-icons/gr'
import {  GiExitDoor } from 'react-icons/gi'
function Video(props) {
    const{title , url} = props;
  return (
    <Flex color="white" direction="column">
        <Flex justifyContent="center" flex="1">
            <Heading  color="green.300" marginBottom="4">{title}</Heading>
        </Flex>
    <Flex justifyContent="center" flex="5">
      <Box pos="relative" h="100%" w="100%">
        <Player url={url} />
      </Box>
    </Flex>
    <Flex
      justifyContent="space-around"
      alignItems="center"
      flex="1"
      padding="2vmax"
    >
      <IconButton
        aria-label="Search database"
        icon={<GrVolume color="black" size="2vmax" />}
      />
      <IconButton
        aria-label="Search database"
        icon={<GiExitDoor color="black" size="2vmax" />}
      />
    </Flex>
  </Flex>
  )
}

export default Video
