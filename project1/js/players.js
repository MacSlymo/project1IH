var Player = function () {
	this.hand = [];
	this.handValue = 0;
	this.chips = 50;
	this.pot = 0;
  this.hasWon = false;
  this.gameOver = false;
  this.isBusted = false;
  this.has21 = false;
};

//Value of hand method CHECKED

Player.prototype.totalValueInHand = function() {
	var result = 0;
	for (i = 0; i < this.hand.length; i++) {
		result += this.hand[i].value;
	}
	this.handValue = result;
	return result;
};



/*
GameBlackJack.prototype._getValueOfHand = function () {
	var
  for (i = 0; i < playersArray.length; i++) {
		return _.find (playersHand, {value});
	};

*/

//Console testing purpose

var newPlayer = new Player();

console.log(newPlayer);
