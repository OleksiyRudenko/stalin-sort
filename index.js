const stalinSort = (arr) => {
  return arr.filter((v, i, a) => !i || a[i - 1] < v)
}

module.exports = stalinSort
