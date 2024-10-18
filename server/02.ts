// with ts we can create complex types by combining simple types.
// two ways to do so

// union 
// generics


// union -declare that it can have one of many types

// boolean can be expressed in such a way.
type myBool = true | false;

// pokemon example
type PokemonType = 
    'normal' | 
    'fire' | 
    'water' | 
    'grass' | 
    'electric' | 
    'ice' | 
    'fighting' | 
    'poison' | 
    'ground' | 
    'flying' | 
    'psychic' | 
    'bug' | 
    'rock' | 
    'ghost' | 
    'dark' | 
    'dragon' | 
    'steel' | 
    'fairy';


// i can also give multiple types as a inout in a function

function arrayHandling(obj : string | string[]){
    if(typeof obj === "string") return [obj]
    return obj
}
console.log("hi")
console.log(arrayHandling("hello"))


// Generics

