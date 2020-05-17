# stalinSort

Inspired by [a post on mastodon](https://mastodon.social/@mathew/100958177234287431)

Developed for educational purposes within [kottans](https://github.com/kottans)

## Installation

- npm: `npm install --save stalin-sort`
- yarn: `yarn add stalin-sort`

## Usage

```javascript
const stalinSort = require('stalin-sort')

const numbers = [5, 2, 18, 1];
const strings = ['klm', 'nop', 'def', 'abc']
let result

try {
  result = stalinSort(numbers) // [5, 18]
} catch (e) {
  // handle exception TypeError('Argument must be an array')
}

try {
  result = stalinSort(strings, (a, b) => a > b) // ['klm', 'def', 'abc']
} catch (e) {
  // handle exceptions:
  // - TypeError('Argument must be an array')
  // - TypeError('Comparator must be a function')
}
```

See [`example.js`](./example.js) for more examples.

## Educational

Advance from version to version to track the development process.

See also [CHANGELOG.md](./CHANGELOG.md)

| Version | Milestone                       | Comment          |
| ------- | ------------------------------- | ---------------- |
| 0.0.1   | Initialize project              |                  |
| 0.0.2   | Add code stub and basic test    | Tests fail       |
| 0.0.3   | Add positive scenarios test set | Tests still fail |
| 0.1.0   | Add `for` loop implementation   | Tests succeed    |
| 0.1.1   | Change implementation using `for...in` loop | Tests succeed    |
| 0.1.2   | Change implementation using `for...of` loop | Tests succeed    |
| 0.2.0   | Change implementation using `Array.forEach` | Tests succeed    |
| 0.3.0   | Change implementation using `Array.reduce` | Tests succeed    |
| 0.4.0   | Change implementation using `Array.filter` | Tests succeed    |
| 0.4.1   | Change `Array.filter` condition (skip boolean literals) | Tests succeed    |
| 0.5.0   | Add error handling on wrong argument type | Tests succeed    |
| 0.6.0   | Add `compare` argument and pre-defined comparators | Tests succeed    |
| 0.7.0   | Add usage and `example.js`      | Tests succeed    |

## Similar projects

[Joniator/stalinsort@github](https://github.com/Joniator/stalinsort)
[alvarocastro/stalinsort@github](https://github.com/alvarocastro/stalinsort)

## Misc

Time spent: apx 2hrs
