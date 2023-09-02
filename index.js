const Display = require('./lib/display');
const unicodeGame = require('./lib/unicodeGame');

const unicode = new unicodeGame(50);
const display = new Display(unicode);

display.newNumber()
display.numberGoal()