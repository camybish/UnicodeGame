class display {
    constructor (game) {
        this.game = game;
        this.mainEl = document.querySelector('#main-container');
    }

    newNumber () {
        let nnd = document.querySelector('#numGoal')
        nnd.innerHTML = this.game.newNumber;
    }

    numberGoal () {
        let ngd = document.querySelector('.numberGoalDisplay')
        ngd.innerHTML = this.game.numberGoal;
    }
}

module.exports = display;