import { Pokemon } from "./pokemon";

export class Fight {
    pokemon1: Pokemon;
    pokemon2: Pokemon;

    firstAttacker: Pokemon;
    secondAttacker: Pokemon;
    constructor(_pokemon1 : Pokemon, _pokemon2: Pokemon) {
        this.pokemon1 = _pokemon1;
        this.pokemon2 = _pokemon2;
        if (this.pokemon1.speed >= this.pokemon2.speed) {
            this.firstAttacker = this.pokemon1;
            this.secondAttacker = this.pokemon2;
        } else {
            this.firstAttacker = this.pokemon2;
            this.secondAttacker = this.pokemon1;
        }
    }

    start() {
        let fight = setInterval(() => { 
            this.turn(fight)
        }, 1000);
    }

    private turn(i: any) {
        this.defineOrder();
        this.attack();
        if( this.pokemon1.healpoint <= 0 ) {
            console.log(this.pokemon2.name + " a gagné le combat ! Il lui reste " + this.pokemon2.healpoint + "HP"); 
            clearInterval(i);
        } else if (this.pokemon2.healpoint <= 0 ) {
            console.log(this.pokemon1.name + " a gagné le combat ! Il lui reste " + this.pokemon1.healpoint + "HP"); 
            clearInterval(i);
        } else {
            this.changeTurn();
            this.attack()
        }
        
    }

    defineOrder() {
        if (this.pokemon1.speed >= this.pokemon2.speed) {
            this.firstAttacker = this.pokemon1;
            this.secondAttacker = this.pokemon2;
        } else {
            this.firstAttacker = this.pokemon2;
            this.secondAttacker = this.pokemon1;
        }
    }

    changeTurn() {
        let tmp = this.firstAttacker;
        this.firstAttacker = this.secondAttacker;
        this.secondAttacker = tmp;
    }

    attack() {
        this.firstAttacker.attack(this.secondAttacker);
    }
} 