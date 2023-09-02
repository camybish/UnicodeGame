class display {
    constructor (game) {
        this.game = game;
        this.mainEl = document.querySelector('#main-container');
    }

    numberGoal () {
        let nnd = document.querySelector('#numGoal')
        nnd.innerHTML = this.game.numberGoal;
    }

    newNumber () {
        let ngd = document.querySelector('#currentNum')
        ngd.innerHTML = this.game.newNumber;
    }

    test () {
        document.querySelector('#test').textContent = this.game.test;
    }
}

module.exports = display;