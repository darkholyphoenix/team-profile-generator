const employees = require('../index.js')

function employeeCard(teamArray) {
      ${teamArray.filter(({role}) => role === 'Engineer').map(({name, id, email, gitHub}) => {
        return `
      <div class="card mx-auto-mb-3" style="width: 18rem;">
        <h5 class = "card-header">${name}</br>${role}</h5>
        <ul class = "list-group list-groupflush">
          <li class = "list-group-item">ID: ${id}</li>
          <li class = "list-group-item">
            <a href =mailto;${email}">Email: ${email}</a>
          </li>
          <li class = "list-group-item">
            <a href='https://github.com/${gitHub}">GitHub</a>
          </li>
`;
  })
  .join('')
}

${internArray
  .filter(({role}) => role === 'Intern')
  .map(({name, id, email, role, roleSection}) => {
    return `
    <div class="card mx-auto-mb-3" style="width: 18rem;">
        <h5 class = "card-header">${name}</br>${role}</h5>
        <ul class = "list-group list-groupflush">
          <li class = "list-group-item">ID: ${id}</li>
          <li class = "list-group-item">
            <a href =mailto;${email}">Email: ${email}</a>
          </li>
          <li class = "list-group-item">
            ${school}
          </li>
    `;
  })
  .join('')
}
`}
    // destructure page data by section
function templateData() {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class = "col-4 my-3">
        <div class = "card">
        <div class ="card-header bg-primary">
          <h3 class = "manager'>Manager</h3>
          <p class ="name"> ${manager.name}</p>
          </div>
          </div>
          </div>
          <div class ="card-bidy">
          <p class ="idNumber"> ${manager.id}</p>
          <p class = "email"> <a href="mailto:${manager.email}"</a></p>
          <p class= "officeNumber"> ${manager.number}</p>

          ${employeeCard}
          
      </main>
    </body>
    </html>
    `;
  };
    
  module.exports = templateData