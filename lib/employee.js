// Employee Class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Get name from input
    getName () {
        return this.name;
    }

    // Get ID from input
    getId () {
        return this.id;
    }

    // Get email from input
    getEmail () {
        return this.email;
    }

    // Get employee role
    getRole () {
        return 'Employee';
    }
};

// Exporting
module.exports = Employee;