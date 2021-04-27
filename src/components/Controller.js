/**
 * @fileoverview Class controller
 * @author Eliott Martin
 */

const Rubric = require('./Rubric.js');
const Grade = require('./Grade.js');

/**
 * Handle the package
 * @class Controller
 */
class Controller {
  /**
   * @constructor
   */
  constructor() {
    this.rubrics = [];
    this.grades = [];
  }

  /**
   * Create a new empty rubric
   * @param {String} rubricName New rubric name
   */
  createRubric(rubricName) {
    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - createRubric - RubricName must be defined");
    }

    const index = this.rubrics.findIndex((rubric) => {return rubric.name === rubricName});
    if (index !== -1) {
      throw new Error(`[Controller] - createRubric - Rubric ${rubricName} already exists`);
    }

    this.rubrics.push(new Rubric(rubricName));
  }

  /**
   * Create a new criterion for a specific rubric
   * @param {String} rubricName Rubric name to add the new criterion
   * @param {String} criterionName New criterion name
   */
  createCriterion(rubricName, criterionName) {
    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - createCriterion - RubricName must be defined");
    }

    const indexRubric = this.rubrics.findIndex((rubric) => {return rubric.name === rubricName});
    if (indexRubric === -1) {
      throw new Error(`[Controller] - createRubric - Rubric ${rubricName} does not exist`);
    }
    this.rubrics[indexRubric].createCriterion(criterionName);
  }

  /**
   * Get all the rubric in the Controller
   * @returns Array with all the Rubrics
   */
  getAllRubrics() {
    return this.rubrics;
  }

  /**
   * Get one rubric 
   * @param {String} rubricName Rubric name to get
   * @returns Specific rubric name
   */
  getRubric(rubricName) {
    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - getRubric - RubricName must be defined");
    }

    const index = this.rubrics.findIndex((rubric) => {return rubric.name === rubricName});
    if (index === -1) {
      throw new Error(`[Controller] - getRubric - Rubric ${rubricName} not found`);
    }

    return this.rubrics[index];
  }

  /**
   * Create a new student grade
   * @param {String} studentName New student name
   * @param {String} rubricName Rubric name associate to the grade
   */
  createStudentGrade(studentName, rubricName) {
    if (typeof(studentName) === 'undefined' || studentName === null || studentName.length <= 0) {
      throw new Error("[Controller] - createStudentGrade - studentName must be defined");
    }

    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - createStudentGrade - RubricName must be defined");
    }

    const index = this.rubrics.findIndex((rubric) => {return rubric.name === rubricName});
    if (index === -1) {
      throw new Error(`[Controller] - createStudentGrade - Rubric ${rubricName} not found`);
    }

    this.grades.push({
      student: studentName,
      grade: new Grade(this.rubrics[index])
    });
  }

  /**
   * Add student grade for a rubric
   * @param {String} studentName Student to grade
   * @param {String} rubricName Rubric used
   * @param {String} criterionName Criterion to grade
   * @param {Integer} score Score for specific grade
   */
  addStudentGrade(studentName, rubricName, criterionName, score) {
    if (typeof(studentName) === 'undefined' || studentName === null || studentName.length <= 0) {
      throw new Error("[Controller] - createStudentGrade - studentName must be defined");
    }

    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - createStudentGrade - RubricName must be defined");
    }

    const index = this.grades.findIndex((grade) => {return grade.student === studentName && grade.grade.rubric.name === rubricName;});
    if (index === -1) {
      throw new Error(`[Controller] - addStudentGrade - Student ${studentName} or Rubric ${rubricName} not found`);
    }

    this.grades[index].grade.addScore(criterionName, score);
  }

  /**
   * Get all student grade from specific rubric name
   * @param {String} rubricName Rubric name to find in student grade
   * @returns All grade with a specific rubric name
   */
  getStudentGrade(rubricName) {
    if (typeof(rubricName) === 'undefined' || rubricName === null || rubricName.length <= 0) {
      throw new Error("[Controller] - createStudentGrade - RubricName must be defined");
    }

    return this.grades.map((grade) => {
      if (grade.grade.rubric.name === rubricName) {
        return grade;
      }
    })
  }
}

module.exports = Controller;