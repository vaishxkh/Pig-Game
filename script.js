'use strict';
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score01El = document.getElementById('score--0');
const score02el = document.querySelector('#score--1');
const current01El = document.querySelector('#current--0');
const current02E2 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

score01El.textContent = 0;
score02el.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.  Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check for rolled 1;if true switch player
  if (dice !== 1) {
    // add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // switch
  }
});
