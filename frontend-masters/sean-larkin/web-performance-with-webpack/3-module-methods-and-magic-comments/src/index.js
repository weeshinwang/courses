import nav from './nav';
// import { footer } from "./footer";
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';
import css from './footer.css';
import buttonStyles from './button.css';
// import * as GSAP from 'gsap';

const getFooter = () =>
  import(
    /* webpackChunkName: "footer" */
    /* webpackMode: "lazy" */
    './footer'
  );
const getGSAP = () => import('gsap');

const image = makeImage(imageUrl);
const button = makeButton('Yay! A Button!');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);

const setButtonStyles = (color) => {
  if (process.env.NODE_ENV == 'development') {
    return import(
      /* webpackChunkName: "footer" */
      /* webpackMode: "lazy" */
      `./button-styles/${color}`
    );
  } else {
    return import(`./button-styles/${color}`);
  }
};

button.addEventListener('click', (e) => {
  getFooter().then((footerModule) => {
    document.body.appendChild(footerModule.footer);
  });
  getGSAP().then((gsap) => {
    console.log(gsap);
  });

  setButtonStyles('red').then((styleStr) => {
    button.style = styleStr.default;
  });
});

document.body.appendChild(image);
