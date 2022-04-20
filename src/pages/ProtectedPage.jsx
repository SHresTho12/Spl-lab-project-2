import { Heading, Container, Badge, VStack, HStack, DrawerHeader, Box, SimpleGrid  } from '@chakra-ui/react'
import { calculateBackoffMillis } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../Contexts/AuthContexts';
import mixormatchimage from '../images/MemoryGame/question.gif'
import ReportBox from '../components/ReportBox';
import hangmanImage from '../images/MemoryGame/hangMan.jpg'
import dxImage from '../images/MemoryGame/dx.jpeg'


export default function ProtectedPage() {
  const [gameplayed , setGameplayed] = useState([]);
  let uid;
let Name;
let users;
let score1 =0;
let score2 =0;
let score3 =0;
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



const chartData = [
  {
    gameName:"MixOrMatch",
    AvarageScore:0,
    NormalScore:0,
  },
    {
    gameName:"Hangman",
    AvarageScore:0,
    NormalScore:0,
  },
    {
    gameName:"Dxball",
    AvarageScore:0,
    NormalScore:0,
  }
]
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
             score1 = score1 + score;
          gamePlayedNum1++;
          console.log(AvarageScore1);
        }
          if(CPGID === 'Hangman') {AvarageScore2 = AvarageScore2 + score;
            score2 = score2 + score;
          gamePlayedNum2++;
       }
          if(CPGID ===  'DxBall') {AvarageScore3 = AvarageScore3 + score;
            score3 = score3 + score;
          gamePlayedNum3++;
        }
        }
        else{
          if(CPGID === 'MixOrMatch'){ score1 = score1 + score;
          
        }
          if(CPGID === 'Hangman') {score2 = score2 + score;
         
       }
          if(CPGID ===  'DxBall') {score3 = score3 + score;
         
        }
        }
      }

      )
      if(AvarageScore1>0) {
        AvarageScore1 = AvarageScore1 / gamePlayedNum1
        score1 = Math.floor(score1 / Object.keys(gameplayed).length);
        chartData[0].AvarageScore = AvarageScore1;
        chartData[0].NormalScore = score1;  
  
  
  };
      
     if(AvarageScore2>0){ AvarageScore2 = AvarageScore2 / gamePlayedNum2;
    
    score2 = Math.floor(score2 / Object.keys(gameplayed).length);
        chartData[1].AvarageScore = AvarageScore2;
        chartData[1].NormalScore = score2;  
    
    }
      if(AvarageScore3>0) {AvarageScore3 = AvarageScore3 / gamePlayedNum3;
      score3 = Math.floor(score3/ Object.keys(gameplayed).length);
        chartData[2].AvarageScore = AvarageScore3;
        chartData[2].NormalScore = score3;
    
    }
  }
  calculateAvarage();
  console.log(chartData);
  return (
    <Layout>
     <SimpleGrid columns={[1, 2, 3, 1, 2 , 3]}>
          {/* {dataList.map(function (data) {
            const { id, product, summary, longLine,image,link } = data;
            return (
              <div className="tutorial-cards"><TutorialCards
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
                image={image}
                link={link}
              /></div>
            );
          })} */}


        <ReportBox
        
        GameName = {"MixOrMAtch"}
        AvarageScore={AvarageScore1}
         NormalScore ={score1}
         image ={mixormatchimage}
        ></ReportBox>
        <ReportBox
GameName = {"Hangman"}
        AvarageScore={AvarageScore2}
         NormalScore ={score2}
         image ={hangmanImage}
        ></ReportBox>
        <ReportBox
       GameName = {"DxBall"}
        AvarageScore={AvarageScore3}
         NormalScore ={score3}
         image ={dxImage}
        
        ></ReportBox>




        </SimpleGrid>
        {/* <ChartReport
        
        AvarageScore1 ={AvarageScore1}
        AvarageScore2 = {AvarageScore2}
        AvarageScore3 = {AvarageScore3}
        NormalScore1 = {score1}
        NormalScore2 = {score2}
        NormalScore3 = {score3}
        
        
        ></ChartReport> */}


    </Layout>
  )
}
