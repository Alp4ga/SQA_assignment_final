/**
 * @fileoverview class Rubric
 * @author Eliott Martin
 */

const Criterion = require('./Criterion.js');

/**
 * Manage rubric for each topic
 * @class Rubric
 */
class Rubric {
  /**
   * @constructor
   * @param {String} name Rubric name
   */
  constructor(name) {
    if (typeof(name) === 'undefined' || name === null || name.length <= 0) {
      throw new Error("[Rubric] - Rubric must have a name")
    }

    this.name = name;
    this.criterions = [];
  }

  /**
   * Create a criterion and add it to the rubric
   * @param {String} name Criterion name
   */
  createCriterion(name) {
    if (typeof(name) === 'undefined' || name === null || name.length <= 0) {
      throw new Error("[Rubric] - Criterion must have a name")
    }

    if (this.criterions.findIndex((criterion) => {return criterion.name === name}) !== -1 ) {
      throw new Error(`[Rubric] - Criterion: ${name} already exsits`);
    }

    this.criterions.push(new Criterion(name));
  }
}

module.exports = Rubric;