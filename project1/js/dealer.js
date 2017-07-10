var Dealer = function () {
	this.hand = [];
  this.hasWon = false;
  this.gameOver = false;
  this.isBusted = false;
  this.has21 = false;
};

Dealer.prototype.dealerProcess = function () {

};

//Console testing purpose

var newDealer = new Dealer();

console.log(newDealer);
