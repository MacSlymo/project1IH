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
	this.dealer = new Dealer();
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

GameBlackJack.prototype.newGame = function () {
  game = new GameBlackJack();
};

//Pay the bets method TO CHECK

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

//Game setup method TO ADAPT

GameBlackJack.prototype._newRound = function () {
  var that = this;
  $('.row:first .cell').each(function (i, cell) {
    $(cell).click(function () {
      if (that.addToken(i)) that.turn++;
      that.render();
		});

//Render method TO ADAPT

GameBlackJack.prototype._render = function () {
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
};

});

};

}
//Console testing purpose

var game = new GameBlackJack();

console.log(game);
