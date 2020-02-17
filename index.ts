import {Pokemon} from "./models/pokemon";
import {Fight} from "./models/fight"

let pokemon1: Pokemon;
let pokemon2: Pokemon;

pokemon1 = new Pokemon("Bulbizarre", 2, 100, 12, 4);

pokemon2 = new Pokemon("Salamèche", 1, 100, 15, 2);

let fight = new Fight(pokemon1, pokemon2);
fight.start();

console.log(pokemon1);
console.log(pokemon2);