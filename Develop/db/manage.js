const connection = require('./db/connection.js');
const inquirer = require('inquirer');
const { table } = require('table');

const addFlight = () => {
//   flight_number, 
// start_time,
// end_time,
// origin,
// destination,
// `status`,
// pilot_id
  console.log("Adding flight");
  return connection.query(
    // read from pilots
    `SELECT * FROM pilots`,
    (err, result) => {
      if(err) console.error(err);
      addFlightQuestions(result);
    }
  )
}

const addFlightQuestions = (pilots) => {
  pilots = pilots.map( pilot => ({
    name: pilot.first_name,
    value: pilot
  }));
  console.log(pilots);

  return inquirer.prompt([
    {
      type: "list",
      choices: pilots,
      message: "Which pilot?",
      name:"pilot"
    }
  ])
  .then( ({pilot}) => {
    console.log(JSON.stringify(pilot) + "\n\n\n\n\n");
    mainmenu();
  });
  // return mainmenu();
}

const viewPilots = () => {
  return connection.query(
    // read from pilots
    `SELECT * FROM pilots`,
    (err, result) => {
      if(err) console.error(err);
      let formattedResult = result.map( obj => Object.values(obj));
      // add column names
      formattedResult.unshift(["id","first_name", "last_name", "airline_name"]);
      // console.log(formattedResult);
      console.log(table(formattedResult));
      mainmenu();
    }
  )
}

const addPilot = () => {
  // assume you use inquirer to get the following
  //  first_name, last_name, airline_name

  return inquirer.prompt([
    {
      type: "input",
      message: "What is the pilot's first name? ",
      name: "first_name"
    },
    {
      type: "input",
      message: "What is the pilot's last name? ",
      name: "last_name"
    },
    {
      type: "input",
      message: "What is the pilot's airline? ",
      name: "airline_name"
    },
  ])
  // .then( ({first_name, last_name, airline_name}) => {
  .then( param => {
    
    connection.query(
    `INSERT INTO pilots SET ?`,
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
      choices: ["add flight", "add pilot", "view pilots", "exit"],
      name: "option"
    }
  ])
  .then(({option}) => {
    switch(option){
      case "exit":
        return program_exit();
      case "add flight":
        addFlight();
        break;
      case "add pilot":
        addPilot();
        break;
      case "view pilots":
        viewPilots();
        break;
    }
  });
};

mainmenu();
