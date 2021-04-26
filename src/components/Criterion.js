/**
 * @fileoverview Class criterion
 * @author Eliott Martin
 */

/**
 * Manage the criterion for a rubric
 * @class Criterion
 */
class Criterion {
  /**
   * @constructor
   * @param {String} name Criterion name
   */
  constructor(name) {
    if (typeof(name) === 'undefined' || name === null || name.length <= 0) {
      throw new Error("[Criterion] - Criterion must have a name");
    }

    this.name = name;
  }
}

module.exports = Criterion;