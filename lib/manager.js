// Import employee
const Employee = require('./employee');

// Manager constructor + Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call employee
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // Change employee role to manager
    getRole () {
        return "Manager";
    }
}

// Export
module.exports = Manager;