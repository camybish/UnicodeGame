class unicodeGame {
    constructor (num) {
        this.numberGoal = num;
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.input;
        this.newNumber;
    }

    inBinary4Bit(a,b,c,d) {
        if (a > 1) { return "input either a zero or one"}
        if (b > 1) { return "input either a zero or one"}
        if (c > 1) { return "input either a zero or one"}
        if (d > 1) { return "input either a zero or one"}
        let newA = a;
        let newB = b*2;
        let newC = c*4;
        let newD = d*8;
        this.input = newA + newB + newC + newD;
        if (this.input === this.numberGoal) {
            return "Correct!"
        } else {
            return "Try Again"
        }
    }

    calc4Bit() {
        let switch1 = this.a ? 1 : 0;
        let switch2 = this.b ? 1 : 0;
        let switch3 = this.c ? 1 : 0;
        let switch4 = this.d ? 1 : 0;
        this.input = (switch1) + (switch2 * 2) + (switch3 * 4) + (switch4 * 8)
        this.newNumber = this.numberGoal - this.input;
    }
    
    toggle4Bit(toggle) {
        switch(toggle) {
            case 1:
                this.a = !this.a;
                break;
            case 2:
                this.b = !this.b;
                break;
            case 3:
                this.c = !this.c;
                break;
            case 4:
                this.d = !this.d;
                break;
            default:
                return "there are only 4 bits, choose between 1 and 4"
        }
    }

    checkNumberGoal() {
        return this.numberGoal;
    }


    checkNewNumber() {
        return this.newNumber;
    }

    submit() {
        this.calc4Bit()
        return this.input === this.numberGoal ? "Correct!" : `Try again, you reached ${this.input}`
    }


}

module.exports = unicodeGame;