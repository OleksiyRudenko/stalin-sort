const stalinSort = (arr) => {
  const output = []
  if (arr.length) output.push(arr[0])
  for (const [i, v] of arr.entries()) {
    if (i && v > arr[i - 1]) {
      output.push(v)
    }
  }
  return output
}

module.exports = stalinSort
