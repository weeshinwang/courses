function a() {
  console.log(this);
  this.newVariable = 'HELLO';
}

const b = function () {
  console.log(this);
};

a();

console.log(newVariable);

b();

const c = {
  name: 'C OBJECT',
  log: function () {
    console.log(this);
    const setname = function (newName) {
      this.name = newName;
    };
    setname('UPDATED VALUE');
    console.log(this);
  },
};

c.log();
