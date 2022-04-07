const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log(giveMeTheCharacterNOW());

var b = {
  name: 'jay',
  say() {
    console.log(this);
  },
};

var c = {
  name: 'jay',
  say() {
    return function () {
      console.log(this);
    };
  },
};

var d = {
  name: 'jay',
  say() {
    return () => console.log(this);
  },
};

b.say();
c.say()();
d.say()();
