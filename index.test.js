/* eslint-env jest */
const stalinSort = require('./index')

const positiveCasesDefault = [
  [[5, 2, 18, 1], [5, 18]],
  [['John', 'Bernie', 'Kevin', 'Arnold'], ['John', 'Kevin']],
  [[], []]
]

describe('Positive scenarios (default behaviour)', () => {
  test.each(positiveCasesDefault)(
    'represses %p into %p',
    (argument, expectedResult) => {
      expect(stalinSort(argument)).toEqual(expectedResult)
    }
  )
})
