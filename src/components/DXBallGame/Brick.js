export default function Brick(level, bricks, canvas, brick){
    brick.width = canvas.width/5 - 1;
    let newbricks = [];
    // if no bricks present
    if(!bricks){
        return [];
    }

    // if all the levels are filled, don't display any more bricks
    if(bricks.length >=5 * level){
        return;
    }

    // Brick Formation here
    for(let i=0; i<5*level; i++){
        let newBrick = new SingleBrick(
            brick.x + brick.width,
            brick.y,
            brick.width,
            brick.height,
            brick.colors
        );
        newbricks.push(newBrick);
        // newBrick.draw();
        brick.x += brick.width + 1;
        if(brick.x + brick.width >= canvas.width){
            brick.x = 0.5;
            brick.y += brick.height + 1;
        }
    }
    
    // console.log(newbricks);
    return newbricks;
} 

class SingleBrick{
    constructor(x, y, w, h, c){
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.colors = c;
        this.broke = false; //brick not broken
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0" : this.colors[1]; // if broken, it will turn that color, if not broken then this color
        
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0" : "transparent";
        //ctx.fillStyle = this.broke ? "#134959" : this.colors[1];
        //ctx.shadowBlur = 0;
        //ctx.shadowColor = "blue";
        
        ctx.fill();
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

