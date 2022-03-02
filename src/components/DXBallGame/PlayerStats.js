export default function PlayerStats(ctx, canvas, player){

    //Name
    ctx.font = "22px Fantai";
    ctx.fillStyle = "White";
    ctx.fillText(`Name: ${player.name}`, 20, 30);

    //Lives
    ctx.font = "22px Arial";
    ctx.fillStyle = "Red";
    let gap = 0;
    for(let i=0; i< player.lives; i++){
        ctx.fillText("❤️", canvas.width / 2 - 30 + gap, 30);
        gap += 30;
    }

    //Score
    ctx.font = "22px Fantai";
    ctx.fillStyle = "White";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 120, 30);
}