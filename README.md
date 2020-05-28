# stalinSort

Inspired by [a post on mastodon](https://mastodon.social/@mathew/100958177234287431)

Developed for educational purposes within [kottans](https://github.com/kottans)

## Installation

- npm: `npm install --save @rudenko/stalin-sort`
- yarn: `yarn add @rudenko/stalin-sort`

## Usage

```javascript
const stalinSort = require('@rudenko/stalin-sort')

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

| Version | Milestone                       | Comment          | Diff
| ------- | ------------------------------- | ---------------- | ---
| 0.0.1   | Initialize project              |                  |
| 0.0.2   | Add code stub and basic test    | Tests fail       | [v0.0.1...v0.0.2](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.0.1...v0.0.2)
| 0.0.3   | Add positive scenarios test set | Tests still fail | [v0.0.2...v0.0.3](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.0.2...v0.0.3)
| 0.1.0   | Add `for` loop implementation   | Tests succeed    | [v0.0.3...v0.1.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.0.3...v0.1.0)
| 0.1.1   | Change implementation using `for...in` loop | Tests succeed    | [v0.1.0...v0.1.1](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.1.0...v0.1.1)
| 0.1.2   | Change implementation using `for...of` loop | Tests succeed    | [v0.1.1...v0.1.2](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.1.1...v0.1.2)
| 0.2.0   | Change implementation using `Array.forEach` | Tests succeed    | [v0.1.2...v0.2.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.1.2...v0.2.0)
| 0.3.0   | Change implementation using `Array.reduce` | Tests succeed    | [v0.2.0...v0.3.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.2.0...v0.3.0)
| 0.4.0   | Change implementation using `Array.filter` | Tests succeed    | [v0.3.0...v0.4.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.3.0...v0.4.0)
| 0.4.1   | Change `Array.filter` condition (skip boolean literals) | Tests succeed    | [v0.4.0...v0.4.1](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.4.0...v0.4.1)
| 0.4.2   | Change `Array.filter` condition (distill logic) | Tests succeed    | [v0.4.1...v0.4.2](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.4.1...v0.4.2)
| 0.5.0   | Add error handling on wrong argument type | Tests succeed    | [v0.4.2...v0.5.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.4.2...v0.5.0)
| 0.6.0   | Add `compare` argument and pre-defined comparators | Tests succeed    | [v0.5.0...v0.6.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.5.0...v0.6.0)
| 0.7.0   | Add usage and `example.js`      | Tests succeed    | [v0.6.0...v0.7.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.6.0...v0.7.0)
| 0.8.0   | Fix `stalinSort` implementation logical mistake    | Tests succeed    | [v0.7.0...v0.8.0](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.7.0...v0.8.0)
| 0.8.1   | Add tests for comparison functions from `utils`    | Tests succeed    | [v0.8.0...v0.8.1](https://github.com/OleksiyRudenko/stalin-sort/compare/v0.8.0...v0.8.1)

## Similar projects

- [Joniator/stalinsort@github](https://github.com/Joniator/stalinsort)
- [alvarocastro/stalinsort@github](https://github.com/alvarocastro/stalinsort)

## Misc

Time spent: apx 2hrs
