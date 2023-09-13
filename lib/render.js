const render = {
    updater : (game, index) => {
        switches = document.querySelector("#" + game.switchArr[index]);
        if(switches !== null) {
            render.callToggleByte(game, switches, index)
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
    callToggleByte : (game, switches, index) => {
        if (switches.checked) {
            console.log("switch is checked");
            game.toggleByte(index + 1);
            game.calc8bit();
            console.log(game.newNumber);
            render.dynamicNumbers(game);
        } else {
            console.log("switch is not checked");
            game.toggleByte(index + 1);
            game.calc8bit();
            console.log(game.newNumber);
            render.dynamicNumbers(game);
        }
    },
    winState : (game) => {
        
    }
}

module.exports = render;