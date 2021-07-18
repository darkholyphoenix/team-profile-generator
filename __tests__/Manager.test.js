const Manager = require('../lib/Manager.js');

test("Does it register the users school", () =>{
    
    
    const testNumber= "555-555-5555";
    const managerNumber = new Manager("Dave", "1", "adison@", testNumber);
    expect(managerNumber.getNumber()).toBe(testNumber);
})