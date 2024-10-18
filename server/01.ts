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
const user: User = {
    name: "Somu",
    id: 0,
};

interface User {
    name: string;
    id: number;
}

// Creating class; it works with classes as well.
interface PokemonInterface {
    name: string;
    type: string;
    id: number;
}

class Pokemon {
    name: string;
    type: string;
    id: number;

    constructor(name: string, type: string, id: number) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

const charmander: PokemonInterface = new Pokemon("charmander", "fire", 9);

function printPokemon(pokemon: PokemonInterface) {
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.type);
}

printPokemon(charmander);

function getBulbasaur(): Pokemon {
    return new Pokemon("bulbasaur", "grass", 1);
}

console.log(getBulbasaur());
