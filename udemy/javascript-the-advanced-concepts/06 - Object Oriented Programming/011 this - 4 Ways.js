// new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Jim', 55);

// Implicit binding
const person2 = {
  name: 'karen',
  age: 40,
  hi() {
    console.log(this.name);
  },
};

// explicit binding

const person3 = {
  name: 'karen',
  age: 40,
  hi: function () {
    console.log(this.setTimeout);
  }.bind(window),
};

// arrow function: lexical scope

const person4 = {
  name: 'karen',
  age: 40,
  hi: function () {
    const inner = () => {
      console.log(this.name);
    };
    return inner;
  },
};
