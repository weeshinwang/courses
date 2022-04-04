greet();
function greet() {
  console.log('HELLO');
}

const anonymouseGreet = function () {
  console.log('HELLO');
};

anonymouseGreet();

function log(a) {
  console.log(a);
}

log(function () {
  console.log('HI');
});
