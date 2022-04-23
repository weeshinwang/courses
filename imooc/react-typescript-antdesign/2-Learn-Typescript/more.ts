type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number) {
  return x + y;
}

const sum2: PlusType = sum;

type Name = () => string;
type NameOr = string | Name;

function getName(n: NameOr) {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// function getLength(input: string | number):number {
//   const str = input as String;
//   if (str.length) {
//     return str.length;
//   } else {
//     const number = input as Number;
//     return number.toString().length;
//   }
// }

function getLength(input: string | number): number {
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}

declare var jQuery: (selector: string) => any;
