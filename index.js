var player1Random1;
var player2Random2;
var player1Random2;
var player2Random1;
var score1;
var score2;
var count1 = 0;
var count2 = 0;


var player1 = prompt("What is your name? first player");
var player2 = prompt("What is your name? second player");

document.getElementById("ply1").textContent = player1;
document.getElementById("ply2").textContent = player2;

document.querySelector(".roll1").addEventListener("click", rollDice1);
document.querySelector(".score2").textContent = count2;

function rollDice1() {
    document.querySelector(".result").removeEventListener("click", result);
    player1Random1 = Math.floor(Math.random() * 6) + 1;
    var diceImage = "image/dice-" + player1Random1 + ".png";
    document.querySelector(".dice1-1").setAttribute("src", diceImage);

    player1Random2 = Math.floor(Math.random() * 6) + 1;
    var diceImage = "image/dice-" + player1Random2 + ".png";
    document.querySelector(".dice1-2").setAttribute("src", diceImage);

    score1 = player1Random1 + player1Random2;

    document.querySelector(".roll1").removeEventListener("click", rollDice1);

    document.querySelector(".roll2").addEventListener("click", rollDice2);
}


function rollDice2() {
    player2Random1 = Math.floor(Math.random() * 6) + 1;
    var diceImage = "image/dice-" + player2Random1 + ".png";
    document.querySelector(".dice2-1").setAttribute("src", diceImage);

    player2Random2 = Math.floor(Math.random() * 6) + 1;
    var diceImage = "image/dice-" + player2Random2 + ".png";
    document.querySelector(".dice2-2").setAttribute("src", diceImage);

    score2 = player2Random1 + player2Random2;
    
    document.querySelector(".roll2").removeEventListener("click", rollDice2);
    document.querySelector(".result").addEventListener("click", result);
    
}


function result() {
    document.querySelector(".roll1").addEventListener("click", rollDice1);
    if (score1 >= 8 && score1 > score2) {
        count1++;
        // document.querySelector("h1").textContent = player1 + ' wins'
        document.querySelector(".score1").textContent = count1;
        // setTimeout(function () {document.querySelector("h1").textContent = 'Ready to play'}, 2000)
    } else if (score2 >= 8 && score2 > score1) {
        count2++;
        document.querySelector(".score2").textContent = count2;
        // document.querySelector("h1").textContent = player2 + ' wins'
        // setTimeout(function () {document.querySelector("h1").textContent = 'Ready to play'}, 2000)
    } 
    if (count1 === 3 || count2 === 3) {
        document.querySelector(".result").removeEventListener("click", result);
        document.querySelector(".roll1").removeEventListener("click", rollDice1);
        document.querySelector(".roll2").removeEventListener("click", rollDice2);
        document.querySelector(".alert").classList.add("pop");
        document.querySelector(".overlay").classList.remove("hide");
    }
    if (count1 === 3) {
        document.querySelector(".alert h3").textContent = player1 + ' wins'
    } else if (count2 === 3) {
        document.querySelector(".alert h3").textContent = player2 + ' wins'
    } 
    // else {
    //     document.querySelector("h1").textContent = 'Draw'
    //     setTimeout(function () {document.querySelector("h1").textContent = 'Ready to play'}, 2000)
    // }
}

document.querySelector(".overlay").addEventListener("click", hide);
function hide() {
    document.querySelector(".alert").classList.remove("pop");
    document.querySelector(".overlay").classList.add("hide");
}
document.querySelector(".alert button").addEventListener("click", function() {window.location.reload(); document.querySelector(".overlay").classList.add("hide");});

