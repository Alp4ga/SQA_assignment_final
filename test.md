# Test

## Table of contents
1. Test Driven
2. Test coverage

## 1. Test Driven

Commit: [Link](https://github.com/Alp4ga/SQA_assignment_final/pull/5/files)

In this commit there is two files, _src/components/Criterion.js_ & _tests/criterion.test.js_.

In the second file (test) we create two tests to ensure the stability of the class Criterion. With test driven you must create the tests and expect a specific result for the tested function before create the function. In our case we have only one function (The constructor). This fonction takes an argument, so we expect that argument must not be undefined, null or empty.

## 2. Test Coverage

The test coverage is working with jtest. Just run the following command:
```
npm test
```

The output:

![alt text][logo]

[logo]: ./assets/coverage.png "Logo Title Text 2"

