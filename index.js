const unicodeGame = require('./lib/unicodeGame');

// const display = new Display();
// the texting class as a basic version will feed in the decimal versions of the Unicode for the response:
// I've traveled to a haberdashery to aquire fabrics for my sewing side hustle, fam (emojis)

function getRandomInt(max) {
    return 1+ Math.floor(Math.random() * max);
}

const unicode = new unicodeGame(getRandomInt(254));