import _ from 'lodash';

document.getElementById('btn').addEventListener('click', () => {
  const el = document.getElementById('header');
  el.innerHTML = 'I HAVE UPDATED THE CODE';

  const listItems = ['apple', 'orange', 'banana'];
  const ul = document.getElementById('shoppinglist');
  _.forEach(listItems, (item) => {
    const temp = document.createElement('li');
    temp.innerHTML = item;
    ul.appendChild(temp);
  });
});
