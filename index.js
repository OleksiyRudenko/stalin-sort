const stalinSort = (arr) => {
  const output = []
  arr.forEach((v, i, a) => {
    if (i) {
      if (v > a[i - 1]) {
        output.push(v)
      }
    } else {
      output.push(v)
    }
  })
  return output
}

module.exports = stalinSort
