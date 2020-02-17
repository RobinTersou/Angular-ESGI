/// <reference types="jest" />

import {Pokemon} from "./models/pokemon";
import {Fight} from "./models/fight"
test("Fastest pokemon should attack first", () =>{
    let pokemon1 = new Pokemon("a", 1, 100, 12, 0)
    let pokemon2 = new Pokemon("a", 2, 100, 15, 0)
    let fight = new Fight(pokemon1, pokemon2)
    fight.defineOrder();
    expect(fight.firstAttacker).toBe(pokemon2);
});

test("Pokemon health should be substracted by damage - resistance when attacked", () => {
    let pokemon1 = new Pokemon("Bulbizarre", 1, 100, 12, 4)
    let pokemon2 = new Pokemon("Salamèche", 2, 100, 15, 0)
    pokemon1.attack(pokemon2)
    expect(pokemon2.healpoint).toBe(88);
    pokemon2.attack(pokemon1)
    expect(pokemon1.healpoint).toBe(89);
});

test("Pokemon is alive", () => {
    let pokemon1 = new Pokemon("Bulbizarre", 1, 10, 12, 4)
    let pokemon2 = new Pokemon("Salamèche", 2, 100, 15, 0)


})