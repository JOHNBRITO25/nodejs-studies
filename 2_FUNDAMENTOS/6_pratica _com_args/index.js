// Externo
const minimist = require("minimist");

//interno

// const soma = require("./soma");
// const somaFunc = soma.soma;

// somaFunc(5, 3);

//ou dessa forma:

// const soma = require("./soma").soma;
// soma(5, 3);

const soma = require("./soma").soma;
const args = minimist(process.argv.slice(2)); //serve para pegar e interpretar argumentos passados pelo terminal

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);
soma(a, b);
