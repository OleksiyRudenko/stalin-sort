const stalinSort = require('./index')
const { comparatorDescending } = require('./utils')

try {
  stalinSort([5, 2, 18, 1])
} catch (e) {
  // handle exception TypeError('Argument must be an array')
}

try {
  stalinSort([5, 2, 18, 1], comparatorDescending)
} catch (e) {
  // handle exceptions:
  // - TypeError('Argument must be an array')
  // - TypeError('Comparator must be a function')
}

try {
  stalinSort([5, 2, 18, 1], (a, b) => a > b)
} catch (e) {
  // handle exceptions:
  // - TypeError('Argument must be an array')
  // - TypeError('Comparator must be a function')
}
