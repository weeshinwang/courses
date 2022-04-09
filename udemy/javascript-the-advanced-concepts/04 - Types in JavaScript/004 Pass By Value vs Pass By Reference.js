const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'deep',
  },
};

const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.c.deep = 'hahaha';

console.log(1, obj1.c);
console.log(2, obj2.c);
