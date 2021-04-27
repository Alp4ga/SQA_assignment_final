/**
 * @fileoverview Class controller
 * @author Eliott Martin
 */

const Rubric = require('./Rubric.js');
const Criterion = require('./Criterion.js');

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
}

module.exports = Controller;