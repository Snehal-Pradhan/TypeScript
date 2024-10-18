// intro

/*  
\same as JS but adds additional feature. 
 That feature is TypeScripts's Type system
 JS does check the type of variable regularly.Ts keeps an eye on the type constantly
 main feature is that it can highlight unusual behaviour in the code which can lead to bugs.
 basically reduces the chances of a getting a bug
 */

// Types by inference.

let helloWorld = "HelloWorld";

/*
basically what happens,is TS keeps the type of a variable in check.
in the above case of helloWorld,it is intrinscically able to understand that it is a string.
it knows how JS works.
its a simple case hence no need of defining the type.
but in case of complex programming, diff design patterns like dynamic prog. etc 
*/

// Define Types

/**
 * to cover complex design patterns an external system is provided by TS.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

//  Use of interface to determine the type.
const user : User = {
    name:"Somu",
    id:0,
};


interface User{
    name: string,
    id:number,
};

// creating class ; it works with classes also
interface Pokemon {
    name:string,
    type:string,
    id:number,
}

class Pokemon {
    name: string;
    type:string;
    id: number;
    constructor(name:string,type:string,id:number){
        this.id=id
        this.name=name
        this.type=type
    }
}
const charmander : Pokemon = new Pokemon('charmander','fire',9)

function PrintPokemon(Pokemon:Pokemon){
    console.log(Pokemon.name)
    console.log(Pokemon.id)
    console.log(Pokemon.type)
}

PrintPokemon(charmander)