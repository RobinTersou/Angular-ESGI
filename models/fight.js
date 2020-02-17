"use strict";
exports.__esModule = true;
var Fight = /** @class */ (function () {
    function Fight(_pokemon1, _pokemon2) {
        this.pokemon1 = _pokemon1;
        this.pokemon2 = _pokemon2;
        if (this.pokemon1.speed >= this.pokemon2.speed) {
            this.firstAttacker = this.pokemon1;
            this.secondAttacker = this.pokemon2;
        }
        else {
            this.firstAttacker = this.pokemon2;
            this.secondAttacker = this.pokemon1;
        }
    }
    Fight.prototype.start = function () {
        var _this = this;
        // Compare speed of the 2 pokemon
        // => Faster is the first to attack
        var fight = setInterval(function () {
            _this.turn(fight);
        }, 1000);
    };
    Fight.prototype.turn = function (i) {
        this.defineOrder();
        this.attack();
        if (this.pokemon1.healpoint <= 0) {
            console.log(this.pokemon2.name + " a gagné le combat ! Il lui reste " + this.pokemon2.healpoint + "HP");
            clearInterval(i);
        }
        else if (this.pokemon2.healpoint <= 0) {
            console.log(this.pokemon1.name + " a gagné le combat ! Il lui reste " + this.pokemon1.healpoint + "HP");
            clearInterval(i);
        }
        else {
            this.changeTurn();
            this.attack();
        }
    };
    Fight.prototype.defineOrder = function () {
        if (this.pokemon1.speed >= this.pokemon2.speed) {
            this.firstAttacker = this.pokemon1;
            this.secondAttacker = this.pokemon2;
        }
        else {
            this.firstAttacker = this.pokemon2;
            this.secondAttacker = this.pokemon1;
        }
    };
    Fight.prototype.changeTurn = function () {
        var tmp = this.firstAttacker;
        this.firstAttacker = this.secondAttacker;
        this.secondAttacker = tmp;
    };
    Fight.prototype.attack = function () {
        this.firstAttacker.attack(this.secondAttacker);
    };
    return Fight;
}());
exports.Fight = Fight;
