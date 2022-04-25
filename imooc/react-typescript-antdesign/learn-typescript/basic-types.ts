let isDone: boolean = false;

let age: number = 20;

let u: undefined = undefined;
let n: null = null;

let notSure: any = 4;
notSure = true;
notSure = 'char';
notSure.myName = 'weeshin';
notSure.getName();

let numberOfString: number | string = 1234;

let arrOfNumbers: number[] = [1, 2, 3, 4];

function test() {
  let arr: IArguments = arguments;
}

let tup: [string, number] = ['hi', 123];

interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let weeshin: Person = {
  id: 1234,
  name: 'weeshin',
};

function add(x: number, y: number, z?: number) {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result = add(1, 2, 3);

let addExp = function (x: number, y: number, z?: number) {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
};

const add2: (x: number, y: number, z?: number) => number = addExp;
