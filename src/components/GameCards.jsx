import React from 'react'
import '../Css/style.css'
function GameCards() {
  return (
    <section class="section-games">

    <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Most Popular Games</h2>
    </div>
    <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card-side card-side-front card-side-front-1">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">Draw the Shape</span>
                </h4>
                <div class="card__details">
                    <ul>
                        <li>3 Levels</li>
                        <li>Alphabet Learning</li>
                        <li>Motor motion Test</li>
                        <li>Instruction Follow Test</li>
                        <li>Live Score</li>
                    </ul>
                </div>
            </div>
            <div class="card-side card-side-back card-side-back-1">
                <div class="card__cta">
                <a href="pages/Games/ConnectDotsGame/newDot.html" class="btn btn-white">Play Now</a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
            <div class="card">
                <div class="card-side card-side-front card-side-front-2">
                    <div class="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--2">Match the Shape</span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li>3 Levels</li>
                            <li>Shapes LEarning</li>
                            <li>Recognition Test</li>
                            <li>Instruction Follow Test</li>
                            <li>Live Score</li>
                        </ul>
                    </div>
                </div>
                <div class="card-side card-side-back card-side-back-2">
                    <div class="card__cta">
                    <a href="pages/Games/MemoryGame/memoryGame.html" class="btn btn-white">Play Now</a>
                    </div>
                </div>
          </div>
        </div>
        <div class="col-1-of-3">
            <div class="card">
                <div class="card-side card-side-front card-side-front-3">
                    <div class="card__picture card__picture--3">
                        &nbsp;
                    </div>
                    <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--3">Drag and Drop</span>
                    </h4>
                    <div class="card__details">
                        <ul>
                            <li>3 Levels</li>
                            <li>Memory Exercise</li>
                            <li>Alphabet Learning</li>
                            <li>Instruction Follow Test</li>
                            <li>Live Score</li>
                        </ul>
                    </div>
                </div>
                <div class="card-side card-side-back card-side-back-3">
                    <div class="card__cta">
                    <a href="/blocks_game/spelling_game/spelling_game.html" class="btn btn-white">Play Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="u-center-text u-margin-top-huge">
        <a href="pages/Games/games.html" class="btn btn-green">Discover All Games</a>
    </div>

</section>
  )
}

export default GameCards