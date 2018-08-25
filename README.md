# MEMORY GAME PROJECT

## How to Play

1. Click on any card to reveal a symbol.
2. Click on another card to find the matching symbol.
3. Use your memory to remember what symbol shows up on which card.
4. You win the game when all 16 cards are matched!

[Click here to play](https://mahmedtony73.github.io/memorygame/)
![game preview](https://github.com/mahmedtony73/memorygame/blob/gh-pages/img/game2.png "game preview")

## Student Project

I have tremendous fun coding this interactive JavaScript-based game! The starter code from [Udacity's repository](https://github.com/udacity/fend-project-memory-game) has a JavaScript file that includes a shuffle function (to shuffle a deck of cards) to help the student.

### Project Specifications

| CRITERIA | MEETS SPECIFICATIONS
|---|:---
| Memory Game Logic | The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
| Congratulations Popup | When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
| Restart Button | A restart button allows the player to reset the game board, the timer, and the star rating.
| Star Rating | The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating. The number of moves needed to change the rating is up to you, but it should happen at some point.
| Timer | When the player starts a game, a timer should also start. Once the player wins the game, the timer stops.
| Move Counter | Game displays the current number of moves a user has made.

## What I've Learned

- Using the console to log the code helps in debugging
- Getting DOM elements by class requires more work than by ID
- Choosing the right speed/timing can make a game more fun to play and also harder to code
- If I show a pair of cards for too short of a time, it's hard for the user to see the symbols. But if I show the cards for too long of a time, the user get impatient and will try to click on a third card, which must be prevented.
- Asking for user feedback helps to improve the game
- Increase the size of the symbol to make viewing easier
- Change the color of the card to have more contrast
- Discovered a bug where clicking on the same card twice reveals the matching card! The bug is fixed. Yay! :)
- Fixing rendering of pop-up at large scale screen width
- Converting functionto arrow functions
- Adding new shuffle function