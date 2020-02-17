"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, healpoint, damage, resistance) {
        this.name = name;
        this.speed = speed;
        this.healpoint = healpoint;
        this.damage = damage;
        this.resistance = resistance || 0;
    }
    Pokemon.prototype.attack = function (pokemon) {
        console.log(this.name + "(" + this.healpoint + ") attaque " + pokemon.name + "(" + pokemon.healpoint + ")");
        var dmg = this.damage - pokemon.resistance;
        pokemon.healpoint = pokemon.healpoint - dmg;
        console.log(this.name + "(" + this.healpoint + ") a infligé " + dmg + " dégats");
        console.log("Il reste " + pokemon.healpoint + " HP a " + pokemon.name + " !");
        return true;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
