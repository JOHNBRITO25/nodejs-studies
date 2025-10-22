const meuModulo = require("./meu_modulo");
const soma = meuModulo.soma; //ecapsulamento da função soma na variável soma

soma(2, 3);
soma(5, 10);

//outra forma de chamar a função soma
meuModulo.soma(4, 7);
