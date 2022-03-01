import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Layout } from '../components/Layout'
import Navlink from '../components/Navlink'
import '../Css/style.css'

function GamePage() {
  return (

  <Layout>
       <body className="gaming-page-body">
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
    
        <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
    
        <div className="navigation__nav">
            <ul className="navigation__list">

                <li className="navigation__item"><a href="../../index.html" className="navigation__link"><span>01</span>Home</a></li>

            <li className="navigation__item"><a href="../Games/games.html" className="navigation__link"><span>02</span>Games</a></li>
            <li className="navigation__item"><a href="../Videos/videos.html" className="navigation__link"><span>03</span>Video Lessons</a></li>
            <li className="navigation__item"><a href="../Games/QuizGame/quizhome.html" className="navigation__link"><span>04</span>Quizzes</a></li>

            </ul>
        </div>
    
    </div>
    <div className="gaming-header">
        <h1 className="gaming-heading-primary">Games</h1>
    </div>


    <div className="container">
       <div className="row">
        <div className="col-1-of-3">
            <div className="game-card">
              <div className="game-card-side">
                  <div className="game-card__picture game-card__picture--3">
                      &nbsp;
                  </div>
                  <h4 className="game-card__heading">
                      <span className="game-card__heading-span game-card__heading-span--3">Draw the Shape</span>
                  </h4>
                  
                  <div className="card__details">
                    <ul>
                        <li>
                          Draw the shapes free hand
                        </li>
                        <li>
                           Get Hints
                        </li>
                        <li>
                            Free hand drawing
                        </li>
                        <li> <Link to='/drawing' className="game-btn game-btn-cta">Play</Link></li>
                    </ul>
                       
                        
                  </div>
              </div>
              
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="game-card">
              <div className="game-card-side">
                  <div className="game-card__picture game-card__picture--2">
                      &nbsp;
                  </div>
                  <h4 className="game-card__heading">
                      <span className="game-card__heading-span game-card__heading-span--2">Mix or Match</span>
                  </h4>
                  
                  <div className="card__details">
                    
                        <div>
                            <ul>
                                <li>
                                    Match same Alphabets
                                </li>
                                <li>
                                    If Stuck Get hints
                                </li>
                                <li>
                                    Try to Use less flips
                                </li>
                                <li><Link to='/memoryGameMixOrMatch' className="game-btn game-btn-cta">Play</Link>
                                    
                                    
                                       
                                </li>
                            </ul>
                        </div>
                  </div>
              </div>
              
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="game-card">
              <div className="game-card-side">
                  <div className="game-card__picture game-card__picture--1">
                      &nbsp;
                  </div>
                  <h4 className="game-card__heading">
                      <span className="game-card__heading-span game-card__heading-span--1">Speed Typing Test</span>
                  </h4>
                  
                  <div className="card__details">
                        <ul>
                            <li>
                                Type the right word
                            </li>
                            <li>
                               Get Bonus 
                            </li>
                            <li>
                                Type fast and correctly
                            </li>
                            <li> <a href="../quizzes/typingTest.html" className="game-btn game-btn-cta">Play Now</a></li>
                        </ul>
                       
                        
                  </div>
              </div>
              
            </div>
          </div>
         


       </div>
           
       <div className="row justify-content-center row-of-2">
        
          <div className="col-1-of-3 co-1">
            <div className="game-card">
              <div className="game-card-side">
                  <div className="game-card__picture game-card__picture--4">
                      &nbsp;
                  </div>
                  <h4 className="game-card__heading">
                      <span className="game-card__heading-span game-card__heading-span--2">Say the Right Number</span>
                  </h4>
                  
                  <div className="card__details">
                    <ul>
                        <li>
                            Guess the right number
                        </li>
                        <li>
                            If Stuck see the hints
                        </li>
                        <li>
                            Learn number
                        </li>
                        <li><a href="../quizzes/voiceQuiz.html" className="game-btn game-btn-cta">Play Now</a></li>
                    </ul>
                        
                        
                  </div>
              </div>
              
            </div>
          </div>
          <div className="col-1-of-3 co-2">
            <div className="game-card">
              <div className="game-card-side">
                  <div className="game-card__picture game-card__picture--5">
                      &nbsp;
                  </div>
                  <h4 className="game-card__heading">
                      <span className="game-card__heading-span game-card__heading-span--1">Match the Spelling</span>
                  </h4>
                  
                  <div className="card__details">
                    <ul>
                        <li>
                            Match the same Alphabets
                        </li>
                        <li>
                            If Stuck Get hints
                        </li>
                        <li>
                            Try to Use less flips
                        </li>
                        <li>
                            
                                <a href="../../../blocks_game/spelling_game/spelling_game.html" className="game-btn game-btn-cta">Play Now</a>
                            
                        </li>
                    </ul>
                  </div>
              </div>
              
            </div>
          </div>
          


       </div>
    </div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
   </Layout>

  )
}

export default GamePage