const UnicodeGame = require('../lib/UnicodeGame')

describe('UnicodeGame', () => {
    it("checks test state returns correct", () => {
        const uniCode = new UnicodeGame();

        expect(uniCode.inBinary4Bit(0,0,1,1)).toBe("Correct!")
    })

})