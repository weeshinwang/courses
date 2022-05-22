import {
  MOVIES,
  COLORS,
  PATHOBJ,
  calculateGridPos,
  width,
  svgHeight,
} from '../utils.js';

const root = document.querySelector('#root');

const svg = /*html*/ `
  <svg id='container' width=${width} height=${svgHeight}></svg>
`;

root.innerHTML = svg;

const path = d3
  .select('#container')
  .selectAll('path')
  .data(MOVIES)
  .enter()
  .append('path')
  .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)
  .attr('d', (d) => PATHOBJ[d.rated])
  .attr('fill', (d) => COLORS[d.genres[0]] || COLORS.Other)
  .attr('stroke', (d) => COLORS[d.genres[0]] || COLORS.Other)
  .attr('fill-opacity', 0.5)
  .attr('stroke-width', 2);
