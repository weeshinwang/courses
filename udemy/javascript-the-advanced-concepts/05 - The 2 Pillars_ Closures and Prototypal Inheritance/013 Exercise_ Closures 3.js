const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}

for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}

for (var i = 0; i < array.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log('I am at index ' + index);
    }, 3000);
  })(i);
}
