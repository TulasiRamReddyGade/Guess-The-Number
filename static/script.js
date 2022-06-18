'use strict';
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const content = document.querySelector('.message');
const input = document.querySelector('.guess');
const displayAnswer = document.querySelector('.number');
const displayScore = document.querySelector('.score');
const displayHighestScore = document.querySelector('.highscore');

let score = 20;
let guess = 0;
let ans = 0;
let highestScore = 0;
const randomNumber = () => {
    let number = Math.random() * (20 - 1) + 1;
    number = Math.trunc(number);
    console.log(number);
    return Number(number);
};

const againFunctionHandler = () => {
    document.querySelector('body').style.backgroundColor = '#222';
    content.textContent = 'Start guessing...';
    input.value = '';
    displayAnswer.textContent = '?';
    score = 20;
    displayScore.textContent = score;
    checkButton.removeAttribute('disabled');
    ans = randomNumber();
};

const checkFunctionHandler = () => {
    // console.log(guess == ans, typeof guess, typeof ans, 1 == 1);
    if (guess === ans) {
        content.textContent = 'Correct number!';
        displayAnswer.textContent = ans;
        document.querySelector('body').style.backgroundColor = '#60b347';
        highestScore = score > highestScore ? score : highestScore;
        displayHighestScore.textContent = highestScore;
        checkButton.disabled = true;
    } else if (guess < ans) {
        score--;
        content.textContent = 'Too Low!';
        displayScore.textContent = score;
    } else {
        score--;
        content.textContent = 'Too High!';
        displayScore.textContent = score;
    }
    if (score <= 0) {
        content.textContent = 'Wrong answer!';
        checkButton.disabled = true;
        displayAnswer.textContent = ans;
    }
};

ans = randomNumber();

againButton.addEventListener('click', () => {
    againFunctionHandler();
});

checkButton.addEventListener('click', () => {
    guess = Number(input.value);
    console.log(guess);
    checkFunctionHandler();
});
