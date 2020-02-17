export class Pokemon {
    name : String;
    speed : number;
    healpoint : number;
    damage : number;
    resistance: number;

    constructor(name : String, speed : number, healpoint : number, damage : number, resistance?: number) {
        this.name = name;
        this.speed = speed;
        this.healpoint = healpoint;
        this.damage = damage;
        this.resistance = resistance || 0;
    }

    attack(pokemon : Pokemon) {
        console.log(this.name + "("+ this.healpoint +") attaque " + pokemon.name+ "("+ pokemon.healpoint +")")
        let dmg = this.damage - pokemon.resistance
        pokemon.healpoint = pokemon.healpoint - dmg;
        console.log(this.name + "("+ this.healpoint +") a infligé " + dmg + " dégats");
        console.log("Il reste " + pokemon.healpoint + " HP a " + pokemon.name + " !" );
        return true;
    }
}

