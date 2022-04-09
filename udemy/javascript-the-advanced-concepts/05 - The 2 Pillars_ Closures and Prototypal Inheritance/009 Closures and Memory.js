// Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😅');
  console.log('Created!');
  return bigArray[index];
}

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😅');
  console.log('Created again!');
  return function (index) {
    return bigArray[index];
  };
}

// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));

// const getHeavyDuty = heavyDuty2();
// console.log(getHeavyDuty(688));
// console.log(getHeavyDuty(700));
// console.log(getHeavyDuty(800));

// Encapsulation
const makeNuclearButton = () => {
  let timeWithotDestruction = 0;
  const passTime = () => timeWithotDestruction++;
  const totalPeachTime = () => timeWithotDestruction;
  const launch = () => {
    timeWithotDestruction = -1;
    return '🎉';
  };
  setInterval(passTime, 1000);
  return {
    launch,
    totalPeachTime,
  };
};

const ohno = makeNuclearButton();
console.log(ohno.totalPeachTime());
