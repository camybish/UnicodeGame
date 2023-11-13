const textGenerator = require('../lib/textGenerator')

describe('TextGenerator', () => {
    it('converts "Hello!" to its base 10 unicode number', () => {
        const hello = new textGenerator('Hello!')
        expect(hello.base10()).toEqual([72, 101, 108, 108, 111, 33])
    })
})