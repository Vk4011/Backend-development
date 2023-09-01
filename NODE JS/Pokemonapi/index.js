
console.log("\n\t CLI  Options \N");

const yargs = require("yargs");
const {argv} = yargs(process.argv)

const printFiveMoves = async (pokemonName)=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move})=>move.name);
    console.log(moves.slice(0,5));
};

printFiveMoves(argv.pokemon);
console.log("\n\t npm i yargs is used to convert options in key value pairs")