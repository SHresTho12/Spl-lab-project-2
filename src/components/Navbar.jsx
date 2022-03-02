import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../Contexts/AuthContexts'
import Navlink from './Navlink'

export function Navbar() {
  const { toggleColorMode } = useColorMode()
  const{currentUSer ,logout} =useAuth()
  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
    >
      <HStack py={4} justifyContent='flex-end' maxW='100%' mx='auto'>
        <Navlink to='/' name='Teach Me 2.0' size='xl' />
        <Spacer />
        <Navlink to='/games' name='Games' />
        <Navlink to='/tutorials' name='Tutorials'/>
        <Navlink to='/quizzes' name='Quizzes'/>
        {!currentUSer && <Navlink to='/login' name='Login' />}
        {!currentUSer && <Navlink to='/register' name='Register' />}
        {currentUSer  && <Navlink to='/profile' name='Profile' />}
        {currentUSer  && <Navlink to='/protected-page' name='Protected' />}
        {currentUSer  && <Navlink to='/todo' name='ToDos' />}
        {currentUSer  && <Navlink
          to='/logout'
          name='Logout'
          onClick={async e => {
            e.preventDefault()
            // handle logout
            logout()
          }}
        />}
        <IconButton
          variant='outline'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        />
      </HStack>
    </Box>
  )
}
