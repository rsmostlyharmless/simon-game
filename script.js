`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];

let gamePattern = [];
let chosenCol = [];

let started = false;
let level = 0;

// starts game
$(document).keydown(function () {
    if (!started) {
        $(`#level-title`).text(`Level ` + level);
        nextSequence();
        started = true;
    }
});

// users choise of colors gets stored in chosenCol
$(`.btn`).click(function () {
    let userChoice = $(this).attr(`id`);
    chosenCol.push(userChoice);
    playSound(userChoice);
    animPress(userChoice);
    checkAnswer(chosenCol.length - 1);
});

// checks player choice against comp choice
const checkAnswer = function (currentLevel) {
    if (gamePattern[currentLevel] === chosenCol[currentLevel]) {
        if (chosenCol.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound(`wrong`);
        $(`body`).addClass(`game-over`);
        $(`#level-title`).text(`Game Over! Press any key to restart`);

        setTimeout(function () {
            $(`body`).removeClass(`game-over`);
        }, 200);

        startOver();
    }
};

// game play
const nextSequence = function () {
    chosenCol = [];
    level++;
    $(`#level-title`).text(`Level ` + level);

    let randomNum = Math.trunc(Math.random() * 4);
    let randomCol = buttonColors[randomNum];
    gamePattern.push(randomCol);

    $(`#` + randomCol)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomCol);
};

// Brief color change upon button press
const animPress = function (curColor) {
    $(`#` + curColor).addClass(`pressed`);
    setTimeout(function () {
        $(`#` + curColor).removeClass(`pressed`);
    }, 100);
};

// plays audio
const playSound = (name) => {
    const audio = new Audio(`sounds/` + name + `.mp3`);
    audio.play();
};

// resets game
const startOver = function () {
    level = 0;
    gamePattern = [];
    started = false;
};
