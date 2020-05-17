const stalinSort = (arr) => {
  return arr.filter(
    (v, i, a) => i
      ? a[i - 1] < v
        ? true
        : false
      : true
  )
}

module.exports = stalinSort
