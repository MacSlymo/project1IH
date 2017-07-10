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


//Created the proper game constructor CHECKED

function GameBlackJack () {
	this.turn = 0;
	this.globalTurn = 0;
  this.deck = new deckOfCards();
	this.cardsBin = [];
	this.dealer = [];
	this.player1 = new Player();
	this.player2 = new Player();
  this.chips = {
		chipOf1 : 1,
		chipOf2 : 2,
		chipOf5 : 5,
		chipOf10 : 10
	};

//Take a card method CHECKED

GameBlackJack.prototype.takeACard = function (whichHand) {
	var newCard = _.sample(this.deck);
	var indexOfNewCard = this.deck.indexOf(newCard);
	this.cardsBin.unshift(newCard);
	this.deck.splice(indexOfNewCard, 1);
	whichHand.push(newCard);
	return newCard;
};

//Pass your turn method CHECKED

GameBlackJack.prototype.passYourTurn = function () {
	this.turn++;
};

//Reset method (end of global turn) CHECKED

GameBlackJack.prototype._endOfGlobalTurn = function () {
	this.deck = new deckOfCards();
	this.cardsBin = [];
	this.dealer.hand = [];
	this.player1.hand = [];
	this.player2.hand = [];
	this.globalTurn++;
};

//New Game method CHECKED

GameBlackJack.prototype._newGame = function () {
  game = new GameBlackJack();
};

//Pay the bets method TO CHECK

GameBlackJack.prototype._payTheBets = function (player1Hand, player2Hand) {
	var winnings = function (whichHand) {
	return game.whichPlayer.pot * 2;
	};
	game.player1.chips = game.player1.chips + winnings;
	game.player2.chips = game.player2.chips + winnings;
	game.player1.pot = 0;
	game.player2.pot = 0;
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

//Get value of hand method TO DO





}

//Console testing purpose

var game = new GameBlackJack();

console.log(game);
