# SQA_assignment_final

## How to use the package

```
npm i -s sqa-assignment-final
```

In your file:

```
const controller = require('sqa-assignment-final');
```

You can use the fonction like this:

```
controller.createRubric('RubricName');
```

## Available functions

|function|Arguments|Description|
|:------:|---------|-----------|
|createRubric|rubricName|Create a new rubirc|
|createCriterion|rubricName, criterionName| Create a new criterion for a rubirc|
|getAllRubrics||Get all rubric in the controller|
|getRubric|rubricName|Get a specific rubric|
|createStudentGrade|studentName, rubricName|Create a new student grade with a rubric|
|addStudentGrade|stduentName, rubricName, criterionName, score|Create score for student grade|
|getStudentGrade|rubricName|Get student grade for a rubric|
|getAverage|rubricName, criterionName (optional)|Get average for a rubric|
|getStandardDeviation|rubricName, criterionName (optional)|Get standard deviation for a rubric|
|getMin|rubricName, criterionName (optional)|Get minimum score for a rubric|
|getMax|rubricName, criterionName (optional)|Get maximum score for a rubric|



## How use test & coverage

```
npm test
```