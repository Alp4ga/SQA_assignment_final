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

test('[Controller] - createStudentGrade - Wrong argument', () => {
  const controller = new Controller();

  expect(() => controller.createStudentGrade(undefined, 'Rubric')).toThrow();
  expect(() => controller.createStudentGrade(null, 'Rubric')).toThrow();
  expect(() => controller.createStudentGrade('', 'Rubric')).toThrow();

  expect(() => controller.createStudentGrade('John Smith', undefined)).toThrow();
  expect(() => controller.createStudentGrade('John Smith', null)).toThrow();
  expect(() => controller.createStudentGrade('John Smith', '')).toThrow();

  expect(() => controller.createStudentGrade('John Smith', 'Rubric')).toThrow();
});

test('[Controller] - createStudentGrade - Valid argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");

  expect(() => controller.createStudentGrade('John Smith', 'Rubric')).not.toThrow();
});

test('[Controller] - addStudentGrade - Wrong argument', () => {
  const controller = new Controller();

  expect(() => controller.addStudentGrade(undefined, 'rubirc', 'criterion', 1)).toThrow();
  expect(() => controller.addStudentGrade(null, 'rubirc', 'criterion', 1)).toThrow();
  expect(() => controller.addStudentGrade('', 'rubirc', 'criterion', 1)).toThrow();

  expect(() => controller.addStudentGrade('John Smith', undefined, 'criterion', 1)).toThrow();
  expect(() => controller.addStudentGrade('John Smith', null, 'criterion', 1)).toThrow();
  expect(() => controller.addStudentGrade('John Smith', '', 'criterion', 1)).toThrow();

  expect(() => controller.addStudentGrade('BadName', 'rubirc', 'criterion', 1)).toThrow();
  expect(() => controller.addStudentGrade('John Smith', 'BadRubirc', 'criterion', 1)).toThrow();
});


test('[Controller] - addStudentGrade - Valid argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John Smith', 'Rubric');

  expect(() => controller.addStudentGrade('John Smith', 'Rubric', 'Criterion', 1)).not.toThrow();
});

test('[Controller] - getStudentGrade - Wrong argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John Smith', 'Rubric');

  expect(() => controller.getStudentGrade(undefined)).toThrow(Error);
  expect(() => controller.getStudentGrade(null)).toThrow(Error);
  expect(() => controller.getStudentGrade('')).toThrow(Error);
})

test('[Controller] - getStudentGrade - Valid argument', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createRubric('Other');
  controller.createCriterion('Rubric', "Criterion");
  controller.createCriterion('Other', "Criterion");
  controller.createStudentGrade('John Smith', 'Rubric');
  controller.createStudentGrade('John Smith', 'Other');
  controller.addStudentGrade('John Smith', 'Rubric', 'Criterion', 1)
  controller.addStudentGrade('John Smith', 'Other', 'Criterion', 1)

  expect(controller.getStudentGrade('Rubric')).not.toBeNull();
  expect(controller.getStudentGrade('Rubric').length).toBe(1);
  expect(controller.getStudentGrade('Rubric')[0].student).toBe('John Smith');
  expect(controller.getStudentGrade('Rubric')[0].grade.scores.length).toBe(1);
})

test('[Controller] - getMin', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John A', 'Rubric');
  controller.createStudentGrade('John B', 'Rubric');
  controller.addStudentGrade('John A', 'Rubric', 'Criterion', 1)
  controller.addStudentGrade('John B', 'Rubric', 'Criterion', 2)


  expect(controller.getMin('Rubric')).toBe(1);
  expect(controller.getMin('Rubric', 'Criterion')).toBe(1);
  expect(controller.getMin('Rubric', 'Unknow')).toBe(6);
})

test('[Controller] - getMax', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John A', 'Rubric');
  controller.createStudentGrade('John B', 'Rubric');
  controller.createStudentGrade('John C', 'Rubric');
  controller.addStudentGrade('John A', 'Rubric', 'Criterion', 1)
  controller.addStudentGrade('John B', 'Rubric', 'Criterion', 2)
  controller.addStudentGrade('John C', 'Rubric', 'Criterion', 1)


  expect(controller.getMax('Rubric')).toBe(2);
  expect(controller.getMax('Rubric', 'Criterion')).toBe(2);
  expect(controller.getMax('Rubric', 'Unknow')).toBe(0);
})

test('[Controller] - getAverage', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John A', 'Rubric');
  controller.createStudentGrade('John B', 'Rubric');
  controller.createStudentGrade('John C', 'Rubric');

  controller.addStudentGrade('John A', 'Rubric', 'Criterion', 1)
  controller.addStudentGrade('John B', 'Rubric', 'Criterion', 2)
  controller.addStudentGrade('John C', 'Rubric', 'Criterion', 3);


  expect(controller.getAverage('Rubric')).toBe(2);
  expect(controller.getAverage('Rubric', 'Criterion')).toBe(2);
  expect(controller.getAverage('Rubric', 'Unknow')).toBe(0);
})

test('[Controller] - getAverage', () => {
  const controller = new Controller();

  controller.createRubric('Rubric');
  controller.createCriterion('Rubric', "Criterion");
  controller.createStudentGrade('John A', 'Rubric');
  controller.createStudentGrade('John B', 'Rubric');
  controller.createStudentGrade('John C', 'Rubric');

  controller.addStudentGrade('John A', 'Rubric', 'Criterion', 1)
  controller.addStudentGrade('John B', 'Rubric', 'Criterion', 2)
  controller.addStudentGrade('John C', 'Rubric', 'Criterion', 3);


  expect(controller.getStandardDeviation('Rubric')).toBe(0.816496580927726);
  expect(controller.getStandardDeviation('Rubric', 'Criterion')).toBe(0.816496580927726);
  expect(controller.getStandardDeviation('Rubric', 'Unkown')).toBe(0);
})