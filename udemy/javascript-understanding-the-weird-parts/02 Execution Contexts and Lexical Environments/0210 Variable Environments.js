function b() {
  var myVar;
  console.log('inside b, myVar = ', myVar);
}

function a() {
  var myVar = 2;
  b();
  console.log('inside a, myVar = ', myVar);
}

console.log('first line, myVar = ', myVar);

var myVar = 1;
a();

console.log('last line, myVar = ', myVar);
