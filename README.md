I chose the BlackJack Game because I've always liked casino games, and Blackjack is the first I learned when I was a kid. Consequently, I like and know this game very well.
It looked like a good starting point for my first game.


Day 1 :


First I imagined the structure of my game.
What is the data I need ? How to store it ?
I thought there would be 3 classes : board, dealer and players (1 or 2).

In the board, the first thing I needed was a deck of cards. I thought first to create manually an array of objects, but then I found on the internet the idea to make a constructor function to generate the deck. Less writings here. I chose this idea.

Checked if all the files were properly linked to the HTML.

Then I started to create the game constructor itself. This is the most difficult part for me, so I wanted to dive in as soon as possible.

Structure (parameters of the constructor) is what is present on the game board. I added them to the constructor,  thanks to "this.".

Then the first method ... drawing a random card among the deck. Easy with the "sample" function from lodash.

But then I had to make sure these cards were no longer available in the deck, in order to maintain the probabilities balance, essential in this game.

Developed the function to draw a new random card from the deck, and remove it from the deck.

Day 2 :

Starting working on my methods, I thought of reorganizing my work:
-I created ONE .js, which helps me think, and maybe later I will divide it into several files, for clarity purposes.
-I saw that I needed only to build a single class (BOARD), and needed these parameters : dealersHand, deck, player1Pot, player1Hand, player2Pot, player2Hand.

Completed my "drawACard" method to remove the taken card from the original deck.
Completed a few simple methods of the board.

By the end of the day, I realised it would be simpler to have one .js file for the BOARD, one for the PLAYER, and one for the DEALER.

Little problem with the order of my scripts in the HTML: I need the player and dealer constructors for my GameBLackJack constructor, so I put the player and dealer files on top of the board file in my HTML.
