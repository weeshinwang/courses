function echo<T>(arg: T): T {
  return arg;
}

const str: string = 'string';
const result = echo(str);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(['str', 123]);
result[0].charCodeAt(0);

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArr([1, 2, 3]);

interface iWithLength {
  length: number;
}

function echoWithLength<T extends iWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const strs = echoWithLength('str');
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push('str');

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: 'str' };

let arrTwo: Array<number> = [1, 2, 3];

interface Iplus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}

const a: Iplus<number> = plus;
