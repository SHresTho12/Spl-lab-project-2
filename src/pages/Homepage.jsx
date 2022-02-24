import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/Card'
import GameCard from '../components/GameCard'


export default function Homepage() {
  const {currentUSer} = useAuth()
  return (
 <Layout> <Banner/>
 </Layout>
  
  
  )
}
