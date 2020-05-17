const stalinSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Argument must be an array')
  }
  return arr.filter((v, i, a) => !i || a[i - 1] < v)
}

module.exports = stalinSort
