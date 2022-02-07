//Set global variable that would contain the position, velocity and the html element "ball"

var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"

function moveBall() {
  positionX = positionX + velocity;
  console.log("positionX: " + positionX)
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    ball.style.left = positionX + "px";
  } else {
    if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    ball.style.left = positionX + "px";
  } else {

  if(
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ){
    reverse = !reverse;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
