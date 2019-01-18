const svgHeight = 250;
const svgWidth = 400;

const svgMHeight = 150;
const svgMWidth = 275;

const monitorWidth = 470;
// two div elements

// const boomBoxes = d3.selectAll('.boom-box');
const boomBox = d3.selectAll('.boom-box');
const monitor = d3.select('#monitor');

const svg = boomBox.append('svg')
  .attr('height', svgHeight)
  .attr('width', svgWidth);

const svgMonitor = monitor.append('svg')
  .attr('height', svgMHeight)
  .attr('width', svgMWidth);

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
  const max = d3.max(frequencyData);

  const rangeScale = d3.scaleLinear()
    .domain([0, max])
    .range([0, svgHeight - 100]);

  const waveLength = d3.scaleLinear()
    .domain([0, max])
    .range([0, monitorWidth / 2]);

  const waveLength2 = d3.scaleLinear()
    .domain([0, max])
    .range([monitorWidth / 2, monitorWidth]);

  const hslScale = d3.scaleLinear()
    .domain([0, max])
    .range([0, 360]);

  const rects = svgMonitor.selectAll('rect')
    .data(frequencyData);
  rects.remove();
  rects.enter()
    .append('rect')
    .attr('x', d => 150 - Math.random() * d)
    .attr('y', d => -waveLength(d))
    .attr('width', d => rangeScale(d))
    .attr('height', 3)
    .attr('fill', d => d3.hsl(hslScale(d), 1, 0.85))
    .attr('transform', 'rotate(90)');
  rects.enter()
    .append('rect')
    .attr('x', d => 150 - Math.random() * (max - d))
    .attr('y', d => -waveLength2(d))
    .attr('width', d => rangeScale(max - d))
    .attr('height', 3)
    .attr('fill', d => d3.hsl(hslScale(d), 1, 0.85))
    .attr('transform', 'rotate(90)');
};

const createBoomBox = (frequencyData) => {
  makeBoomBox(frequencyData);
  makeWaveForm(frequencyData);
};

export default createBoomBox;
