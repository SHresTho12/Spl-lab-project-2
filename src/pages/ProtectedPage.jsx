import { Heading, Container, Badge, VStack, HStack, DrawerHeader } from '@chakra-ui/react'
import { calculateBackoffMillis } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../Contexts/AuthContexts';



export default function ProtectedPage() {
  const [gameplayed , setGameplayed] = useState([]);
  let uid;
let Name;
let users;

let AvarageScore1 = 0;
let gamePlayedNum1 = 0;
let AvarageScore2 = 0;
let gamePlayedNum2 = 0;
let AvarageScore3 = 0;
let gamePlayedNum3 = 0;
let UserAvarageScore;
let quizTaken;
let AvarageScoreQuiz;
let UserAvarageScoreQuiz;
const games=["MixOrMatch","Hangman","DxBall"];
  const {currentUSer} = useAuth();
  uid = currentUSer.uid;
  useEffect(() => {
    axios.get("http://localhost:3001/gamesPlayed").then((response) => {
      
     setGameplayed(response.data);
     //calculateAvarage(response);
     
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
  function calculateAvarage(){
    console.log(gameplayed);
      gameplayed.forEach(function (data){

        
        let CPGID = data.CPGID;
        let id = data.UserID;
        let score = data.GameScore;
        console.log(CPGID,)
        if(id === uid){
          if(CPGID === 'MixOrMatch'){ AvarageScore1 = AvarageScore1 + score;
          gamePlayedNum1++;
          console.log(AvarageScore1);
        }
          if(CPGID === 'Hangman') {AvarageScore2 = AvarageScore2 + score;
          gamePlayedNum2++;
       }
          if(CPGID ===  'DxBall') {AvarageScore3 = AvarageScore3 + score;
          gamePlayedNum3++;
        }



        }
      }

      )
      if(AvarageScore1>0) AvarageScore1 = AvarageScore1 / gamePlayedNum1;
      
     if(AvarageScore2>0) AvarageScore2 = AvarageScore2 / gamePlayedNum2;
      if(AvarageScore3>0) AvarageScore3 = AvarageScore3 / gamePlayedNum3;
  }
  calculateAvarage();
  return (
    <Layout>
      <VStack>
      <HStack>
      <h1>{AvarageScore1}</h1>
      <h1>{AvarageScore2}</h1>
      <h1>{AvarageScore3}</h1>
      </HStack>


      </VStack>
    </Layout>
  )
}
