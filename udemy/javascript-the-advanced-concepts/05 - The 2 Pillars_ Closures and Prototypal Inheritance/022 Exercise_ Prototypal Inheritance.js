Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

const a = new Date().lastYear();
console.log(a);

Array.prototype.map = function () {
  let s = [];
  for (let i = 0; i < this.length; i++) {
    s.push(`${this[i]}🌞`);
  }
  return s.join(', ');
};

console.log([1, 2, 3].map());
