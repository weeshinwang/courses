class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal('Lily');
console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog('James');

console.log(dog.bark());
console.log(dog.run());

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run(): string {
    return 'Meow, ' + super.run();
  }
}

interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBattery();
}

interface RadioWithBattery extends Radio {
  checkBattery();
}

class Car implements Radio {
  switchRadio() {}
}

class Cellphone implements RadioWithBattery {
  switchRadio() {}
  checkBattery() {}
}
