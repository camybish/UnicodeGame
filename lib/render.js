const render = {
    updater : (game) => {
        let switches = document.querySelector("#switch1")
        switches.addEventListener('change', function() {
            if (switches.checked) {
                game.toggleByte(1);
                game.calc8bit();
            }
        })
    }, 
    dynamicNumbers : (game) => {
        let numberGoalDisplay = document.querySelector("#numGoal");
        numberGoalDisplay.textContent = game.numberGoal;

        let currentNumDisplay = document.querySelector('#currentNum');
        currentNumDisplay.textContent = game.newNumber;
    }
}

module.exports = render;