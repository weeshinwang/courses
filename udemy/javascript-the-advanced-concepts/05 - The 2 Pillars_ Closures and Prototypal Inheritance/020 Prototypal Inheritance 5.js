// let human = {
//   mortal: true,
// };

// let socrates = Object.create(human);

// function Donut() {
//   return {shape: 'round'}
// }

function Donut() {
  this.shape = 'round';
  return this;
}

Donut.prototype = {
  eat() {
    console.log('Nom nom nom');
  },
};

let donut1 = new Donut(); // __proto__: Donut.prototype
let donut2 = new Donut(); // __proto__: Donut.prototype

donut1.eat();
donut2.eat();

// const o = {};
// o.__proto__.isPrototypeOf(Object)
// o.__proto__ instanceof Object

// o.__proto__.toString()
// o.__proto__.constructor.name
