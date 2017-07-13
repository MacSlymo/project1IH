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

Day 3 :

Bumps on the road. Apart from personal issues that prevented me from dedicating myself 100% to the project, I got lost in my project. I could not find the logic of my work anymore. I felt stuck and a bit panicked.
I decided to be decisive. I decided to reset my work. 

First the organization of my files. I need one .js file, because it feels more logical to me. 
Secondly, I first built my layout. And then, depending on how I wanted to manipulate it, I added what was needed.
Ultimately, I decided to keep the logic of the game, but going through our classes from week 1 and 2, I felt like I needed to change the form of it. And concerning clarity, I decided to risk repetition at first, if it could allow me to be clear in my head. I could always refactor it later.

Focused on making 1 player works. Then I would seek to implement player 2 .

Day 4 :

After the work of the previous day, and very smart way to display the cards in my game, found on the internet (only on png files with all the cards, where we select the part we want to display), I decided to rework the logic. Keeping the names of my method, and clarifying the ones I felt were not very clear, I spent the majority of my day on it.

... to be continued
