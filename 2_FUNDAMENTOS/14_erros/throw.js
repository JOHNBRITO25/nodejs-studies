const x = "10";
if (!Number.isInteger(x)) {
  throw new Error("O valor deve ser um número inteiro");
}
console.log("Continuando o código...");
