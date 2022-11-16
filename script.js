`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];
const gamePattern = [];
const chosenCol = [];

// users choise of colors gets stored in chosenCol
$(`.btn`).click(function () {
    let userChoice = $(this).attr(`id`);
    chosenCol.push(userChoice);
    playSound(userChoice);
});

const nextSequence = function () {
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
