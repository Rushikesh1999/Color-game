var n=6;
 var colors = generatecolor(n);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
 n=3;
 var colors = generatecolor(n);
pickedcolor = pickcolor();
colorDisplay.textContent = pickedcolor;
for( var i=0; i< squares.length; i++){
	if(colors[i]){
		squares[i].style.background=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
}

});

hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
n=6;
var colors = generatecolor(n);
pickedcolor = pickcolor();
colorDisplay.textContent = pickedcolor;
for( var i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].style.display="block";
}


});



colorDisplay.textContent = pickedcolor;

reset.addEventListener("click",function(){
 
colors = generatecolor(n);
pickedcolor = pickcolor();
colorDisplay.textContent = pickedcolor;
this.textContent = "New Colors";
for( var i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}

});

for(  i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
     var clickedcolor = this.style.background;
     if(clickedcolor===pickedcolor){
     message.textContent = "Correct!";    
     change(clickedcolor);
     reset.textContent = "Play Again";
    
     }   
     else{
     this.style.background = "#232323" ;
     message.textContent = "Try Again";
     }
    });

}
function change(color) {
	// body...
  for(i=0; i < squares.length; i++){
  	squares[i].style.background = color;
  }
}

function pickcolor(){
	var c = Math.floor(Math.random()*colors.length);
	return colors[c];
}
function generatecolor(num) {
	var arr = []

	for(i=0; i<num; i++){
     arr.push(randomcolor());
	}
  return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")" ;
}