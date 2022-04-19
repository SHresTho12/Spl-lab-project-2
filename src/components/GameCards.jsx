import React from 'react'
import '../Css/style.css'
function GameCards() {
  return (
    <section className="section-games">

    <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most Popular Games</h2>
    </div>
    <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card-side card-side-front card-side-front-1">
                <div className="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">Draw the Shape</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>3 Levels</li>
                        <li>Alphabet Learning</li>
                        <li>Motor motion Test</li>
                        <li>Instruction Follow Test</li>
                        <li>Live Score</li>
                    </ul>
                </div>
            </div>
            <div className="card-side card-side-back card-side-back-1">
                <div className="card__cta">
                <a href="pages/Games/ConnectDotsGame/newDot.html" className="btn btn-white">Play Now</a>
                </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
            <div className="card">
                <div className="card-side card-side-front card-side-front-2">
                    <div className="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">Match the Shape</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>3 Levels</li>
                            <li>Shapes LEarning</li>
                            <li>Recognition Test</li>
                            <li>Instruction Follow Test</li>
                            <li>Live Score</li>
                        </ul>
                    </div>
                </div>
                <div className="card-side card-side-back card-side-back-2">
                    <div className="card__cta">
                    <a href="pages/Games/MemoryGame/memoryGame.html" className="btn btn-white">Play Now</a>
                    </div>
                </div>
          </div>
        </div>
        <div className="col-1-of-3">
            <div className="card">
                <div className="card-side card-side-front card-side-front-3">
                    <div className="card__picture card__picture--3">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">Drag and Drop</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>3 Levels</li>
                            <li>Memory Exercise</li>
                            <li>Alphabet Learning</li>
                            <li>Instruction Follow Test</li>
                            <li>Live Score</li>
                        </ul>
                    </div>
                </div>
                <div className="card-side card-side-back card-side-back-3">
                    <div className="card__cta">
                    <a href="/blocks_game/spelling_game/spelling_game.html" className="btn btn-white">Play Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="u-center-text u-margin-top-huge">
        <a href="pages/Games/games.html" className="btn btn-green">Discover All Games</a>
    </div>

</section>
  )
}

export default GameCards