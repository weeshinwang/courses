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
import { flower } from '../5-group-elements/movieFlower.js';

// filtered = _.filter(MOVIES, (d) => {
//   // either the genre is in the filtered genres
//   return (
//     (_.includes(filteredGenres, d.genres[0]) ||
//       // OR the movie's genre isn't one of the top genres, and "Other" is toggled
//       (_.includes(filteredGenres, 'Other') &&
//         !_.includes(topGenres, d.genres[0]))) &&
//     // AND movie's pg rating is in filtered pg
//     _.includes(filteredPG, d.rated)
//   );
// });
let btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.className = 'btn';
document.body.appendChild(btn);

const updateFlower = (filteredFlowers) => {
  const svg = d3.select('svg');
  const t = svg.transition().duration(1000);

  const g = svg
    .selectAll('g')
    .data(filteredFlowers, (d) => d.title)
    .join(
      (enter) => {
        // with the enter selection, first create the group element
        const g = enter
          .append('g')
          // because we're going to be animating opacity & translate later on
          // we need to overwrite some defaults so the animation looks good
          .attr('opacity', 0)
          .attr('transform', (d, i) => `translate(${d.translate})`);

        // then create the petal paths & text
        g.selectAll('path')
          .data((d) =>
            _.times(d.numPetals, (i) =>
              Object.assign({}, d, { rotate: i * (360 / d.numPetals) })
            )
          )
          .join('path') // takes care of enter+update+exit for the petals
          .attr('fill-opacity', 0.5)
          .attr('d', (d) => d.path)
          .attr('fill', (d) => d.color)
          .attr('stroke', (d) => d.color)
          // animate petal rotating & scaling up
          .transition(t)
          .attr('transform', (d) => `rotate(${d.rotate})scale(${d.scale})`);

        g.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '.35em')
          .style('font-size', '.7em')
          .style('font-style', 'italic')
          .text((d) => _.truncate(d.title, { length: 20 }));

        // need to return the enter selection, this is what gets joined with update selection
        return g;
      },
      (update) => update,
      (exit) => {
        // fade out before removing
        exit.transition(t).attr('opacity', 0).remove();
      }
    );

  g.transition(t)
    // after the flowers have been entered, animate its opacity to 1
    .attr('opacity', 1)
    // and when flowers are updated, animate to its new position
    .attr('transform', (d, i) => `translate(${d.translate})`);
};

d3.select('.btn').on('click', (d) => {
  const filteredFlowers = flower.slice(-20);
  updateFlower(filteredFlowers);
});
