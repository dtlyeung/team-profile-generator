// Use manager
const Manager = require('../lib/manager');

// Create manager object
test('create manager object', () => {
    const manager = new Engineer('Daniel', 1234, 'danieltlyeung@gmail.com', 3);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Get role
test('get manager role', () => {
    const manager = new Manager('Daniel', 1234, 'danieltlyeung@gmail.com', 4);
    expect(manager.getRole()).toEqual("Manager");
});