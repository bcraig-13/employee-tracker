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
  console.log(">=<=> WELCOME TO EMPLOEE TRACKER <=>=<");
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

//create add()
    //add department
        //enter department name
    //add role
        //enter title
        //enter salary
        //?include dapartment id?
    //add emp
        //enter first name
        //enter last name
        //?include dapartment id and manager id?

//create view()
    //view department
    //view roles
    //view employees

//create update()
    