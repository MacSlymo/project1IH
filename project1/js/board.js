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


//Created the proper game constructor

function GameBlackJack () {
	this.turn = 0;
  this.deck = new deckOfCards();
	this.cardsBin = [];
	this.availableCards = [_.remove(this.deck, function(){
		var that = this;
		return that.cardsBin;
	})];
	this.dealerHand = [];
	this.player1Hand = [];
	this.player2Hand = [];
	this.player1Chips = 50;
	this.player2Chips = 50;
	this.player1Pot = 0;
	this.player2Pot = 0;
  this.chips = {
		chipOf1 : 1,
		chipOf2 : 2,
		chipOf5 : 5,
		chipOf10 : 10
	};

//REMOVE THE DRAWN CARDS FROM DECK

	GameBlackJack.prototype.takeACard = function () {
		var that = this;
		var newCard = _.sample(that.deck);
		that.cardsBin.push(newCard);
		return newCard;
	};

/*
	 GameBlackJack.prototype.bet= function () {
		$(document).onClick('.chip', function() {
    	var pot = $('.chip'.val());
		});
		return pot;
	};

	GameBlackJack.prototype.pass= function () {

	};
*/


}

var game = new GameBlackJack();

console.log(game);
