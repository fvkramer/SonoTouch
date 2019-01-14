const svgHeight = 300;
const svgWidth = 450;


const monitorWidth = 735;
// two div elements

// const boomBoxes = d3.selectAll('.boom-box');
const boomBox = d3.selectAll('.boom-box');
const monitor = d3.select('#monitor');

const svg = boomBox.append('svg')
  .attr('height', svgHeight)
  .attr('width', svgWidth);

const svgMonitor = monitor.append('svg')
  .attr('height', 400)
  .attr('width', 600);

const makeBoomBox = (frequencyData) => {
  const rangeScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, svgHeight - 100]);

  const hslScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, 360]);

  const circles = svg.selectAll('circle')
    .data(frequencyData);
  circles.exit().remove();
  circles.enter()
    .append('circle')
    .attr('cx', svgWidth / 2)
    .attr('cy', svgHeight / 2)
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke-opacity', 1)
    .merge(circles)
    .attr('r', d => rangeScale(d))
    .attr('stroke', d => d3.hsl(hslScale(d), 1, 0.85));
};


const makeWaveForm = (frequencyData) => {
  const rangeScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, svgHeight - 100]);

  const waveLength = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, monitorWidth]);

  const hslScale = d3.scaleLinear()
    .domain([0, d3.max(frequencyData)])
    .range([0, 360]);

  const rects = svgMonitor.selectAll('rect')
    .data(frequencyData);
  rects.remove();
  rects.enter()
    .append('rect')
    .attr('x', 175)
    .attr('y', d => -waveLength(d))
    .attr('width', d => rangeScale(d))
    .attr('height', 3)
    .attr('fill', d => d3.hsl(hslScale(d), 1, 0.85))
    .attr('transform', 'rotate(90)');
};

const createBoomBox = (frequencyData) => {
  makeBoomBox(frequencyData);

  makeWaveForm(frequencyData);
};

export default createBoomBox;
