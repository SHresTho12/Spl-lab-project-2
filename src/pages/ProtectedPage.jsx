import { Heading, Container, Badge, VStack, HStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../Contexts/AuthContexts';


let uid;
let Name;
let users;
let gamePlayed;
let AvarageScore;
let UserAvarageScore;
let quizTaken;
let AvarageScoreQuiz;
let UserAvarageScoreQuiz;
const games=["MixOrMatch","Hangman","DxBall"];
export default function ProtectedPage() {
  const {currentUSer} = useAuth();
  uid = currentUSer.uid;
  useEffect(() => {
    axios.get("http://localhost:3001/gamesPlayed").then((response) => {
      
     gamePlayed = response;
     
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3001/quizTaken").then((response) => {
      quizTaken = response;
     
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      users =response.data;
     
    });
  }, []);
  
  console.log(uid);
  return (
    <Layout>
      <VStack>
      <HStack>

      </HStack>


      </VStack>
    </Layout>
  )
}
