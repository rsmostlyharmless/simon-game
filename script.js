`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];
const gamePattern = [];
const chosenCol = [];

let started = false;
let level = 0;

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
});

const nextSequence = function () {
    level++;
    $(`#level-title`).text(`Level ` + level);

    const randomNum = Math.trunc(Math.random() * 4);
    const randomCol = buttonColors[randomNum];
    gamePattern.push[randomCol];

    $(`#` + randomCol)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomCol);
};

// plays audio
const playSound = (name) => {
    const audio = new Audio(`sounds/` + name + `.mp3`);
    audio.play();
};

const animPress = function (curColor) {
    $(`#` + curColor).addClass(`pressed`);
    setTimeout(function () {
        $(`#` + curColor).removeClass(`pressed`);
    }, 100);
};
