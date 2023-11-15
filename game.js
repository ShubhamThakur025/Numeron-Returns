// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = Math.round((Math.random() * 100))
let num2 = Math.round((Math.random() * 100))
let num1Tile = document.getElementById('number1')
let num2Tile = document.getElementById('number2')
num1Tile.innerHTML = num1
num2Tile.innerHTML = num2

// Iteration 3: Creating variables required to make the game functional
let operator = 0
let score = 0
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('mul')
let divide = document.getElementById('divide')
let mod = document.getElementById('modulus')

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3Tile = document.getElementById('number3')
var num3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
    num1 = Math.round((Math.random() * 100))
    num2 = Math.round((Math.random() * 100))

    if(num1 < num2){
        let temp = num1
        num1 = num2
        num2 = temp
    }

    operator = Math.round(Math.random()*4)

    if(operator == 0){
        num3 = num1+ num2
    }
    else if (operator == 1){
        num3 = num1- num2
    }
    else if (operator == 2){
        num3 = num1* num2
    }
    else if (operator == 3){
        num3 = Math.floor(num1/ num2)
    }
    else if (operator == 4){
        num3 = num1% num2
    }
    num1Tile.innerHTML = num1
    num2Tile.innerHTML = num2
    num3Tile.innerHTML = num3
}
randomise()

// Iteration 6: Making the Operators (button) functional
let buttons = document.getElementById('buttons')
buttons.addEventListener('click', function (event) {
    let isCorrect = false;
    console.log(event.target.id == 'plus')
    if (event.target.id == 'plus') {
        isCorrect = num1 + num2 === num3;
    } else if (event.target.id === 'minus') {
        isCorrect = num1 - num2 === num3;
    } else if (event.target.id === 'mul') {
        isCorrect = num1 * num2 === num3;
    } else if (event.target.id === 'divide') {
        isCorrect = Math.floor(num1 / num2) === num3;
    } else if (event.target.id === 'modulus') {
        isCorrect = num1 % num2 === num3;
    }

    if (isCorrect) {
        score++;
        randomise();
        reset();
    } else {
        location.href = './gameover.html';
    }
});

// Iteration 7: Making Timer functional
let timerBox = document.getElementById('timer')
let time = 20
let timerID
function timer() {
    time = 20
    timerBox.innerHTML = time
    timerID = setInterval(function () {
        time--
        if (time == 0) {
            location.href = './gameover.html'
        }
        timerBox.innerHTML = time
    }, 1000)
    localStorage.setItem('score', score)
}
function reset() {
    clearInterval(timerID)
    timer()
}
timer()