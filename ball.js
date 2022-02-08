//Set global variable that would contain the position, velocity and the html element "ball"
var position = 0;
var velocity = 10;
var reverse = false;
var ball = document.getElementById('ball');

function moveBall(){
    if(!reverse){
        position = position + velocity;
        ball.style.left = position + "px";
    } else {
        position = position - velocity;
        ball.style.left = position + "px";
    }

if(position > 300 || positsion == 0){
    reverse = !reverse;
}    
}

setInterval(moveBall, 100);