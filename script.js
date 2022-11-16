`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];
const gamePattern = [];
const chosenCol = [];

// users choise of colors gets stored in chosenCol
$(`.btn`).click(function () {
    const userChoise = $(this).attr(`id`);
    chosenCol.push(userChoise);
});

const nextSequence = function () {
    const randomNum = Math.trunc(Math.random() * 4);
    const randomCol = buttonColors[randomNum];
    gamePattern.push[randomCol];

    $(`#` + randomCol)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    const audio = new Audio(`sounds/` + randomCol + `.mp3`);
    audio.play;
};

nextSequence();
