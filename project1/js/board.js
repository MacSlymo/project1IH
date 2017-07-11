//Created a deck of cards using constructor
//(good training for constructors and loops)

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deckOfCards(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

		for( var s = 0; s < this.suits.length; s++ ) {
				for( var n = 0; n < this.names.length; n++ ) {
						cards.push( new card( n+1, this.names[n], this.suits[s] ) );
						}
				}
				return cards;
		}


		//SET TOP VALUE TO 10


//Class for a new game

function GameBlackJack () {
	this.turn = 0;
	this.globalTurn = 0;
  this.deck = new deckOfCards();
	this.cardsBin = [];
	this.dealer = new Dealer();
	this.player1 = new Player();
	this.player2 = new Player();
  this.chips = {
		chipOf1 : 1,
		chipOf2 : 2,
		chipOf5 : 5,
		chipOf10 : 10
	};

//Take a random card in the deck and remove it from the deck

GameBlackJack.prototype.takeACard = function (whichHand) {
	var newCard = _.sample(this.deck);
	var indexOfNewCard = this.deck.indexOf(newCard);
	this.cardsBin.unshift(newCard);
	this.deck.splice(indexOfNewCard, 1);
	whichHand.push(newCard);
	return newCard;
};

//Pass your turn

GameBlackJack.prototype.passYourTurn = function () {
	this.turn++;
};

//End of each turn (2 players + dealer have played)

GameBlackJack.prototype._endOfGlobalTurn = function () {
	this.deck = new deckOfCards();
	this.cardsBin = [];
	this.dealer.hand = [];
	this.player1.hand = [];
	this.player2.hand = [];
	this.globalTurn++;
};

//Restart a new game

GameBlackJack.prototype.newGame = function () {
  game = new GameBlackJack();
};

//According to your hand, get paid or lose your bet

GameBlackJack.prototype._payTheBets = function (whichPlayer) {
	var winnings = function (whichPlayer) {
	return game.whichPlayer.pot * 2;
	};
	if (this.whichPlayer.handValue > this.dealer.handValue) {
		game.whichPlayer.chips = game.whichPlayer.chips + winnings;
		game.whichPlayer.pot = 0;
	} else if (this.whichPlayer.handValue > this.dealer.handValue || this.whichPlayer.handValue > 21) {
					game.whichPlayer.pot = 0;
	} else if (this.whichPlayer.handValue === 21) {
					game.whichPlayer.chips = game.whichPlayer.chips + winnings * 1.25;
					game.whichPlayer.pot = 0;
				}
			};

//Bet method TO DO WHEN CHIPS BUILT (HTML, JQUERY)

GameBlackJack.prototype.bet = function (whichPot) {
	$(document).onClick('.chip', function() {
		var pot = $('.chip'.val()).reduce(function (a, b) {
			return a + b;
    });
		return pot;
	});
};

//The game's flow TO DO

GameBlackJack.prototype._newRound = function () {
	game.takeACard(game.dealer.hand);
	game.takeACard(game.dealer.hand);
	game.takeACard(game.player1.hand);
	game.takeACard(game.player2.hand);
	//Players Bet
	//Player 1 asks for cards OR bets
	this.turn++;
	//Player 2 asks for cards OR bets
	this.turn++;
	//Dealer turn over his hidden cards
	game.dealer.dealerProcess();
	game._payTheBets(game.player1);
	game._payTheBets(game.player2);
	this.turn++;
	};

//Render the game TO DO

GameBlackJack.prototype._render = function () {

};

/*
this.grid.forEach(function (row) {
	console.log(row);
});

var that = this;

$('.row').each(function (y, row) {
	$(row).children().each(function (x, cell) {
		cell = $(cell);
		if (that.grid[y][x]) {
			cell.addClass(that.grid[y][x].color);
		}
	});
});
*/


}
//Console testing purpose

var game = new GameBlackJack();

console.log(game);
