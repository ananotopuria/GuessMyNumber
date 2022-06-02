'use strict';

//secret number(between one and 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//button & input
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //no input

  if (!guess) {
    displayMessage(`⛔️ No number!`);

    //player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `rgb(255, 51, 153)`;
    document.querySelector(`.number`).style.width = `30rem`;

    //highscore

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high! ☁` : `Too low! 🎑`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`Game over 💀`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// reset

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`start guessing...🎈`);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 128, 255)';
  document.querySelector('.number').style.width = '15rem';
});
