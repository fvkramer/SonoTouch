const svgHeight = 200;
const svgWidth = 200;

// two div elements

// const boomBoxes = d3.selectAll('.boom-box');
const boomBox = d3.selectAll('.boom-box');

const svg = boomBox.append('svg')
  .attr('height', svgHeight)
  .attr('width', svgWidth);

const createBoomBox = (frequencyData) => {
  // debugger;
  const rangeScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, svgHeight]);

  const hslScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, 360]);

  svg.selectAll('circle')
    .data(frequencyData)
    .enter()
    .append('circle')
    .attr('r', d => rangeScale(d))
    .attr('cx', svgWidth / 2)
    .attr('cy', svgHeight / 2)
    .attr('fill', 'none')
    .attr('stroke-width', 4)
    .attr('stroke-opacity', 1)
    .attr('stroke', d => d3.hsl(hslScale(d), 1, 0.5))
    .exit();
};

export default createBoomBox;
