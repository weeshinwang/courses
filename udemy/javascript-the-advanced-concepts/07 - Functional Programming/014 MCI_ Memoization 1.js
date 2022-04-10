// let cache = {};

// function memoTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log('LONG TIME');
//     cache[n] = n + 80;
//     return cache[n];
//   }
// }

// console.log('1', memoTo80(5));
// console.log('2', memoTo80(5));
// console.log('3', memoTo80(4));

function memoTo80() {
  let cache = {};
  return function inner(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('LONG TIME');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memo = memoTo80();

console.log('1', memo(5));
console.log('2', memo(5));
console.log('3', memo(4));
