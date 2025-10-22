import chalk from "chalk";

const nota = 8;

if (nota >= 7) {
  console.log(chalk.green(`Nota do aluno: ${nota}, aprovado!`));
} else {
  console.log(chalk.red(`Nota do aluno: ${nota}, resprovado!`));
}
