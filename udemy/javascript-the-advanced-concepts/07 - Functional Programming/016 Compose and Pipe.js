const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));

const multipleBy3 = (num) => num * 3;
const absolute = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multipleBy3, absolute);

console.log(multiplyBy3AndAbsolute(-30));
