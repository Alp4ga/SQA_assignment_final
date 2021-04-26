const Controller = require('../src/Controller.js');

test('Controller not null', () => {
  expect(new Controller()).not.toBeNull();
})