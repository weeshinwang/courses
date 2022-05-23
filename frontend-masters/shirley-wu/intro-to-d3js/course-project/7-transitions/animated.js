import * as d3 from 'd3';

let btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.className = 'btn';
document.body.appendChild(btn);

const svg = document.querySelector('#container');
const rectWidth = 50;
const svgHeight = '150';

const transitionUpdate = (svg, data) => {
  const t = d3.select('svg').transition().duration(1000);
  const rect = d3
    .select(svg)
    .selectAll('rect')
    .data(data, (d) => d)
    .join(
      (enter) => {
        const rect = enter
          .append('rect')
          .attr('width', rectWidth)
          .attr('stroke-width', 3)
          .attr('stroke', 'plum')
          .attr('fill', 'pink')
          // overwrite the default so the animation looks better:
          .attr('x', (d, i) => i * rectWidth)
          .attr('y', svgHeight)
          .attr('height', 0);

        return rect;
      },
      (update) => update,
      (exit) => {
        exit.transition(t).attr('y', svgHeight).attr('height', 0).remove();
      }
    )
    // animate enter + update selection
    .transition(t)
    .attr('x', (d, i) => i * rectWidth)
    .attr('y', (d) => svgHeight - d)
    .attr('height', (d) => d);
};

d3.select('.btn').on('click', (d) => {
  const newData = Array.from({ length: Math.ceil(Math.random() * 5) + 3 }, () =>
    Math.floor(Math.random() * 40 + 10)
  );
  // updateBarsOld(svg, newData);
  transitionUpdate(svg, newData);
});
