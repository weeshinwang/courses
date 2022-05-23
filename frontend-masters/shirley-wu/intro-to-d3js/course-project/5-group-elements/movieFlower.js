import * as d3 from 'd3';
import * as _ from 'lodash';
import {
  TOP_GENRES,
  COLOR_OBJECT,
  PETAL_COLORS,
  MOVIES,
  calculateGridPos,
  petalPaths,
  width,
  svgHeight,
  PATHOBJ,
  COLORS,
} from '../utils.js';

export const flower = (() => {
  const colorScale = d3
    .scaleOrdinal()
    .domain(TOP_GENRES)
    .range(PETAL_COLORS)
    .unknown(COLOR_OBJECT.Other);

  const pathScale = d3.scaleOrdinal().range(petalPaths);

  const minMaxRating = d3.extent(MOVIES, (d) => d.rating);
  const sizeScale = d3.scaleLinear().domain(minMaxRating).range([0.2, 0.6]);

  const minMaxVotes = d3.extent(MOVIES, (d) => d.votes);
  const numPetalScale = d3
    .scaleQuantize()
    .domain(minMaxVotes)
    .range([5, 6, 7, 8, 9, 10]);

  return _.map(MOVIES, (d, i) => {
    return {
      color: colorScale(d.genres[0]),
      path: pathScale(d.rated),
      scale: sizeScale(d.rating),
      numPetals: numPetalScale(d.votes),
      title: d.title,
      translate: calculateGridPos(i),
    };
  });
})();

const root = document.querySelector('#app');

// const svg = /*html*/ `
// <div style='max-height:${width / 2}px;overflow-y:scroll;overflow-x:hidden;'>
//   <svg id='container' width=${width} height=${svgHeight}></svg>
// </div>
// `;

const svg = /*html*/ `
<svg id='container' width=${width} height=${svgHeight}></svg>
`;

root.innerHTML = svg;

const g = d3
  .select('#container')
  .selectAll('g')
  .data(flower)
  .enter()
  .append('g')
  .attr('transform', (d) => `translate(${d.translate})`);

g.selectAll('path')
  .data((d) =>
    _.times(d.numPetals, (i) =>
      Object.assign({}, d, { rotate: i * (360 / d.numPetals) })
    )
  )
  .enter()
  .append('path')
  .attr('transform', (d) => `rotate(${d.rotate})scale(${d.scale})`)
  .attr('d', (d) => d.path)
  .attr('fill', (d) => d.color)
  .attr('fill-opacity', 0.75)
  .attr('stroke', (d) => d.color)
  .attr('stroke-width', 2);

g.append('text')
  .text((d) => _.truncate(d.title, 15))
  .style('font-size', '.7em')
  .style('font-style', 'italic')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em');
