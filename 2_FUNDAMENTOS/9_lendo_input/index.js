const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual o seu nome? ", (name) => {
  console.log(`Olá, ${name}!`);

  readline.question("Digite o primeiro número: ", (num1) => {
    readline.question("Digite o segundo número: ", (num2) => {
      const soma = parseFloat(num1) + parseFloat(num2);
      console.log(`A soma de ${num1} mais ${num2} é ${soma}.`);
      readline.close();
    });
  });
});
