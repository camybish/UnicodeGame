const render = {
    updater : (game, index) => {
        function eachSwitch(element, index) {
            switches = document.querySelector("#" + element);
            if(switches !== null) {
                render.callToggleByte(game, switches, index)
                console.log("Byte has been toggled")
            }
        }
        game.switchArr.forEach(eachSwitch, index)
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
    }
}

module.exports = render;