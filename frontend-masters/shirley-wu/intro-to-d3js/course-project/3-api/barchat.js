import * as d3 from 'd3';

// import { width, svgHeight } from '../utils';
const barData = [45, 67, 96, 84, 41];

const root = document.querySelector('#app');

const width = '800';
const svgHeight = '150';

let svg = /*html*/ `
  <svg id='container' width=${width} height=${svgHeight}></svg>
`;

root.innerHTML = svg;

svg = d3.select('#container');
const select = svg.select('rect');
const selectAll = svg.selectAll('rect');

// console.log('svg', svg);
// console.log('select', select);
// console.log('selectAll', selectAll);

// select.datum(barData)
// selectAll.datum(barData);
// selectAll.data(barData);

const rectWidth = 50;

selectAll
  .data(barData)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * rectWidth)
  .attr('y', (d) => svgHeight - d)
  .attr('height', (d) => d)
  .attr('width', rectWidth)
  .attr('stroke-width', 3)
  // .attr('stroke-dasharray', '5 5')
  .attr('stroke', 'plum')
  .attr('fill', 'pink');
