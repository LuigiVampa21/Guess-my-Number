'use stric';
//
const check = document.querySelector('.check');
const message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreNumber = Number(document.querySelector('.score').textContent);
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let numberHighscore = Number(highscore);

// console.log(Number(highscore.textContent));
// console.log(scoreNumber);

let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

check.addEventListener('click', () => {
  let guessValue = Number(document.querySelector('.guess').value);
  // console.log(guessValue);

  const stillPlaying = scoreNumber > 0;
  const numberIntoRange = guessValue > 0 && guessValue <= 20;

  if (guessValue === 0 && stillPlaying) {
    message.textContent = '⛔No Number';
  } else if (!numberIntoRange) {
    message.textContent = '⛔ Read the fucking rules u Dumbass';
  } else if (guessValue === randomNumber && stillPlaying && numberIntoRange) {
    number.textContent = randomNumber;
    highscore.textContent = score.textContent;
    // scoreNumber === numberHighscore;
    message.textContent = '✌️CONGRATS DUMMY U WON';
  } else if (guessValue > randomNumber && stillPlaying && numberIntoRange) {
    message.textContent = "Number's too high mamen";
    scoreNumber -= 1;
    score.textContent = scoreNumber;
  } else if (guessValue < randomNumber && stillPlaying && numberIntoRange) {
    message.textContent = "Number's too low mamen";
    scoreNumber -= 1;
    score.textContent = scoreNumber;
  } else if (!stillPlaying) {
    message.textContent = 'U looser, go get some rest and try again later';
  }
});

// ------------------------------------------------------------------
let guess = document.querySelector('.guess');

const again = document.querySelector('.again');

again.addEventListener('click', () => {
  score.textContent = 20;
  guess.value = '';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  console.log('hello');
  console.clear();
});

window.addEventListener('keypress', e => {
  console.log(e.key);
  if (e.key === 'Enter') {
    check.click();
  }
});

window.addEventListener('keydown', e => {
  console.log(e.key);
  // console.log('hello');
})



