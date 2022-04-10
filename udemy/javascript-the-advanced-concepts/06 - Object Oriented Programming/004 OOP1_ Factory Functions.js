const elf = {
  name: 'Orwell',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  },
};

const elf2 = {
  name: 'Sally',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  },
};

// Factory function

function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return 'attack with ' + weapon;
    },
  };
}

const peter = createElf('Peter', 'stones');

console.log(peter.attack());
