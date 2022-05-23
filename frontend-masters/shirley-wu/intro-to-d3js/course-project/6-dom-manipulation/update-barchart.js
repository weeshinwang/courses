import * as d3 from 'd3';

let btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.className = 'btn';
document.body.appendChild(btn);

const svg = document.querySelector('#container');
const rectWidth = 50;

const updateBarsOld = (svg, data) => {
  const rect = d3
    .select(svg)
    .selectAll('rect')
    .data(data, (d) => d);

  rect.exit().remove();

  const enter = rect
    .enter()
    .append('rect')
    .attr('fill', 'pink')
    .attr('stroke', 'plum')
    .attr('stroke-width', 2);

  enter
    .merge(rect)
    .attr('x', (d, i) => i * rectWidth)
    .attr('y', (d) => 100 - d)
    .attr('height', (d) => d)
    .attr('width', rectWidth);
};

const updateBarsNew = (svg, data) => {
  d3.select(svg)
    .selectAll('rect')
    .data(data, (d) => d)
    .join('rect')
    .attr('fill', 'pink')
    .attr('stroke', 'plum')
    .attr('stroke-width', 2)
    .attr('x', (d, i) => i * rectWidth)
    .attr('y', (d) => 100 - d)
    .attr('height', (d) => d)
    .attr('width', rectWidth);
};

d3.select('.btn').on('click', (d) => {
  const newData = Array.from({ length: Math.ceil(Math.random() * 5) + 3 }, () =>
    Math.floor(Math.random() * 40 + 10)
  );
  // updateBarsOld(svg, newData);
  updateBarsNew(svg, newData);
});
