First I imagined the structure of my game.
What is the data I need ? How to store it ?
I thought there would be 3 classes : board, dealer and players (1 or 2).

In the board, the first thing I needed was a deck of cards. I thought first to create manually an array of objects, but then I found on the internet the idea to make a constructor function to generate the deck. Less writings here. I chose this idea.

Checked if all the files were properly linked to the HTML.

Then I started to create the game constructor itself. This is the most difficult part for me, so I wanted to dive in as soon as possible.

Structure (parameters of the constructor) is what is present on the game board. I added them to the constructor,  thanks to "this.".

Then the first method ... drawing a random card among the deck. Easy with the "sample" function from lodash.

But then I had to make sure these cards were no longer available in the deck, in order to maintain the probabilities, essential in this game.

Developed the function to draw a new random card from the deck, and remove it from the deck.
