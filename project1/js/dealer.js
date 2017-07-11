var Dealer = function () {
	this.hand = [];
	this.handValue = 0;
  this.hasWon = false;
  this.gameOver = false;
  this.isBusted = false;
  this.has21 = false;
};

//Value of hand method CHECKED

Dealer.prototype.totalValueInHand = function() {
	var result = 0;
	for (i = 0; i < this.hand.length; i++) {
		result += this.hand[i].value;
	}
	this.handValue = result;
	return result;
};

Dealer.prototype.dealerProcess = function () {
  if (game.dealer.handValue < 17) {
		drawACard(game.dealer.hand);
	} else {
		passYourTurn();
	}
};

//Console testing purpose

var newDealer = new Dealer();

console.log(newDealer);
