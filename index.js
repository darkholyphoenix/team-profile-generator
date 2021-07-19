
const {templateData, employeeCards} = require('./src/page-template.js')
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

let teamArray = [];



function userQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter your name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter the name of your employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter your ID Number. (Required)",
        validate: (identificationInput) => {
          if (identificationInput) {
            return true;
          } else {
            console.log("You need to enter a ID Number!");
            return false;
          }
        },
      },

      {
        type: "link",
        name: "managerEmail",
        message: "Please enter your email address. (Required)",
        validate: (emailLink) => {
          if (emailLink) {
            return true;
          } else {
            console.log("You need to enter a email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerPhone",
        message: "Please enter your phone number. (Required)",
        validate: (phoneInput) => {
          if (phoneInput) {
            return true;
          } else {
            console.log("You need to enter a phone number!");
            return false;
          }
        },
      },
    ]).then (answers => {
      console.log(answers)
      teamArray.push(answers);
      buildTeam(answers);
    });

  }   


function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeSelection",
        message: "Do you want to add an:",
        choices: ["Engineer", "Intern", "No One"],
      },
    ])
    .then((employeeChoice) => {
      if (employeeChoice.employeeSelection === "Engineer") {
        promptEngineer();
      } else if (employeeChoice.employeeSelection === "Intern") {
        promptIntern();
      } 
      else {
        buildPage();
      }
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer? (Required)",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("You need to enter the engineer name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID Number of the engineer? (Required)",
        validate: (engineerIdentificationInput) => {
          if (engineerIdentificationInput) {
            return true;
          } else {
            console.log("You need to enter the engineers ID Number!");
            return false;
          }
        },
      },
      {
        type: "link",
        name: "engineerEmail",
        message: "What is the email of the engineer? (Required)",
        validate: (engineerEmailLink) => {
          if (engineerEmailLink) {
            return true;
          } else {
            console.log("You need to enter a email address!");
            return false;
          }
        },
      },
      {
        type: "link",
        name: "engineerGitHub",
        message: "What is engineers GitHub username? (Required)",
        validate: (engineerUsernameLink) => {
          if (engineerUsernameLink) {
            return true;
          } else {
            console.log("You need to enter a username!");
            return false;
         }
      }
    }
  ]).then(engineerData => {
    teamArray.push(engineerData);
    console.log(teamArray);
    buildTeam(engineerData)
  })
}
      
function employeeConfirm() {    
   inquirer.prompt ([
     {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another team member?",
        default: false,
     }
    
   ]).then(confirmation => {
  
    if (confirmation.confirmAddEmployee) {
      return createTeam()
    } else {
      return buildPage();
    }
  
   })
  }


function promptIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the name of the intern? (Required)",
      validate: (internNameInput) => {
        if (internNameInput) {
          return true;
        } else {
          console.log("You need to enter the intern name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internId",
      message: "What is the ID Number of the intern? (Required)",
      validate: (internIdentificationInput) => {
        if (internIdentificationInput) {
          return true;
        } else {
          console.log("You need to enter the interns ID Number!");
          return false;
        }
      },
    },
    {
      type: "link",
      name: "internEmail",
      message: "What is the email of the intern? (Required)",
      validate: (internEmailLink) => {
        if (internEmailLink) {
          return true;
        } else {
          console.log("You need to enter a email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the interns school? (Required)",
      validate: (internSchoolInput) => {
        if (internSchoolInput) {
          return true;
        } else {
          console.log("You need to enter the schools name!");
          return false;
        }
      },
    },

  ])
  .then(internData => {
    teamArray.push(internData);
    console.log(teamArray);
    buildTeam(internData)
  })
}

function buildTeam(employeeData) {
  // let { name, id, email, github, school } = employeeData;
  if (employeeData.managerName) {
    manager = new Manager(employeeData.managerName, employeeData.managerId, employeeData.managerEmail, employeeData.managerPhone);
    teamArray.push(manager)
  } else if (employeeData.engineerName) {
    engineer = new Engineer(employeeData.engineerName, employeeData.engineerId, employeeData.engineerEmail, employeeData.engineergitHub);
    teamArray.push(engineer)
  } else if (employeeData.internName) {
    intern = new Intern(employeeData.internName, employeeData.internId, employeeData.internEmail, employeeData.internschool);
    teamArray.push(intern)
  }
  console.log('teamArray', teamArray);
  employeeConfirm();
}
  


function writeToFile(fileName, data) {
  console.log(fileName)
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };



// // TODO: Create a function to initialize app
function buildPage() {
    console.log(teamArray)
    employeeCards(teamArray)
    writeToFile("index.html", templateData(teamArray));

}


// // Function call to initialize app


userQuestions()

  
  
