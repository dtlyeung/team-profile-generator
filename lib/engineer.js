// Import employee
const Employee = require("./employee");

// Engineer + employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call employee
        super (name, id, email);
        this.github = github;
    }

    // Get github
    getGithub () {
        return this.github;
    }

    // Change employee to engineer
    getRole () {
        return "Engineer";
    }
}

// Export
module.exports = Engineer;