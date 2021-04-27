const Controller = require('../src/components/Controller.js');

test('[Controller] - Not null', () => {
  expect(new Controller()).not.toBeNull();
})

test('[Controller] - createRubric - Valid argument', () => {
  const controller = new Controller();

  expect(() => controller.createRubric('Rubric')).not.toThrow();
})

test('[Controller] - createRubric - Wrong argument', () => {
  const controller = new Controller();

  expect(() => controller.createRubric(undefined)).toThrow();
  expect(() => controller.createRubric(null)).toThrow();
  expect(() => controller.createRubric('')).toThrow();

  controller.createRubric('Rubric');
  expect(() => controller.createRubric('Rubric')).toThrow();
})

test('[Controller] - createCriterion - Valid argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  expect(() => controller.createCriterion('Rubric', 'Criterion')).not.toThrow();
})

test('[Controller] - createCriterion - Wrong argument', () => {
  const controller = new Controller();

  expect(() => controller.createCriterion(undefined, 'Criterion')).toThrow();
  expect(() => controller.createCriterion(null, 'Criterion')).toThrow();
  expect(() => controller.createCriterion('', 'Criterion')).toThrow();

  expect(() => controller.createCriterion('NotExists', 'Criterion')).toThrow();
})

test('[Controller] - getAllRubrics', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  const rubrics = controller.getAllRubrics();
  expect(rubrics.length).toBe(1);
  expect(rubrics[0].name).toBe('Rubric');
})

test('[Controller] - getRubric - Wrong argument', () => {
  const controller = new Controller();

  expect(() => controller.getRubric(undefined)).toThrow();
  expect(() => controller.getRubric(null)).toThrow();
  expect(() => controller.getRubric('')).toThrow();

  expect(() => controller.getRubric('NotExists')).toThrow();
})

test('[Controller] - getRubric - Valid argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  const rubric = controller.getRubric('Rubric');
  expect(rubric.name).toBe('Rubric');
})