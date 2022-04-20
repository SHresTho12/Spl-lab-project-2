export default function WallCollision(ballObj, canvas, player, paddleProps, setLives){

    if(ballObj.y + ballObj.rad >= canvas.height){ // if ball hits bottom
        player.lives--;
        ballObj.x = paddleProps.x;
        ballObj.y = paddleProps.y - 30;
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        ballObj.dy = -6;
    } 
    if(ballObj.y - ballObj.rad < 0){  
        ballObj.dy *= -1; //deflected
    }

    if(ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad <0){
        ballObj.dx *= -1; //deflected
    }
}