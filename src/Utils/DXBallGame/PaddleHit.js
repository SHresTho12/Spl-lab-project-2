export default function PaddleHit(ballObj, paddleProps){

    console.log(paddleProps);
    if(
       ballObj.x < paddleProps.x + paddleProps.width && 
       ballObj.x > paddleProps.x &&
       paddleProps.y < paddleProps.y + paddleProps.height &&
       ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
       )
       {
           
        let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2); // Check where the ball hit the paddle

        collidePoint = collidePoint / (paddleProps.width / 2);

        let angle = (collidePoint * Math.PI) / 3;
        
        console.log(angle);

        ballObj.dx = ballObj.speed * Math.sin(angle);
        ballObj.dy = -ballObj.speed * Math.cos(angle);
       }
}