// let view;
// function initialize() {
//   view = '🌞';
//   console.log('View has been set');
// }
// initialize();
// initialize();
// initialize();
// console.log(view);

//

let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      called++;
      view = '🌞';
      console.log('View has been set');
    }
  };
}
const calledOnce = initialize();
calledOnce();
calledOnce();

console.log(view);
