let callCount = 0;

const render = {
    updater : (game) => {
        this.switches = document.querySelector("#switch1")
        if(this.switches !== null) {
            render.callToggleByte(game)
        }
    }, 
    dynamicNumbers : (game) => {
        // console.log(numberGoalDisplay.textContent)
        let numberGoalDisplay = document.querySelector("#numGoal");
        if (numberGoalDisplay !== null) {
            numberGoalDisplay.textContent = game.numberGoal;
        }

        let currentNumDisplay = document.querySelector('#currentNum');
        if (currentNumDisplay !== null) {
            currentNumDisplay.textContent = game.newNumber;
        }
    },
    callToggleByte : (game) => {
        if (this.switches.checked) {
            console.log("switch is checked");
            game.toggleByte(1);
            game.calc8bit();
            console.log(game.newNumber);
            render.dynamicNumbers(game);
        } else {
            console.log("switch is not checked");
            game.toggleByte(1);
            game.calc8bit();
            console.log(game.newNumber);
            render.dynamicNumbers(game);
        }
    }
}

module.exports = render;