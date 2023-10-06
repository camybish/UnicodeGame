/**
 * @jest-environment jsdom
 */

const unicodeGame = require('../lib/unicodeGame');
const render = require('../lib/render');
const fs = require("fs");

describe('Unicode Integration', () => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    });
    
    it('calls callToggleByte when switch is found', () => {
        // MOCKING CALLTOGGLEBYTE
        //const mockCallToggleByte = jest.fn();
        //game.render.callToggleByte = mockCallToggleByte;

        //   :\
        //const switchesElement = document.createElement('div');
        //switchesElement.id = 'switch1';
        const uniCode = new unicodeGame(50)
        const switch1 = document.querySelector("#switch1")
        switch1.checked
        render.updater(uniCode, 0)

        expect(document.querySelector(".newNumberDisplay").textContent).toBe("Current Number: 49")
    });

    it('ensures callToggleByte works', () => {
        const uniCode = new unicodeGame(50)
        const switch1 = document.querySelector("#switch1")
        switch1.checked
        render.callToggleByte(uniCode, switch1, 0)

        expect(document.querySelector(".newNumberDisplay").textContent).toBe("Current Number: 49")
    })
    it('checks winState is shown properly', () => {
        const uniCode = new unicodeGame(8)
        const switch4 = document.querySelector("#switch4")
        switch4.checked
        render.callToggleByte(uniCode, switch4, 3)
    
        expect(document.querySelector(".victory").innerHTML).toBe("You win! &nbsp;&nbsp;&nbsp;<button></button>")
    })
})