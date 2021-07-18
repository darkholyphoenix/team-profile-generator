const Engineer = require('../lib/Engineer.js');

test("Does it register the users GitHub", () =>{
    const testUsername= "darkholyphoenix";
    const engineerUsername = new Engineer("Dave", "1", "adison@", testUsername);
    expect(engineerUsername.getGitHub()).toBe(testUsername);
})