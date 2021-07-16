// dice 1

var randNumber1 = Math.random();
randNumber1 = Math.round(randNumber1*5 + 1);
var randDicePath1 = "images/dice"+randNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randDicePath1);

// dice 2

var randNumber2 = Math.random();
randNumber2 = Math.round(randNumber2*5 + 1);
var randDicePath2 = "images/dice"+randNumber2+".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randDicePath2);


if(randNumber1>randNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";
} else if(randNumber2>randNumber1){
    document.querySelector("h1").innerHTML = "Player 2 WINS!!🚩🚩";
} else{
    document.querySelector("h1").innerHTML = "⬜ DRAW TRY AGAIN ⬜";
}



