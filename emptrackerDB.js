const inquirer = require("inquirer");
const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "top_songsDB",
});
connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  console.log(">=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<\n>=<=> WELCOME TO EMPLOEE TRACKER <=>=<\n>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<");
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "ADD departments, roles, and employees",
          "VIEW departments, roles, and employees",
          "Update employee roles",
          "EXIT",
        ],
      },
    ])
    .then((answers) => {
      switch (answers) {
        case "ADD departments, roles, and employees":
          add();
          break;
        case "VIEW departments, roles, and employees":
          view();
          break;
        case "Update employee roles":
          update();
          break;
        default:
            console.log("^_^ BYE BYE ^_^");
            connection.end();
      }
    });
}

//===CHECK ACT 12-13 FOR HELP===
//create add()
    //add department
        //select from existing department list
    //add role
        //select title from existing lisy
        //enter salary number with decimal
        //?include dapartment id?
    //add emp
        //enter first name
        //enter last name
        //?include dapartment id and manager id?

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
