import React, { useRef, useEffect } from 'react'
import { BallMovement } from './BallMovement';
import data from '../../data';
import WallCollision from '../../Utils/DXBallGame/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollision from '../../Utils/DXBallGame/BrickCollision';
import PaddleHit from '../../Utils/DXBallGame/PaddleHit';
import PlayerStats from './PlayerStats';
import AllBroke from '../../Utils/DXBallGame/AllBroke';
import ResetBall from '../../Utils/DXBallGame/ResetBall';
import { Box } from '@chakra-ui/react';

let bricks = [];

let {ballObj, paddleProps, brickObj, player} = data;

// let x=0;
export default function Board() {
    const canvasRef = useRef(null);

    useEffect(() => {

        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            paddleProps.y = canvas.height - 30;

        // ctx.fillStyle = 'green';
        // ctx.fillRect(10, 10, 150, 100);

            //Assign Bricks
            let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

            if(newBrickSet && newBrickSet.length > 0){
                bricks = newBrickSet;
            }

                    
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //Show player stats

            PlayerStats(ctx, canvas, player);
            
            // Display bricks
            bricks.map((brick) => {
                return brick.draw(ctx);
            });
            // Handle Ball Movement
            BallMovement(ctx, ballObj);

            AllBroke(bricks, player, canvas, ballObj);

            if(player.lives === 0){
                alert('Game Over--To restart, press OK');
                //bricks.length = 0;

                player.lives = 5;
                player.level = 1;
                player.score = 0;
                ResetBall(ballObj, canvas, paddleProps);
                bricks.length = 0;

            }

            // Ball and Wall Collision
            WallCollision(ballObj, canvas, player, paddleProps);


            // Brick Collision
            let brickCollision;

            for(let i=0; i < bricks.length; i++){
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if(brickCollision.hit && !bricks[i].broke){

                    if(brickCollision.axis === "X"){
                        ballObj.dx *= -1; // Divert in the X direction
                        bricks[i].broke = true; // Brick broken
                    }

                    else if(brickCollision.axis === "Y"){
                        ballObj.dy *= -1; // Divert in the Y direction
                        bricks[i].broke = true; // Brick broken
                    }
                    player.score += 20;
                }
            }

            Paddle(ctx, canvas, paddleProps);

            // Paddle & Ball Collision

            PaddleHit(ballObj, paddleProps);
            
            // ctx.beginPath();
            // ctx.fillStyle="red";
            // ctx.arc(x, 50, 20, 0, 2 * Math.PI);
            // ctx.strokeStyle="black";
            // ctx.strokeWidth=4;
            // ctx.fill();
            // ctx.stroke();
            // x+=8;
            // //console.log('creating circle');

            requestAnimationFrame(render);
        };
        
        render();
        
    }, []);

    return (

    <Box justifyContent='center' style={{ textAlign: "center" }}>
      <h1 className="gameHeader">DX Ball Game</h1>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
    </Box>

        // <canvas 
        //     id="canvas" 
        //     ref={canvasRef} 
        //     onMouseMove={(event) => paddleProps.x =event.clientX - paddleProps.width/2 - 10} 
        //     height="500" 
        //     width={window.innerWidth - 20}
        // />
    );
}
