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
            game.toggleByte(index + 1);
            game.calc8bit();
            render.dynamicNumbers(game);
        } else {
            game.toggleByte(index + 1);
            game.calc8bit();
            render.dynamicNumbers(game);
        }
    },
    winState : () => {
        const victory = document.querySelector(".victory")
        victory.innerHTML = "You win! &nbsp;&nbsp;&nbsp;"
        const para = document.createElement("button");
        para.innerText = "Play Again";
        victory.appendChild(para);
        para.addEventListener('click', function() {
            location.reload()
        }); // need to replace with showing a new instance of the uniCodeGame class
    }
}

module.exports = render;