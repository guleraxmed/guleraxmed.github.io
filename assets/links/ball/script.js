
let bar = document.querySelector("#seki");
let ball = document.querySelector("#top");

let barX = 0;
let ballX = 0;
let ballY = 0;

let point = 0;

let ex = 5;
let ey = 5;


let interval = setInterval(ballMove, 40);

document.onkeydown = Key;


function Key(e){

    e = e || window.event;

    if(e.keyCode == "37"){
        if(barX>0){
            barX -= 25;
        }
    }

    if(e.keyCode == "39"){
        if(barX<700){
            barX+=25;
        }
    }
    bar.style.left = barX + "px";
}


function ballMove(){
    if(ballX<0 || ballX>750){
        ex*= -1;
    }

    if(ballY<0){
        ey*= -1;
    }else if(ballY>550 && ballX >= barX-25 && ballX <= barX + 100){
        point++;
        ey*= -1;
        document.querySelector("#xal").innerHTML = `Sizin xaliniz ${point}`;

    }
    
    else if(ballY>550){
        document.querySelector("#umumi").style.opacity = .7;
        document.querySelector("#umumi").innerHTML = "Siz uduzdunuz " + point;
    }


ballX += ex;
ballY += ey;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
    
}