import data from "../../../data";
import ResetBall from "./ResetBall";
export default function AllBroke(bricks, player, canvas, ballObj){

    let {brickObj, paddleProps} = data;

    let totalBroken = 0;

    for(let i=0; i < bricks.length; i++){
        if(bricks[i].broke === true){
            totalBroken++;
        }
    }
    if(totalBroken === bricks.length){
        //alert("all broke");
        //console.log(player.level);
        player.level++;
        //alert("Level UP");
        //console.log(player.level);
        //ballObj.y = canvas.height - 20; // Change the position of the ball once each and every brick is broken
        ResetBall(ballObj, canvas, paddleProps);
        brickObj.y = 50;
    }

}