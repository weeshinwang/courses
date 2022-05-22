import { MOVIES, COLORS } from '../utils.js';

const root = document.querySelector('#root');

// console.log(root);
// console.log(COLORS);
// console.log(MOVIES);

const petalPath = 'M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0';

const svg = /*html*/ `
  <svg id="container" width="500" height="100" style="border: 1px dashed" >
    <path d="${petalPath}" transform="translate(50, 0)" />
    <path d="${petalPath}" transform="translate(150, 0)" />
    <path d="${petalPath}" transform="translate(250, 0)" />
    <path d="${petalPath}" transform="translate(350, 0)" />
    <path d="${petalPath}" transform="translate(450, 0)" />
  </svg>
`;

root.innerHTML = svg;

const path = d3
  .select('#container')
  .selectAll('path')
  .data(MOVIES)
  .attr('fill', (d) => COLORS[d.genres[0]] || COLORS.Other)
  .attr('fill-opacity', 0.5)
  .attr('stroke', (d) => COLORS[d.genres[0]] || COLORS.Other)
  .attr('stroke-width', 2);
