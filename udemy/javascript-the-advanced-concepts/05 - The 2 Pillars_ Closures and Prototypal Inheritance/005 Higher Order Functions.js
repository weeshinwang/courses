// Naive way
function letAdminLogin() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return 'Access Granted to Adam';
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return 'Access Granted to Adam';
}

console.log(letAdminLogin());

// HOF way

function giveAcessTo(name) {
  return 'Acess Granted to ' + name;
}

function auth(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(50000);
  } else if (person.level === 'user') {
    fn(10000);
  }
  return giveAcessTo(person.name);
}

console.log(letPerson({ level: 'user', name: 'Tim' }, auth));
