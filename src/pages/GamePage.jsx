import { linkWithPopup } from 'firebase/auth'
import React from 'react'

import { Link } from 'react-router-dom'

import { Layout } from '../components/Layout'
import Navlink from '../components/Navlink'
import '../Css/style.css'
import { Link } from 'react-router-dom'
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

                <li className="navigation__item"><Link to='/' className="navigation__link"><span>01</span>Home</Link></li>

            <li className="navigation__item"><Link to='/games' className="navigation__link"><span>02</span>Games</Link></li>
            <li className="navigation__item"><Link to='/tutorials' className="navigation__link"><span>03</span>Video Lessons</Link></li>
            <li className="navigation__item"><Link to="/quizzes" className="navigation__link"><span>04</span>Quizzes</Link></li>

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

                                <li>
                                    <Link to='/drawing' className="game-btn game-btn-cta"><Navlink to='/memoryGameMixOrMatch' name="MixOrMatch" /></Link>

                                       
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

                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--2">DX Ball</span>

                  </h4>
                  
                  <div className="card__details">
                    <ul>
                        <li>
                            Hit the blocks with the ball
                        </li>
                        <li>
                           Move the paddle
                        </li>
                        <li>
                           New Levels
                        </li>

                        <li><Link to='/DxBall' class="game-btn game-btn-cta">Play</Link></li>

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
          
          <div class="col-1-of-3 co-2">
            <div class="game-card">
              <div class="game-card-side">
                  <div class="game-card__picture game-card__picture--5">
                      &nbsp;
                  </div>
                  <h4 class="game-card__heading">
                      <span class="game-card__heading-span game-card__heading-span--1">Match the Spelling</span>
                  </h4>
                  
                  <div class="card__details">
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
                            
                                <a href="../../../blocks_game/spelling_game/spelling_game.html" class="game-btn game-btn-cta">Play Now</a>
                            
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