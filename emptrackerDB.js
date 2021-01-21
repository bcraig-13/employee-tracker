const inquirer = require("inquirer");
const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "empTrackerDB",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log(
    ">=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<\n>=<=> WELCOME TO EMPLOEE TRACKER <=>=<\n>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<"
  );
  start();
});

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "ADD employee",
          "VIEW departments, roles, and employees",
          "UPDATE employee roles",
          "EXIT"
        ],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "ADD employee":
          return add();

        case "VIEW departments, roles, and employees":
          return view();

        case "UPDATE employee roles":
          return update();

        default:
          console.log("^_^ BYE BYE ^_^");
          return connection.end();
      }
    });
}

function add() {
  inquirer.prompt([
    {
      type: "input",
      name: "empFirstName",
      message: "What is your employee's first name?"
    },
    {
      type: "input",
      name: "empLastName",
      message: "What is your employee's last name?",
    },
    {
      type: "list",
      name: "choice",
      message: "What role does this employee have?",
      choices: [
        "Manager",
        "Project Lead",
        "Front End Engineer",
        "Back End Engineer",
        "Administrative Lead",
        "Administrative Assistant"
      ],
    },
    //===Don't need to enter department. The role will already have that===
  ]).then((answer) => {
    console.log(answer);
    console.log(">=<=> EMPLOYEE ADDED <=>=<");
    start(); 
  })
}
//===CHECK ACT 12-13 FOR HELP===

//create view()
//view department
//select department from list
//display all employees in each department
//return to main menu
//view roles
//select roles from list
//display all employees with selected role
//return to main menu
//view employees
//view all employees
//return to main menu
//create update()
