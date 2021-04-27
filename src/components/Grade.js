/**
 * @fileoverview Class Grade
 * @author Eliott Martin
 */

const Rubric = require("./Rubric");

/**
 * Handle grade for the student
 * @class Grade
 */
class Grade {
  /**
   * @constructor
   * @param {Object} rubric Rubric use for the grade
   */
  constructor(rubric) {
    if (typeof(rubric) === 'undefined' || rubric === null || !(rubric instanceof Rubric)) {
      throw new Error("[Grade] - Grade must have a rubric");
    }

    this.rubric = rubric;
    this.scores = rubric.criterions.map((criterion) => {
      return {name: criterion.name, score: 0};
    });
  }

  /**
   * Add score to the current grade
   * @param {String} criterionName Criterion name use for the score
   * @param {int} score Score to update for the criterion (Between 1 to 5)
   */
  addScore(criterionName, score) {
    const index = this.scores.findIndex((score) => {
      //console.log(criterionName, '|' ,score)
      return criterionName === score.name
    });
    if (index === -1) {
      throw new Error("[Grade] - Criterion doesn't exsit");
    }
    if (score < 1 || score > 5) {
      throw new Error("[Grade] - Score must be between 1 and 5");
    }
    this.scores[index].score = score;
  }
}

module.exports = Grade;