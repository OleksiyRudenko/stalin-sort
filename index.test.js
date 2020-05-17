/* eslint-env jest */
const stalinSort = require('./index')

const positiveCasesDefault = [
  [[5, 2, 18, 1], [5, 18]],
  [['John', 'Bernie', 'Kevin', 'Arnold'], ['John', 'Kevin']],
  [[], []]
]

const negativeCasesBadArgument = [
  ['number', 5, new TypeError('Argument must be an array')],
  ['string', '', new TypeError('Argument must be an array')],
  ['object', {}, new TypeError('Argument must be an array')]
]

describe('Positive scenarios (default behaviour)', () => {
  test.each(positiveCasesDefault)(
    'represses %p into %p',
    (argument, expectedResult) => {
      expect(stalinSort(argument)).toEqual(expectedResult)
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
