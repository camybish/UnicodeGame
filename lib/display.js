class display {
    constructor (game) {
        this.game = game;
        this.numberGoalDisplay = document.querySelector('#numGoal');
        this.currentNumDisplay = document.querySelector('#currentNum');
        this.mainEl = document.querySelector('#main-container');
    }

    numberGoal () {
        this.numberGoalDisplay.innerHTML = this.game.numberGoal;
    }

    newNumber () {
        this.currentNumDisplay.innerHTML = this.game.newNumber;
    }

    test () {
        document.querySelector('#test').textContent = this.game.test;
    }

    updater () {
        let switches = document.querySelector("#switch1")
        switches.addEventListener('change', function() {
            if (switches.checked) {
                this.game.toggleByte(1);
                this.numberGoal();
                this.game.calc8Bit();
                console.log(this.game.a);
            }
        })
        // let x;
        // switch(switches[x].checked){
        //     case 1:
        //         this.game.toggleByte(1);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 2:
        //         this.game.toggleByte(2);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 3:
        //         this.game.toggleByte(3);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 4:
        //         this.game.toggleByte(4);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 5:
        //         this.game.toggleByte(5);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 6:
        //         this.game.toggleByte(6);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 7:
        //         this.game.toggleByte(7);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        //     case 8:
        //         this.game.toggleByte(8);
        //         this.numberGoal();
        //         this.newNumber();
        //         break;
        // }
    }
}

module.exports = display;