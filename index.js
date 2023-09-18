const Display = require('./lib/display');
const unicodeGame = require('./lib/unicodeGame');

// const display = new Display();

function getRandomInt(max) {
    return 1+ Math.floor(Math.random() * max);
}

const unicode = new unicodeGame(getRandomInt(254));