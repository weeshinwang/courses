const barData = [45, 67, 96, 84, 41];

const svg = d3.select('#container');
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
  .data([10, 20, 30, 40, 50])
  .attr('x', (d, i) => i * rectWidth)
  .attr('y', (d) => 100 - d)
  .attr('height', (d) => d)
  .attr('width', rectWidth)
  .attr('stroke-width', 3)
  .attr('stroke-dasharray', '5 5')
  .attr('stroke', 'plum')
  .attr('fill', 'pink');
