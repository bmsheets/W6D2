const View = require('./ttt-view');
const Game = require('../../ttt_solution/game');

$( () => {
  // Your code here
  const game = new Game();
  const view = new View(game, $('.ttt'));
});
