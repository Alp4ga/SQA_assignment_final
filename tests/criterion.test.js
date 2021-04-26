const Criterion = require('../src/components/Criterion.js');

test('[Criterion] - Not null', () => {
  expect(new Criterion('Name')).not.toBeNull();
});

test('[Criterion] - Wrong argument constructor', () => {
  expect(() => new Criterion('')).toThrow(Error);
  expect(() => new Criterion(null)).toThrow(Error);
  expect(() => new Criterion(undefined)).toThrow(Error);
});

