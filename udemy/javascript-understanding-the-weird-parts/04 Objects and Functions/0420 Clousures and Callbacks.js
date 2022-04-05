function sayHiLater() {
  const greeting = 'Hi';
  setTimeout(() => {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  const a = 1000;
  const b = 2000;
  callback();
}

tellMeWhenDone(function () {
  console.log('I AM DONE');
});

tellMeWhenDone(function () {
  console.log('ALL DONE');
});
