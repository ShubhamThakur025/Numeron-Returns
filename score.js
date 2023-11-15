// Iteration 8: Making scoreboard functional
let scoreBoard = document.getElementById('score-box')
let score = localStorage.getItem('score')
let replay = document.getElementById('play-again-button')
scoreBoard.innerText += score
replay.onclick = () =>{
    location.href = 'game.html'
}