const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');
const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');
const winnerDisplay = document.getElementById('winner');
const clickCount1 = document.getElementById('click-count1');
const clickCount2 = document.getElementById('click-count2');
const scoreCount1 = document.getElementById('score-count1');
const scoreCount2 = document.getElementById('score-count2');

let clicks1 = 0;
let clicks2 = 0;
let score1 = 0;
let score2 = 0;

side1.addEventListener('click', () => {
    clicks1++;
    sound1.play();
    clickCount1.textContent = clicks1;
    enlargeSide1();
    shrinkSide2();
    checkWinner();
});

side2.addEventListener('click', () => {
    clicks2++;
    sound2.play();
    clickCount2.textContent = clicks2;
    enlargeSide2();
    shrinkSide1();
    checkWinner();
});

function enlargeSide1() {
    if (clicks1 < 10) {
        side1.style.width = `${45 + (clicks1 * 5)}%`;
    }
}

function shrinkSide2() {
    if (clicks1 < 10) {
        side2.style.width = `${45 - (clicks1 * 5)}%`;
    }
}

function enlargeSide2() {
    if (clicks2 < 10) {
        side2.style.width = `${45 + (clicks2 * 5)}%`;
    }
}

function shrinkSide1() {
    if (clicks2 < 10) {
        side1.style.width = `${45 - (clicks2 * 5)}%`;
    }
}

function checkWinner() {
    if (clicks1 >= 10) {
        winnerDisplay.textContent = "فريق رونالدو يفوز";
        score1++;
        scoreCount1.textContent = `فريق رونالدو: ${score1}`;
        resetGame();
    } else if (clicks2 >= 10) {
        winnerDisplay.textContent = "فريق ميسي يفوز";
        score2++;
        scoreCount2.textContent = `فريق ميسي: ${score2}`;
        resetGame();
    }
}

function resetGame() {
    clicks1 = 0;
    clicks2 = 0;
    clickCount1.textContent = '0';
    clickCount2.textContent = '0';
    side1.style.width = '45%';
    side2.style.width = '45%';
}
