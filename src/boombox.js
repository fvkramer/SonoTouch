const svgHeight = 600;
const svgWidth = 900;

// two div elements

const boomBoxes = d3.selectAll('.boom-box');

boomBoxes.append('svg').attr({
  height: svgHeight,
  width: svgWidth,
});
