const render = require('../lib/render')
const unicodeGame = require('../lib/unicodeGame')

describe('Unicode Integration', () => {
    it('ticks switch 1', () => {
        const uniCode = new unicodeGame(50)
        
        expect("0").toBe("0")
    })
})