/* eslint-env jest */
const {
  comparatorAscending,
  comparatorDescending
} = require('./utils')

const positiveCasesAscending = [
  [5, 18, true],
  ['John', 'Kevin', true],
  [false, true, true],
  [18, 5, false],
  ['Kevin', 'John', false],
  [true, false, false],
  [5, 5, false],
  ['John', 'John', false],
  [true, true, false],
  [false, false, false]
]

const positiveCasesDescending = [
  [5, 18, false],
  ['John', 'Kevin', false],
  [false, true, false],
  [18, 5, true],
  ['Kevin', 'John', true],
  [true, false, true],
  [5, 5, false],
  ['John', 'John', false],
  [true, true, false],
  [false, false, false]
]

describe('Ascending order of arguments (a < b)', () => {
  test.each(positiveCasesAscending)(
    'comparing %p with %p should result in %p',
    (argumentA, argumentB, expectedResult) => {
      expect(comparatorAscending(argumentA, argumentB)).toEqual(expectedResult)
    }
  )
})

describe('Descending order of arguments (a > b)', () => {
  test.each(positiveCasesDescending)(
    'comparing %p with %p should result in %p',
    (argumentA, argumentB, expectedResult) => {
      expect(comparatorDescending(argumentA, argumentB)).toEqual(expectedResult)
    }
  )
})
