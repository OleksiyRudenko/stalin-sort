/* eslint-env jest */
const stalinSort = require('./index')
const { comparatorDescending } = require('./utils')

const positiveCasesDefault = [
  [[5, 2, 18, 1], [5, 18]],
  [[5, 2, 3, 18, 1], [5, 18]],
  [['John', 'Bernie', 'Kevin', 'Arnold'], ['John', 'Kevin']],
  [[], []]
]

const positiveCasesDescending = [
  [[5, 2, 18, 1], [5, 2, 1]],
  [[5, 2, 3, 18, 1], [5, 2, 1]],
  [['John', 'Bernie', 'Kevin', 'Arnold'], ['John', 'Bernie', 'Arnold']],
  [[], []]
]

const negativeCasesBadArgument = [
  ['number', 5, new TypeError('Argument must be an array')],
  ['string', '', new TypeError('Argument must be an array')],
  ['object', {}, new TypeError('Argument must be an array')]
]

const negativeCasesBadComparator = [
  ['number', 5, new TypeError('Comparator must be a function')],
  ['string', '', new TypeError('Comparator must be a function')],
  ['object', {}, new TypeError('Comparator must be a function')]
]

describe('Positive scenarios (default behaviour)', () => {
  test.each(positiveCasesDefault)(
    'represses %p into %p',
    (argument, expectedResult) => {
      expect(stalinSort(argument)).toEqual(expectedResult)
    }
  )
})

describe('Positive scenarios (descending order)', () => {
  test.each(positiveCasesDescending)(
    'represses %p into %p',
    (argument, expectedResult) => {
      expect(stalinSort(argument, comparatorDescending)).toEqual(expectedResult)
    }
  )
})

describe('Negative scenarios: error should be thrown on bad argument', () => {
  test.each(negativeCasesBadArgument)(
    'throws an error on argument of type %p',
    (argumentType, argument, expectedResult) => {
      expect(() => stalinSort(argument)).toThrowError(expectedResult)
    }
  )
})

describe('Negative scenarios: error should be thrown on bad comparator callback argument type', () => {
  test.each(negativeCasesBadComparator)(
    'throws an error on comparator of type %p',
    (argumentType, argument, expectedResult) => {
      expect(() => stalinSort([], argument)).toThrowError(expectedResult)
    }
  )
})
