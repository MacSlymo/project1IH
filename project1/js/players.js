var Player = function () {
	this.hand = [];
	this.chips = 50;
	this.pot = 0;
  this.hasWon = false;
  this.gameOver = false;
  this.isBusted = false;
  this.has21 = false;
};

//Console testing purpose

var newPlayer = new Player();

console.log(newPlayer);
