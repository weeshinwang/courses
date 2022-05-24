import { red, blue } from './button-styles';
const top = document.createElement('div');
top.innerText = 'TOP OF FOOTER';
top.style = red;
const bottom = document.createElement('div');
bottom.innerText = 'BOTTOM OF FOOTER';
bottom.style = blue;

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
