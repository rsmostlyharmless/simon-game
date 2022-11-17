`use strict`;

const buttonColors = [`red`, `blue`, `green`, `yellow`];

let gamePattern = [];
let chosenCol = [];

let started = false;
let level = 0;

// var buttonColours = ['red', 'blue', 'green', 'yellow'];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// starts game
$(document).keydown(function () {
    if (!started) {
        $(`#level-title`).text(`Level ` + level);
        nextSequence();
        started = true;
    }
});

// $(document).keypress(function () {
//     if (!started) {
//         $('#level-title').text('Level ' + level);
//         nextSequence();
//         started = true;
//     }
// });

// users choise of colors gets stored in chosenCol
$(`.btn`).click(function () {
    let userChoice = $(this).attr(`id`);
    chosenCol.push(userChoice);
    playSound(userChoice);
    animPress(userChoice);
    checkAnswer(chosenCol.length - 1);
});

// $('.btn').click(function () {
//     var userChosenColour = $(this).attr('id');
//     userClickedPattern.push(userChosenColour);

//     playSound(userChosenColour);
//     animatePress(userChosenColour);

//     checkAnswer(userClickedPattern.length - 1);
// });

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

// function checkAnswer(currentLevel) {
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(function () {
//                 nextSequence();
//             }, 1000);
//         }
//     } else {
//         playSound('wrong');
//         $('body').addClass('game-over');
//         $('#level-title').text('Game Over, Press Any Key to Restart');

//         setTimeout(function () {
//             $('body').removeClass('game-over');
//         }, 200);

//         startOver();
//     }
// }

const nextSequence = function () {
    chosenCol = [];
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

// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     $('#level-title').text('Level ' + level);
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);

//     $('#' + randomChosenColour)
//         .fadeIn(100)
//         .fadeOut(100)
//         .fadeIn(100);
//     playSound(randomChosenColour);
// }

// Brief color change upon button press
const animPress = function (curColor) {
    $(`#` + curColor).addClass(`pressed`);
    setTimeout(function () {
        $(`#` + curColor).removeClass(`pressed`);
    }, 100);
};

// function animatePress(currentColor) {
//     $('#' + currentColor).addClass('pressed');
//     setTimeout(function () {
//         $('#' + currentColor).removeClass('pressed');
//     }, 100);
// }

// plays audio
const playSound = (name) => {
    const audio = new Audio(`sounds/` + name + `.mp3`);
    audio.play();
};

// function playSound(name) {
//     var audio = new Audio('sounds/' + name + '.mp3');
//     audio.play();
// }

const startOver = function () {
    level = 0;
    gamePattern = [];
    started = false;
};

// function startOver() {
//     level = 0;
//     gamePattern = [];
//     started = false;
// }
