import React, { useEffect } from 'react'
//import './MemoryGame'
 import '../../../Css/style.css'
import questionGif from '../../../images/MemoryGame/question.gif'
import aPic from '../../../images/MemoryGame/a.jpg'
import ePic from '../../../images/MemoryGame/e.jpg'
import hPic from '../../../images/MemoryGame/h.jpg'
import jPic from '../../../images/MemoryGame/j.jpg'
import kPic from '../../../images/MemoryGame/k.jpeg'
import mPic from '../../../images/MemoryGame/m.jpg'
import  axios  from 'axios'
import { useAuth } from '../../../Contexts/AuthContexts'
let users;
let userName;
let UserUid;
const GameName ="Memory";
const GameID = "MixOrMatch";
const playSessionScore = {
    CPGID:"MixOrMatch",
    UserID:null,
    GameID:"Memory",
    GameScore:0
  }

function MixOrMatch(props) {
  //audio controller for all kinds of moves and matches
//Database Works
const {currentUSer} = useAuth();
 
useEffect(() => {
    axios.get("http://localhost:3001/profile").then((response) => {
      users =response.data;
     
    });
  }, []);


//Database Work Done

//Creating a Game Class
class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
    this.cardScore = document.getElementById("score");
    
    this.score = 0;
  }
  updateGameSession(){
    
  }
  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;
    setTimeout(() => {
      
      this.shuffleCards(this.cardsArray);
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500);
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);
   
    
     if(currentUSer !== null) playSessionScore.UserID = currentUSer.uid;
    playSessionScore.GameScore =  this.score ;
    console.log(playSessionScore);
    if(playSessionScore.UserID !== null){
      axios.post("http://localhost:3001/gamesPlayed",playSessionScore).then((response) => {
            console.log(response.data);
      
    });
    }
    document.getElementById("game-over-text").classList.add("visible");
  }

  victory() {
    clearInterval(this.countdown);
     if(currentUSer !== null) playSessionScore.UserID = currentUSer.uid;
    playSessionScore.GameScore = this.score ;
    console.log(playSessionScore);
    if(playSessionScore.UserID !== null){
      axios.post("http://localhost:3001/gamesPlayed",playSessionScore).then((response) => {
            console.log(response.data);
      
    });
    }
    document.getElementById("victory-text").classList.add("visible");
    
  }
  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }
  //Flipping a Card
  flipCard(card) {
    if (this.canFlipCard(card)) {
      
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }
  //Checking card for match
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
      this.cardMatch(card, this.cardToCheck);
      this.score = this.score + 10;
      this.cardScore.innerHTML = this.score;
    } else this.cardMismatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }
  //Actual Matching Function
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add("matched");
    card2.classList.add("matched");
    card1.classList.remove("hints");
    card2.classList.remove("hints");
    
    if (this.matchedCards.length === this.cardsArray.length){ this.victory();}
  }
  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 500);
  }
  shuffleCards(cardsArray) {
    // Fisher-Yates Shuffle Algorithm.
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randIndex].style.order = i;
      cardsArray[i].style.order = randIndex;
    }
  }
  getCardType(card) {
    return card.getElementsByClassName("memory-card-value")[0].src;
  }
  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("memory-card"));
  let game = new MixOrMatch(100, cards);
  let hintButton = document.getElementById("hint-button");
  
  hintButton.addEventListener("click", () => {
    let hintCards = Array.from(document.getElementsByClassName("hint"));
    hintCards.forEach((hintCard) => {
      hintCard.classList.add("hints-memory-card");
    });

    setTimeout(() => {
      let rotatedCard = Array.from(
        document.getElementsByClassName("hints-memory-card")
      );
      rotatedCard.forEach((card) => {
        card.classList.remove("hints-memory-card");
      });
    }, 5000);
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}

  return (
    <div className="memory-game-body">
  <h1 className="game-title">Mix-Or-Match</h1>
  <div className="overlay-text visible">
    Click to Start
  </div>
  <div id="game-over-text" className="overlay-text">
    GAME OVER
    <span className="overlay-text-small">Click to Restart</span>
  </div>
  <div id="victory-text" className="overlay-text">
    VICTORY
    <span className="overlay-text-small">Click to Restart</span>
  </div>

  <div className="game-container">
    <div className="game-info-container">
      <div className="game-info">
        Time :<span id="time-remaining">100</span>
      </div>
      <div className="game-info">
        Score : <span id="score">00</span>
      </div>
      <div className="game-info">
        Flips : <span id="flips">0</span>
      </div>
    </div>
    <div className="hints-button">

      <button className="pushable" id="hint-button">
        <span className="front">
          Get Hint
        </span>
      </button>
    </div>
    <section className="memory-game">
      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face  memory-card-value" src={aPic} alt="A" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value  memory-card-hint" src={aPic} alt="A" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>

      <div className="memory-card hint">
        <div className="memory-card-front memory-card-face ">
          <img className="memory-card-front-face memory-card-value" src={hPic} alt="H" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card hint">
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={hPic} alt="H" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>

      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={ePic} alt="E" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={ePic} alt="E" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>

      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={jPic} alt="J" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={jPic} alt="J" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>

      <div className="memory-card  hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={kPic} alt="K" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card  hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={kPic} alt="K" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>

      <div className="memory-card  hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={mPic} alt="M" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      <div className="memory-card  hint" >
        <div className="memory-card-front memory-card-face">
          <img className="memory-card-front-face memory-card-value" src={mPic} alt="M" />
        </div>
        <div className="memory-card-back memory-card-face">
          <img className="memory-card-back-face" src={questionGif} alt="Question" />
        </div>
      </div>
      
    </section>
    </div>
</div>
  )
}

export default MixOrMatch