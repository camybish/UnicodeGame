const UnicodeGame = require('../lib/unicodeGame')

describe('UnicodeGame', () => {
    it("checks test state returns correct", () => {
        const uniCode = new UnicodeGame(12);
        expect(uniCode.inBinary4Bit(0,0,1,1)).toBe("Correct!")
    })

    it("raises error if 'inBinary4Bit inputs are bigger than 1", () => {
        const uniCode = new UnicodeGame(12);
        const error = uniCode.inBinary4Bit(0,0,2,0)
        expect(error).toBe("input either a zero or one")
    })


    it("toggle one 4Bit switch to reach 8", () => {
        const uniCode = new UnicodeGame(8);
        uniCode.toggle4Bit(4);
        expect(uniCode.submit()).toBe("Correct!")
    })

    it("toggle two 4Bit switches to reach 12", () => {
        const uniCode = new UnicodeGame(12);
        uniCode.toggle4Bit(3);
        uniCode.toggle4Bit(4);
        expect(uniCode.submit()).toBe("Correct!")
    })

    it("toggle 4Bit incorrectly", () => {
        const uniCode = new UnicodeGame(12);
        uniCode.toggle4Bit(3);
        uniCode.toggle4Bit(4);
        uniCode.toggle4Bit(4);
        expect(uniCode.submit()).toBe("Try Again")
    })
})