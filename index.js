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
  return arr.filter((v, i, a) => !i || compare(a[i - 1], v))
}

module.exports = stalinSort
