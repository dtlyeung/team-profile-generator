// Use engineer
const Engineer = require('../lib/engineer');

// Create engineer object
test('create engineer object', () => {
    const engineer = new Engineer('Daniel', 1234, 'danieltlyeung@gmail.com');
    expect(engineer.github).toEqual(expect.any(String));
});

// Get github
test('Github account', () => {
    const engineer = new Engineer('Daniel', 1234, 'danieltlyeung@gmail.com', 'dtlyeung');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Get role
test('get engineer role', () => {
    const engineer = new Engineer('Daniel', 1234, 'danieltlyeung@gmail.com', 'dtlyeung');
    expect(engineer.getRole()).toEqual("Engineer");
});