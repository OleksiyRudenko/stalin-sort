const stalinSort = (arr) => {
  const output = []
  if (arr.length) output.push(arr[0])
  for (const i in arr) {
    if (i && arr[i] > arr[i - 1]) {
      output.push(arr[i])
    }
  }
  return output
}

module.exports = stalinSort
