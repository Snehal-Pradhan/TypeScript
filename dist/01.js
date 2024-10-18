"use strict";
// Types by inference.
let helloWorld = "HelloWorld";
/*
basically what happens, is TS keeps the type of a variable in check.
in the above case of helloWorld, it is intrinsically able to understand that it is a string.
it's a simple case, so there's no need to define the type explicitly.
*/
// Define Types
/**
 * to cover complex design patterns an external system is provided by TS.
 */
// Use of interface to determine the type.
const user = {
    name: "Somu",
    id: 0,
};
class Pokemon {
    constructor(name, type, id) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
const charmander = new Pokemon("charmander", "fire", 9);
function printPokemon(pokemon) {
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.type);
}
printPokemon(charmander);
function getBulbasaur() {
    return new Pokemon("bulbasaur", "grass", 1);
}
console.log(getBulbasaur());
// types
/*
boolean
int
bigint
null
string
symbol
undefined
these primitive types can be used in the interface.
*/
/* there are a few more
any
unknown
never
void

*/ 
