const stalinSort = (arr) => {
  const output = []
  if (arr.length) output.push(arr[0])
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > arr[i - 1]) {
      output.push(arr[i])
    }
  }
  return output
}

module.exports = stalinSort
