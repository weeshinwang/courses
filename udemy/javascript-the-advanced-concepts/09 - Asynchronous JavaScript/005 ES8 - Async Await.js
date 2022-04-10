fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(console.log);

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUser();
