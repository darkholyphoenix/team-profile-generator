const Intern = require('../lib/Intern.js');

test("Does it register the users school", () =>{
    const testSchool= "University of Texas at Austin";
    const internSchool = new Intern("Dave", "1", "adison@", testSchool);
    expect(internSchool.getSchool()).toBe(testSchool);
})