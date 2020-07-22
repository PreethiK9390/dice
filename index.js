var randomNumber=Math.floor(Math.random() *6)+1;
var randomdiceimage= "dice"+ randomNumber +".png";
var randomlocation ="images/" + randomdiceimage;

document.querySelectorAll("img")[0].setAttribute("src",randomlocation);
var audio= new Audio("C:\Users\PREETHIKADAMBALA\Desktop\All Works\HTMLWORK\let me make a dice game\audio\tadaSound.mp3");

// 1st part

var randomNumber2=Math.floor(Math.random() *6)+1;
var randomdiceimage2= "dice"+ randomNumber2 +".png";
var randomlocation2 ="images/" + randomdiceimage2;

document.querySelectorAll("img")[1].setAttribute("src",randomlocation2);
if(randomNumber > randomNumber2)


document.querySelector("h1").innerHTML ="Player 1 wins";


if(randomNumber < randomNumber2)

document.querySelector("h1").innerHTML="Player 2 wins";



else if(randomNumber===randomNumber2)
document.querySelector("h1").innerHTML="DRAW!!";
