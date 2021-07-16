var numSquares = 9;
var colors = [];
var pickedColor;
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}




function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			}else if (this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares=9;
			}
			 
			reset();
		});
	}
}




function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#222831";
}

resetButton.addEventListener("click", function(){
	reset();
})





function setupSquares(){
for(var i=0;i<squares.length;i++){
   squares[i].style.backgroundColor=colors[i];
   squares[i].addEventListener("click",function(){
     //add click listeners to squares
     //grab color of clicked square
     var clickedColor=this.style.backgroundColor;
     //compare color to pickedColor
     if(clickedColor===pickedColor){
       messageDisplay.textContent="CORRECT 👍 !! ";
       messageDisplay.style.color="green";
       resetButton.textContent="Play Again 🎮 "; 
       changeColor(clickedColor);
       h1.style.backgroundColor=clickedColor;   
     }else{ 
       this.style.backgroundColor="white";
       messageDisplay.textContent="TRY AGAIN ❌";
       messageDisplay.style.color="red";
     }

   });
}
}
function changeColor(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
}
function pickColor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColors(num){
  var arr=[]
  for(var i=0;i<num;i++){
     arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return  "rgb("+r+", "+g+", "+b+")"; 

}