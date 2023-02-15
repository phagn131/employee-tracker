const connection = require('./db/connection.js');
const inquirer = require('inquirer');
const { table } = require('table');

const addEmployee = () => {

  console.log("Adding employee");
  return connection.query(
    // read from employees
    `SELECT * FROM employees`,
    (err, result) => {
      if(err) console.error(err);
      addEmployeeQuestions(result);
    }
  )
}

const addEmployeeQuestions = (employee) => {
  employee = employee.map( employee => ({
    name: employee.first_name,
    value: employee
  }));
  console.log(employees);

  return inquirer.prompt([
    {
      type: "list",
      choices: employees,
      message: "Which employee?",
      name:"employee"
    }
  ])
  .then( ({employee}) => {
    console.log(JSON.stringify(employee) + "\n\n\n\n\n");
    mainmenu();
  });
  // return mainmenu();
}

const viewEmployees = () => {
  return connection.query(
    // read from employees
    `SELECT * FROM employees`,
    (err, result) => {
      if(err) console.error(err);
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      formattedResult.unshift(["id","first_name", "last_name", "role"]);
      // console.log(formattedResult);
      console.log(table(formattedResult));
      mainmenu();
    }
  )
}

const addEmployees = () => {
  // assume you use inquirer to get the following
  //  first_name, last_name, airline_name

  return inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name? ",
      name: "first_name"
    },
    {
      type: "input",
      message: "What is the employees last name? ",
      name: "last_name"
    },
    {
      type: "input",
      message: "What is the employees airline? ",
      name: "role"
    },
  ])
  // .then( ({first_name, last_name, airline_name}) => {
  .then( param => {
    
    connection.query(
    `INSERT INTO employees SET ?`,
    [
      // {
      //   first_name: "Bob", // first_name = "Bob",
      //   last_name: "Taco", // last_name = "Taco",
      //   airline_name: "Always Late Air" // airline_name = "Always Late Air"
      // }
      param
    ],
    /*
    INSERT INTO pilots SET first_name = "Bob", last_name = "Taco", airline_name = "Always Late Air"
    */
    function (err, result) {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      mainmenu();
    });
  });
  
}

const program_exit = () =>{
  // use this when you want to exit the script
  connection.end();
}

const mainmenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["add role", "add employee", "view employee", "exit"],
      name: "option"
    }
  ])
  .then(({option}) => {
    switch(option){
      case "exit":
        return program_exit();
      case "add role":
        addRole();
        break;
      case "add employee":
        addEmployee();
        break;
      case "view employee":
        viewEmployee();
        break;
    }
  });
};

mainmenu();

