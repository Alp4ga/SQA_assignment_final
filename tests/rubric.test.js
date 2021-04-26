const { expect } = require('@jest/globals');
const Rubric = require('../src/components/Rubric.js');

test('[Rubric] - Not null', () => {
  expect(new Rubric('Name')).not.toBeNull();
});

test('[Rubric] - Wrong argument constructor', () => {
  expect(() => new Rubric('')).toThrow(Error);
  expect(() => new Rubric(null)).toThrow(Error);
  expect(() => new Rubric(undefined)).toThrow(Error);
});

test('[Rubric] - createCriterion - Valid argument', () => {
  const rubric = new Rubric("RubricName");

  expect(() => rubric.createCriterion('CriterionName')).not.toThrow();
});

test('[Rubric] - createCriterion - Wrong argument', () => {
  const rubric = new Rubric("RubricName");

  expect(() => rubric.createCriterion('')).toThrow(Error);
  expect(() => rubric.createCriterion(undefined)).toThrow(Error);
  expect(() => rubric.createCriterion(null)).toThrow(Error);

  rubric.createCriterion('already_exisits');
  expect(() => rubric.createCriterion('already_exisits')).toThrow(Error);
});
