'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const selectElement = function (query) {
  return document.querySelector(query);
};

const displayMessage = function (message) {
  selectElement('.message').textContent = message;
};

selectElement('.check').addEventListener('click', function () {
  const guess = +selectElement('.guess').value;

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    selectElement('.number').textContent = secretNumber;

    selectElement('body').style.backgroundColor = '#60b347';
    selectElement('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      selectElement('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      selectElement('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      selectElement('.score').textContent = 0;
    }
  }
});

selectElement('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  selectElement('.score').textContent = score;
  selectElement('.number').textContent = '?';
  selectElement('.guess').value = '';

  selectElement('body').style.backgroundColor = '#222';
  selectElement('.number').style.width = '15rem';
});
