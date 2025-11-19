const fs = require("fs");

fs.stat("exemplo.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.isFile()); // Verifica se é um arquivo
  console.log(stats.isDirectory()); // Verifica se é um diretório
  console.log(stats.isSymbolicLink()); // Verifica se é um link simbólico
  console.log(stats.ctime); // Data de criação
  console.log(stats.size); // Tamanho em bytes
});
