const x = 28;
const y = "John Wesley";
const z = [1, 2];
console.log(x, y, z);

//contagem

console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

//variável entre strings

console.log("O nome é %s e a idade é %d anos", y, x);

//limpar o console

setTimeout(() => {
  console.clear();
}, 2000);
