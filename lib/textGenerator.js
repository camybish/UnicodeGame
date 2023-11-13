const uniCodeGame = require('./unicodeGame')
const characters = require('../characters')

class textGenerator {
    constructor (baseTenValue) {
        this.message = "Hey, how's it going?"
        this.testStr = baseTenValue
    }

    eachLetter () {
        new uniCodeGame()
    }

    base10 () {
        const arrayResult = [];
        for (let i = 0; i < this.testStr.length; i++) { 
            if (/[A-Z]/.test(this.testStr[i])) {
                let num = characters.uppercase[this.testStr[i]]
                arrayResult.push(num)
            } else if (/[a-z]/.test(this.testStr[i])) {
                let num = characters.lowercase[this.testStr[i]]
                arrayResult.push(num)
            } else {
                let num = characters.symbols[this.testStr[i]]
                arrayResult.push(num)
            }
        };

        return arrayResult
    }
}

module.exports = textGenerator;