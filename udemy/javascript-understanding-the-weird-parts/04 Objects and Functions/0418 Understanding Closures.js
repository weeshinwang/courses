function buildFunctions() {
  const arr = [];

  for (const i = 0; i < 3; i++) {
    // for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
