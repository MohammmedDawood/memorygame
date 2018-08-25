/*
 * Create a list that holds all of your cards
 */
// debugger;
"use strict";
let icons = ['fa fa-diamond', 'fa fa-diamond',
    'fa fa-anchor', 'fa fa-anchor', 'fa fa-paper-plane-o',
    'fa fa-paper-plane-o', 'fa fa-bolt', 'fa fa-bolt',
    'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-leaf',
    'fa fa-leaf', 'fa fa-bomb', 'fa fa-bomb', 'fa fa-cube',
    'fa fa-cube'
]

//open cards array(where comparison happens :)
let openedCards = [];
let matchedCards = [];

let second = 0,
    minute = 0,
    hour = 0;
let timer = document.querySelector('.timer');
let interval;

let counter = 0;
let starRating = 3;


let ckm = document.getElementById('ck')

let modal = document.getElementById("popup1")
let closeicon = document.querySelector(".close");
let playAgain = document.getElementById("play-again")
let moves = document.querySelector(".moves");

// declare variables for star
const stars = document.querySelectorAll(".fa-star");
let starsList = document.querySelectorAll(".stars li");

//create cards in HTML

const cardsContainer = document.querySelector('.deck');

let nodes = cardsContainer.childNodes;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// document.body.onload =  start();
const start = () => {
    //RESETGAMEBOARD
    cardsContainer.innerHTML = '';
    matchedCards = [];
    openedCards = [];
    moves.innerHTML = 0;
    counter = 0;
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerHTML = `${minute} minutes ${second} seconds`;
    ckm.classList.remove('checkmark');
    ckm.firstElementChild.classList.remove('checkmark__circle');
    ckm.lastElementChild.classList.remove('checkmark__check');
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }

    // shuffle deck
    icons = shuffle(icons);
    for (let i = 0; i < icons.length; i++) {
        const card = document.createElement("li");
        card.classList.add('card');
        card.innerHTML = `<i class='${icons[i]}'></i>`;
        cardsContainer.appendChild(card);
        click(card);
    }

}

//CLICK  EVENT
//DISPLAY CARDS
let click = (card) => {
    card.addEventListener('click', function display() {
        //have one opened card
        if ((openedCards.length < 2) && (this !== openedCards[0])) {
            this.classList.add('show', 'open');
            openedCards.push(this);
        }
        if (openedCards.length === 2) {
            compare();
        }
    });
}

/*
 *comparison
 */

//MATCHED

const matched = () => {
    openedCards[0].classList.add('match');
    openedCards[1].classList.add('match');
    openedCards[0].classList.remove('show', 'open');
    openedCards[1].classList.remove('show', 'open');
    matchedCards.push(openedCards[0], openedCards[1]);
    openedCards = [];
}

//UNMATCHED

const unmatched = () => {
    openedCards[0].classList.add('unmatched', 'disabled');
    openedCards[1].classList.add('unmatched', 'disabled');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add('disabled');
    }
    setTimeout(function () {
        openedCards[0].classList.remove('show', 'open', 'unmatched', 'disabled');
        openedCards[1].classList.remove('show', 'open', 'unmatched', 'disabled');
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].classList.remove('disabled');
        }
        openedCards = [];
    }, 1100);
}

const compare = () => {
    if (openedCards[1].innerHTML === openedCards[0].innerHTML) {
        count();
        matched();
        isOver();
    } else {
        count();
        unmatched();
    }

}

//GAME OVER POP UP
const isOver = () => {
    if (matchedCards.length === 16) {
        stopTimer();
        let finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add('show-1');



        //showing move, rating, time on modal
        document.getElementById('finalMove').innerHTML = counter;
        document.getElementById('starRating').innerHTML = starRating;
        document.getElementById('totalTime').innerHTML = finalTime;

        ckm.firstElementChild.classList.add('checkmark__circle');
        ckm.lastElementChild.classList.add('checkmark__check');
        ckm.classList.add('checkmark');
        playModal();
    }
}

// intialize timer and move counter  and star rating
const count = () => {
    if (openedCards.length === 2) {
        counter++;
        moves.innerHTML = counter;
    }
    if (counter === 1) {
        startTimer();
    }
    // setting rates based on moves
    if ((counter > 10) && (counter < 16)) {
        for (let i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
        starRating = 2;
    } else if (counter > 16) {
        for (let i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
        starRating = 1;
    }
}

//MOVECOUNTER
//NUMBER OF MOVES
//TIMER

function startTimer() {
    interval = setInterval(function () {
        second++
        timer.innerHTML = `${minute} minutes ${second} seconds`;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            timer.innerHTML = `${hour} hours ${minute} minutes ${second} seconds`;
        }
    }, 1000);
}
//RESTART
const restartbtn = document.querySelector('.restart');
restartbtn.addEventListener('click', function reset() {
    //RESETTIMER
    stopTimer();
    start();
});

// play Again
const playModal = () => playAgain.addEventListener('click', function () {
    modal.classList.remove('show-1');
    start();
});

//stoptimer
const stopTimer = () => clearInterval(interval);

// Shuffle function
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    return array;
}

//to start game
document.body.onload = start();