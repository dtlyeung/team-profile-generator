// Use intern
const Intern = require('../lib/intern');

// Create intern object
test('create intern object', () => {
    const intern = new Intern('Daniel', 1234, 'danieltlyeung@gmail.com', 'UofT');
    expect(intern.school).toEqual(expect.any(String));
});

// Get school
test('School', () => {
    const intern = new Intern('Daniel', 1234, 'danieltlyeung@gmail.com', 'UofT');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Get role
test('get intern role', () => {
    const intern = new Intern('Daniel', 1234, 'danieltlyeung@gmail.com', 'UofT');
    expect(intern.getRole()).toEqual("intern");
});