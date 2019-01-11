const svgHeight = 600;
const svgWidth = 900;

// two div elements

// const boomBoxes = d3.selectAll('.boom-box');
const createBoomBox = (frequencyData) => {
  const boomBox = d3.select('.boom-box');

  const svg = boomBox.append('svg').attr({
    height: svgHeight,
    width: svgWidth,
  });

  const rangeScale = d3.scale.linear()
    .domain([0, d3.max(frequencyData)])
    .range([0, svgHeight]);

  const hslScale = d3.scale.linear()
    .domain([0, d3.max(frequencyData)])
    .range([0, 360]);

  debugger;
  const circle = svg.select('circle')
    .data(frequencyData)
    .enter()
    .append('circle')
    .attr({
      r: d => rangeScale(d),
      x: svgWidth / 2,
      y: svgHeight / 2,
      fill: 'none',
      'stroke-width': 4,
      'stroke-opacity': 1,
      stroke: d => d3.hsl(hslScale(d), 1, 0.5),
    });

  circle.exit();
};

export default createBoomBox;
