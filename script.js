'use strict';
/* 
document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; 
*/
// creating a random number to guess
const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// we made a function that updates the .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// we change the '?' to show the hidden number, just for us to see it works
// document.querySelector('.number').textContent = secretNumber;

// grabbing the check button and adding a event listener
document.querySelector('.check').addEventListener('click', function () {
  // grabbing the input value and using number function to make it number only
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if user puts no number or zero in input then we change the .message text
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!'); //using function to update .message

    // when guess is correct we change the .message
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!'); // using function instead

    // display the correct number after you win removing the ? mark
    document.querySelector('.number').textContent = secretNumber;

    // change body color when you win
    document.querySelector('body').style.backgroundColor = '#60b347';

    // also increase the hindden number width when win
    document.querySelector('.number').style.width = '30rem';

    // setting highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is greater than secretNumber or lesser (refractered)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too Low!'; // ternery if operator
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!'); //we used ternary in the function

      // when guess is wrong we reduce score also push score variable into new score text
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!'; // message to show when score is zero
      displayMessage('💥 You lost the game!'); // used function to display .message

      // updated score gets changed again
      document.querySelector('.score').textContent = 0;
    }

    // else if (guess > secretNumber) {
    //   // only does all this if score is above 0, to reduce score and display message, an added if statement inside
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     // when guess is wrong we reduce score also push score variable into new score text
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!'; // message to show when score is zero
    //     // updated score gets changed again
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // when guess is lower than secretNumber
    // } else if (guess < secretNumber) {
    //   // only does all this if score is above 0, so an added if statement inside
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low!';
    //     // when guess is wrong we reduce score also push score variable into new score text
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!'; // message to show when score is zero
    //     // updated score gets changed again
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

// adding an eventListener to 'again' buttom and resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
