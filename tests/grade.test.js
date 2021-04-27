const Grade = require('../src/components/Grade.js');
const Rubric = require('../src/components/Rubric.js');
const Criterion = require('../src/components/Criterion.js');

test('[Grade] - Not null', () => {
  const rubric = new Rubric('Topic');
  expect(new Grade(rubric)).not.toBeNull();
});

test('[Grade] - constructor - Wrong argument', () => {
  expect(() => new Grade(undefined)).toThrow();
  expect(() => new Grade(null)).toThrow();
  expect(() => new Grade('')).toThrow();
  expect(() => new Grade(1)).toThrow();
});

test('[Grade] - addScore - Valid argument', () => {
  const rubric = new Rubric('Rubric');
  const criterion = new Criterion('Criterion');
  rubric.createCriterion(criterion);
  const grade = new Grade(rubric);

  expect(() => grade.addScore('Criterion', 1)).not.toThrow(Error);
});

test('[Grade] - addScore - Wrong argument', () => {
  const rubric = new Rubric('Rubric');
  const criterion = new Criterion('Criterion');
  rubric.createCriterion(criterion);
  const grade = new Grade(rubric);

  expect(() => grade.addScore('WrongCriterion', 1)).toThrow(Error);
  expect(() => grade.addScore('WrongCriterion', 0)).toThrow(Error);
  expect(() => grade.addScore('Criterion', 0)).toThrow(Error);
  expect(() => grade.addScore('Criterion', 6)).toThrow(Error);
});

