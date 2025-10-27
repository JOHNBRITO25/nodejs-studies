const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name?",
    },
    {
      name: "age",
      message: "How old are you?",
    },
  ])

  .then((answers) => {
    if (!answers.name || !answers.age) {
      throw new Error("Both name and age are required!");
    }
    console.log(
      chalk.bgYellow.black(
        `Hello ${answers.name}, you are ${answers.age} years old!`
      )
    );
  })
  .catch((err) => console.log(err));
