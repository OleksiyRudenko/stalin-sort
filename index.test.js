/* eslint-env jest */
const stalinSort = require('./index')

it('represses [5, 2, 18, 1] into [5, 18]', () => {
  expect(stalinSort([5, 2, 18, 1])).toEqual([5, 18])
})
