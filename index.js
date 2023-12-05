
btnClick = document.querySelector("button").addEventListener("click", myFunction);

function myFunction(){
    // first ramdom nunmber fuynction p1
var randomNum1 = Math.floor(Math.random() * 6) + 1; // random number 1 through  6
console.log(randomNum1);

var randDiceImg = "dice" + randomNum1 + ".png" //  concatinate string to create dice1.png through dice6.png
//var randDiceImg = "images/dice" + randomNum1 + ".png"

var randomImgSource = "images/" + randDiceImg; // using string concatination to link source of the image images/dice1.png^

//using querrySelectorAll based on the <img> tag
// and to tap into the first item [0] or seciond [1] in this case
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);

// second ramdom nunmber fuynction p2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2);

var randomImgSource2 = "images/dice" + randomNum2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

// change display for winner
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Winner Player 1!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Winner PLayer 2!";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}
}