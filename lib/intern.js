// Import employee
const Employee = require ('./employee');

// Intern + employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        // call employee
        super (name, id, email);
        this.school = school;
    }

    // Get school from input
    getSchool () {
        return this.school;
    }

    // Change role to intern
    getRole () {
        return "intern";
    }
}

// Exporting
module.exports = Intern;