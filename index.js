const stalinSort = (arr) => {
  return arr.reduce(
    (acc, v) => acc.length
      ? acc[acc.length - 1] < v
        ? [...acc, v]
        : acc
      : [v],
    [])
}

module.exports = stalinSort
