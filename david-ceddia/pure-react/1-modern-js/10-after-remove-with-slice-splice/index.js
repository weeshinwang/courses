const word = ['c', 'o', 'd', 'e'];
let copy = [...word];
copy.splice(1, 2, 'x', 'y');

let a = word.slice(-2);
let b = word.slice();
console.log(a);
console.log(b);

console.log(copy);
console.log(word);
