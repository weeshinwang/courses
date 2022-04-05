function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
};

const John = new Person();
