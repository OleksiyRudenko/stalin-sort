const { comparatorAscending } = require('./utils')

/**
 * Comparator compares two primitive values and returns a boolean
 * @callback comparatorCallback
 * @param {String|Number|Boolean} a
 * @param {String|Number|Boolean} b
 * @returns {boolean}
 */

/**
 * Stalin sort skips elements that are not in order
 * @param {[String|Number|Boolean]} arr
 * @param {comparatorCallback} compare
 * @returns {Array}
 */
const stalinSort = (arr, compare = comparatorAscending) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Argument must be an array')
  }
  if (typeof compare !== 'function') {
    throw new TypeError('Comparator must be a function')
  }
  if (!arr.length) return []

  const [first, ...rest] = arr

  return rest.reduce((acc, element) => {
    const isValid = compare(acc[acc.length - 1], element)
    return isValid ? [...acc, element] : acc
  }, [first])
}

module.exports = stalinSort
