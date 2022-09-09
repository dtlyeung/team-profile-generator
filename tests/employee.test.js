// Use employee
const Employee = require('../lib/employee');

// Create employee object
test('create employee object', () => {
    const employee = new Employee('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Retrieve name
test('Get employee name', () => {
    const employee = new Employee('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//Retrive ID
test('Get employee ID', () => {
    const employee = new Employee('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//Retrive Email
test('Get employee email', () => {
    const employee = new Employee('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Get Role
test('Get employee role', () => {
    const employee = new Employee('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});