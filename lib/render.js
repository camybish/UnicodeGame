const render = {
    updater : (game) => {
        let switches = document.querySelector("#switch1")
        switches.addEventListener('change', function() {
            if (switches.checked) {
                game.toggleByte(1);
                game.calc8Bit();
                console.log(this.game.a);
            }
        })
    }, 
    dynamicNumbers : (game) => {
        document.querySelector("#numGoal") = game.numberGoal;
        document.querySelector('#currentNum') = game.newNumber;
    }
}

module.exports = render;