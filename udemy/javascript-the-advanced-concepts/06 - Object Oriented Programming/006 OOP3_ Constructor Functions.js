// Constructor functions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

const peter = new Elf('Peter', 'stones');

Elf.prototype.attack = function () {
  return 'attack with ' + this.weapon;
};

console.log(peter.attack());

// Equivalent to

const Elf1 = new Function(
  'name',
  'weapon',
  `this.name = name;
this.weapon = weapon;
`
);

const sarah = new Elf1('Sarah', 'fireworks');
console.log(sarah);
