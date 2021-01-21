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
    ">=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<\n>=<=> WELCOME TO EMPLOYEE TRACKER <=>=<\n>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<=>=<"
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
          "EXIT",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "ADD employee":
          add();
          break;

        case "VIEW departments, roles, and employees":
          view();
          break;
        case "UPDATE employee roles":
          update();
          break;

        default:
          console.log("^_^ BYE BYE ^_^");
          return connection.end();
      }
    });
}

function add() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "empFirstName",
        message: "What is your employee's first name?",
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
          "Administrative Assistant",
        ],
      },
      //===Don't need to enter department. The role will already have that===
    ])
    .then((answer) => {
      // ===Need to add answer to database
      console.log(">=<=> EMPLOYEE ADDED <=>=<");
      start();
    });
}
//===CHECK ACT 12-13 FOR HELP===
function view() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "views",
        message: "What would you like to view?",
        choices: [
          "View departments",
          "View roles",
          "View all employees",
          "BACK",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.views) {
        case "View departments":
          viewDepartment();
          break;

        case "View roles":
          viewRoles();
          break;

        case "View all employees":
          viewAllEmps();
          break;

        default:
          start();
          break;
      }
    });
}

function viewDepartment() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "views",
        message: "Which department would you like to view?",
        choices: [
          "Manager",
          //Contains manager
          "Engineering",
          //Contains project lead, front and back end
          "Administrative",
          //COntains admin lead and assist
          "BACK",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.views) {
        case "Manager":
          console.table("SELECT * FROM department WHERE name=Manager"); //===Not sure if this will work
          viewDepartment();
        case "Engineering":
          console.table("SELECT * FROM department WHERE name=Engineering");
          viewDepartment();
        case "Administrative":
          console.table("SELECT * FROM department WHERE name=Administrative");
          viewDepartment();
        default:
          start();
          break;
      }
    });
}

function viewRoles() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "views",
        message: "Which role would you like to view?",
        choices: [
          "Manager",
          "Project Lead",
          "Front End Engineer",
          "Back End Engineer",
          "Administrative Lead",
          "Administrative Assistant",
          "BACK",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.views) {
        case "Manager":
          //Display all managers--copy from viewDepartment()
          console.table("SELECT * FROM role WHERE title=Manager"); //<==This should display the whole table?

        case "Project Lead":
        //Display all project leads
        console.table("SELECT * FROM role WHERE title=Project Lead")

        case "Front End Engineer":
        //Display all front end eng
        console.table("SELECT * FROM role WHERE title=Front End Engineer")

        case "Back End Engineer":
        //Display all back end eng
        console.table("SELECT * FROM role WHERE title=Back End Engineer")

        case "Administrative Lead":
        //Display all admin leads
        console.table("SELECT * FROM role WHERE title=Administrative Lead")

        case "Administrative Assistant":
        //Display all admin assist
        console.table("SELECT * FROM role WHERE title=Administrative Assistant")

        default:
          start();
          break;
      }
    });
}

function viewAllEmps() {
  //Display all emps from db
  //Have BACK option
}
//===Don't forget to add BACK which returns to previous menu
//display all employees in each department

//select roles from list
//display all employees with selected role

//return to main menu
//create update()
