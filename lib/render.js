const render = {
    updater : (game) => {
        let switches = document.querySelector("#switch1")
        if(switches !== null) {
            switches.addEventListener('change', function() {
                if (switches.checked) {
                    game.toggleByte(1);
                    game.calc8bit();
                    console.log(game.newNumber)
                } else {
                    game.toggleByte(1);
                    game.calc8bit();
                    console.log(game.newNumber)
                }
                render.dynamicNumbers(game)
            })
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
            console.log(currentNumDisplay.textContent)
        }
    }
}

module.exports = render;