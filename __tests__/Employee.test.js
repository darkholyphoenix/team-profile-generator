const Employee = require('../lib/Employee.js');

test("Does get name get getName()", () =>{
    const testValue= "Tom";
    const employeeName = new Employee(testValue, "1", "adison@");
    expect(employeeName.getName()).toBe(testValue);
})

test("Does it register an id", () => {
    const testID = '1';
    const employeeID = new Employee("Dave", testID, "adison@", "555-555-5555");
    expect(employeeID.getId()).toBe(testID);
})

test("Does it register an email", () =>{
    const testEmail= "adison@gmail.com";
    const employeeEmail = new Employee("Dave", "1", testEmail, "555-555-5555");
    expect(employeeEmail.getEmail()).toBe(testEmail);
})
