const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [o1, o2, o3] = await Promise.all(promises);
  return `Parallel is done: ${o1} ${o2} ${o3}`;
}

// parallel().then(console.log);

async function race() {
  const promises = [a(), b(), c()];
  const o1 = await Promise.race(promises);
  return `Race is done: ${o1}`;
}

// race().then(console.log);

async function sequence() {
  const o1 = await a();
  const o2 = await b();
  const o3 = await c();
  return `Sequence is done: ${o1} ${o2} ${o3}`;
}

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);
