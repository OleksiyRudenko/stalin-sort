/**
 * Comparator that returns true when a < b
 * @param {String|Number|Boolean} a
 * @param {String|Number|Boolean} b
 * @returns {boolean}
 */
function comparatorAscending (a, b) {
  return a < b
}

/**
 * Comparator that returns true when a > b
 * @param {String|Number|Boolean} a
 * @param {String|Number|Boolean} b
 * @returns {boolean}
 */
function comparatorDescending (a, b) {
  return a > b
}

module.exports = {
  comparatorAscending,
  comparatorDescending
}
