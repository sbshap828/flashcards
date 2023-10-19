Flash Cards is a learning program designed for the capitals of the states in the United States.
It displays a state in a random along with 4 choices.
Upon selection- the answer is evaluated. At the same time, a few bars of the state song is played, a picture of the capitol building is displayed and a short blurb on how the city was selected.
The code works as though it were a deck of cards. Even though all of the information is in the js code and in alphabetical order, the deck is sorted before the first question of the game with a function shuffle.

In addition, the four cities of each state are shuffled before display so that people can not memorized the positions during the flash session.
The displayQuestion function reenables the button click functions that were disabled by the handleClick function below. 

During the game, the score is incremented for correct answers within the handleClick function. In addition, the click function on all buttons are disabled to prevent multiple clicks. The handleClick function then provides a goModal with the state's description of how the city became the capital.

endGame occurs when the array length is reached and modal is called again with the final score, a rating of the contestants knowledge.



difficulties encountered was amassing the information and manually listening to and editing the 50 state songs 
