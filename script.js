`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];
const gamePattern = [];

const nextSequence = function () {
    const randomNum = Math.trunc(Math.random() * 4);
    const randomCol = buttonColors[randomNum];
    gamePattern.push[randomCol];
};
nextSequence();
