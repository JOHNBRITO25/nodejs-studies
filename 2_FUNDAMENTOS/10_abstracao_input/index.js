const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o nome doa aluno?",
    },
    {
      name: "p1",
      message: "Qual a nota 1?",
    },
    {
      name: "p2",
      message: "Qual a nota 2?",
    },
  ])
  //as perguntas escritas no prompt originam as answers
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A Média do aluno ${answers.nome} é: ${media}`);
  })
  .catch((err) => console.log(err));
