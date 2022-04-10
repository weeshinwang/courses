// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }

//   attack() {
//     return 'attck with ' + this.weapon;
//   }
// }

// const fiona = new Elf('Fiona', 'ninja');
// const ogre = { ...fiona };
// ogre.__proto__;

// ogre.attack();

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return 'attck with ' + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const dolby = new Elf('Dolby', 'ninja', 'house');

console.log(dolby);

console.log(Elf.isPrototypeOf(dolby));
console.log(Elf.prototype.isPrototypeOf(dolby));
console.log(Character.prototype.isPrototypeOf(Elf));
console.log(Character.prototype.isPrototypeOf(Elf.prototype));
console.log(Character.isPrototypeOf(Elf));
