var game = new GameBlackJack();

game.newRound();

if (game.turn === 4 || 7 || 10 || 13 || 16 || 19 || 22 ) {
  game.globalTurn++;
  game.newRound();
}
