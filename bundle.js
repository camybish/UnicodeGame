(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/display.js
  var require_display = __commonJS({
    "lib/display.js"(exports, module) {
      var display = class {
        constructor(game) {
          this.game = game;
          this.numberGoalDisplay = document.querySelector("#numGoal");
          this.currentNumDisplay = document.querySelector("#currentNum");
          this.mainEl = document.querySelector("#main-container");
        }
        numberGoal() {
          this.numberGoalDisplay.innerHTML = this.game.numberGoal;
        }
        newNumber() {
          this.currentNumDisplay.innerHTML = this.game.newNumber;
        }
        test() {
          document.querySelector("#test").textContent = this.game.test;
        }
        updater() {
          let switches = document.querySelector("#switch1");
          switches.addEventListener("change", function() {
            if (switches.checked) {
              this.game.toggleByte(1);
              this.numberGoal();
              this.game.calc8Bit();
              console.log(this.game.a);
            }
          });
        }
      };
      module.exports = display;
    }
  });

  // lib/render.js
  var require_render = __commonJS({
    "lib/render.js"(exports, module) {
      var render = {
        updater: (game) => {
          let switches = document.querySelector("#switch1");
          switches.addEventListener("change", function() {
            if (switches.checked) {
              game.toggleByte(1);
              game.calc8bit();
            }
          });
        },
        dynamicNumbers: (game) => {
          let numberGoalDisplay = document.querySelector("#numGoal");
          numberGoalDisplay.textContent = game.numberGoal;
          let currentNumDisplay = document.querySelector("#currentNum");
          currentNumDisplay.textContent = game.newNumber;
          console.log(currentNumDisplay.textContent);
        }
      };
      module.exports = render;
    }
  });

  // lib/unicodeGame.js
  var require_unicodeGame = __commonJS({
    "lib/unicodeGame.js"(exports, module) {
      var render = require_render();
      var unicodeGame2 = class {
        constructor(num) {
          this.test = "hello, world";
          this.numberGoal = num;
          this.a = false;
          this.b = false;
          this.c = false;
          this.d = false;
          this.e = false;
          this.f = false;
          this.g = false;
          this.h = false;
          this.input4Bit;
          this.input8Bit;
          this.newNumber = num;
          render.dynamicNumbers(this);
          this.switch1Checker = document.getElementById("switch1");
          this.switch1Checker.addEventListener("click", this.callUpdater.bind(this));
        }
        /*    this.myData = 0;
          this.button = document.getElementById('myButton');
          this.button.addEventListener('click', this.handleButtonClick.bind(this));
        }
        
        handleButtonClick(event) {
            this.myData += 1;
            console.log(`Button clicked ${this.myData} times`);
          } */
        inBinary4Bit(a, b, c, d) {
          if (a > 1) {
            return "input either a zero or one";
          }
          if (b > 1) {
            return "input either a zero or one";
          }
          if (c > 1) {
            return "input either a zero or one";
          }
          if (d > 1) {
            return "input either a zero or one";
          }
          let newA = a;
          let newB = b * 2;
          let newC = c * 4;
          let newD = d * 8;
          this.input4Bit = newA + newB + newC + newD;
          if (this.input4Bit === this.numberGoal) {
            return "Correct!";
          } else {
            return "Try Again";
          }
        }
        calc4Bit() {
          let switch1 = this.a ? 1 : 0;
          let switch2 = this.b ? 2 : 0;
          let switch3 = this.c ? 4 : 0;
          let switch4 = this.d ? 8 : 0;
          console.log("this.d =" + this.d);
          this.input4Bit = switch1 + switch2 + switch3 + switch4;
          this.newNumber = this.numberGoal - this.input4Bit;
        }
        calc8bit() {
          let switch1 = this.a ? 1 : 0;
          let switch2 = this.b ? 2 : 0;
          let switch3 = this.c ? 4 : 0;
          let switch4 = this.d ? 8 : 0;
          let switch5 = this.e ? 16 : 0;
          let switch6 = this.f ? 32 : 0;
          let switch7 = this.g ? 64 : 0;
          let switch8 = this.h ? 128 : 0;
          this.input8Bit = switch1 + switch2 + switch3 + switch4 + switch5 + switch6 + switch7 + switch8;
          this.newNumber = this.numberGoal - this.input8Bit;
        }
        toggleByte(toggle) {
          switch (toggle) {
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
            case 5:
              this.e = !this.e;
              break;
            case 6:
              this.f = !this.f;
              break;
            case 7:
              this.g = !this.g;
              break;
            case 8:
              this.h = !this.h;
              break;
            default:
              return "chose a position within the bit range";
          }
        }
        checkNumberGoal() {
          return this.numberGoal;
        }
        checkNewNumber() {
          return this.newNumber;
        }
        callUpdater() {
          render.updater(this);
          render.dynamicNumbers(this);
        }
        submit() {
          if (this.numberGoal <= 16) {
            this.calc4Bit();
            return this.input4Bit === this.numberGoal ? "Correct!" : `Try again, you reached ${this.input4Bit}`;
          } else {
            this.calc8bit();
            console.log(this.input8Bit);
            return this.input8Bit === this.numberGoal ? "Correct!" : `Try again, you reached ${this.newNumber}`;
          }
        }
      };
      module.exports = unicodeGame2;
    }
  });

  // index.js
  var Display = require_display();
  var unicodeGame = require_unicodeGame();
  var unicode = new unicodeGame(50);
})();
