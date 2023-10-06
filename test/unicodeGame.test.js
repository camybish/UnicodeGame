/**
 * @jest-environment jsdom
 */

const UnicodeGame = require('../lib/unicodeGame')

describe('UnicodeGame', () => {
    it("checks test state returns correct", () => {
        const uniCode = new UnicodeGame(12);
        expect(uniCode.inBinary4Bit(0,0,1,1)).toBe("Correct!")
    })

    it("checks test state returns try again", () => {
        const uniCode = new UnicodeGame(12);
        expect(uniCode.inBinary4Bit(0,1,1,1)).toBe("Try Again")
    })

    it("raises error if 'inBinary4Bit inputs are bigger than 1", () => {
        const uniCode = new UnicodeGame(12);
        const error = uniCode.inBinary4Bit(0,0,2,0)
        expect(error).toBe("input either a zero or one")
    })


    it("toggle one 4Bit switch to reach 8", () => {
        const uniCode = new UnicodeGame(8);
        uniCode.toggleByte(4);
        expect(uniCode.submit()).toBe("Correct!")
    })

    it("toggle two 4Bit switches to reach 12", () => {
        const uniCode = new UnicodeGame(12);
        uniCode.toggleByte(3);
        uniCode.toggleByte(4);
        expect(uniCode.submit()).toBe("Correct!")
    })

    it("toggle 4Bit incorrectly", () => {
        const uniCode = new UnicodeGame(12);
        uniCode.toggleByte(3);
        uniCode.toggleByte(4);
        uniCode.toggleByte(4);
        expect(uniCode.submit()).toBe("Try again, you reached 4")
    })

    it("toggle 8Bit outside range", () => {
        const uniCode = new UnicodeGame(12);
        
        expect(uniCode.toggleByte(9)).toBe("chose a position within the bit range")
    })

    it("toggle 8Bit to 180", () => {
        const uniCode = new UnicodeGame(180);
        uniCode.toggleByte(3);
        uniCode.toggleByte(5);
        uniCode.toggleByte(6);
        uniCode.toggleByte(8);
        
        expect(uniCode.submit()).toBe("Correct!")
    })

    it("toggle 8Bit to 66", () => {
        const uniCode = new UnicodeGame(66);
        uniCode.toggleByte(2);
        uniCode.toggleByte(7);
        
        expect(uniCode.submit()).toBe("Correct!")
    })

})

describe('UniCode Web Functions', () => {
    it('returns 49 when switch 1 is flipped', () => {
        const uniCode = new UnicodeGame(50);
        uniCode.toggleByte(1);
        uniCode.calc8bit();
        expect(uniCode.newNumber).toEqual(49)
    })

    it('returns 49 when switch 1 is flipped', () => {
        const uniCode = new UnicodeGame(50);
        uniCode.toggleByte(1);
        uniCode.calc8bit();
        uniCode.toggleByte(1);
        uniCode.calc8bit();
        expect(uniCode.newNumber).toEqual(50)
    })
})