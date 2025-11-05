const http = require("http");
const fs = require("fs");

const port = 3000;
//requisição e resposta
const server = http.createServer((req, res) => {
  //erro e dados
  fs.readFile("msg.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
