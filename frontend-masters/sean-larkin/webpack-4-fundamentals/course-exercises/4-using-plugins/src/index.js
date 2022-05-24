import nav from './nav';

import makeButton from './button';
import { makeColorStyle } from './button-styles';
import './footer.css';
import './button.css';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';
// import Foo from './foo.ts';

const loadFooter = () => import('./footer');

const image = makeImage(imageUrl);
const button = makeButton('Yay! A Button!');

button.addEventListener('click', (e) => {
  loadFooter().then((m) => {
    document.body.appendChild(m.footer);
  });
});
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(image);
