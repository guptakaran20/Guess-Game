const button = document.querySelector('.guessSubmit')
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let previousGuesses = [];
const p = document.createElement('p');
button.addEventListener('click',function(e){
  e.preventDefault();
  const input = parseInt(document.querySelector('.guessField').value)
if(input === '' || isNaN(input) || input<1 || input>100){
    alert("Please enter a valid input")
    return;
}
previousGuesses.push(input);
document.querySelector('.guesses').innerHTML = previousGuesses.join(" ");
attempts--;
document.querySelector('.lastResult').innerHTML = attempts;
if (input === randomNumber) {
  document.querySelector('.lowOrHi').innerHTML =
    ` Correct The number was ${randomNumber}`;
  button.disabled = true
  endGame();
} 
else if (attempts === 0) {
  document.querySelector('.lowOrHi').innerHTML =
    `Game Over The number was ${randomNumber}`;
  button.disabled = true
  endGame();
} 
else if (input < randomNumber) {
  document.querySelector('.lowOrHi').innerHTML = "Low";
} 
else {
  document.querySelector('.lowOrHi').innerHTML = "High";
}
document.querySelector('.guessField').value = "";
})
const resultParas = document.querySelector('.resultParas');

function endGame() {
  button.disabled = true;
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  resultParas.appendChild(p);
  startNewGame();
}

function startNewGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    previousGuesses = [];
    document.querySelector('.guesses').innerHTML = '';
    document.querySelector('.lastResult').innerHTML = attempts;
    document.querySelector('.lowOrHi').innerHTML = '';
    document.querySelector('.guessField').value = '';
    button.disabled = false;
    resultParas.removeChild(p);
  });
}
