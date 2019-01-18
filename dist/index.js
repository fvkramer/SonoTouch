/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/keyboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/boombox.js":
/*!************************!*\
  !*** ./src/boombox.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst svgHeight = 250;\nconst svgWidth = 400;\n\nconst svgMHeight = 150;\nconst svgMWidth = 275;\n\nconst monitorWidth = 470;\n// two div elements\n\n// const boomBoxes = d3.selectAll('.boom-box');\nconst boomBox = d3.selectAll('.boom-box');\nconst monitor = d3.select('#monitor');\n\nconst svg = boomBox.append('svg')\n  .attr('height', svgHeight)\n  .attr('width', svgWidth);\n\nconst svgMonitor = monitor.append('svg')\n  .attr('height', svgMHeight)\n  .attr('width', svgMWidth);\n\nconst makeBoomBox = (frequencyData) => {\n  const rangeScale = d3.scaleLinear()\n    .domain([0, d3.max(frequencyData)])\n    .range([0, svgHeight - 100]);\n\n  const hslScale = d3.scaleLinear()\n    .domain([0, d3.max(frequencyData)])\n    .range([0, 360]);\n\n  const circles = svg.selectAll('circle')\n    .data(frequencyData);\n  circles.exit().remove();\n  circles.enter()\n    .append('circle')\n    .attr('cx', svgWidth / 2)\n    .attr('cy', svgHeight / 2)\n    .attr('fill', 'none')\n    .attr('stroke-width', 2)\n    .attr('stroke-opacity', 1)\n    .merge(circles)\n    .attr('r', d => rangeScale(d))\n    .attr('stroke', d => d3.hsl(hslScale(d), 1, 0.85));\n};\n\nconst makeWaveForm = (frequencyData) => {\n  const max = d3.max(frequencyData);\n\n  const rangeScale = d3.scaleLinear()\n    .domain([0, max])\n    .range([0, svgHeight - 100]);\n\n  const waveLength = d3.scaleLinear()\n    .domain([0, max])\n    .range([0, monitorWidth / 2]);\n\n  const waveLength2 = d3.scaleLinear()\n    .domain([0, max])\n    .range([monitorWidth / 2, monitorWidth]);\n\n  const hslScale = d3.scaleLinear()\n    .domain([0, max])\n    .range([0, 360]);\n\n  const rects = svgMonitor.selectAll('rect')\n    .data(frequencyData);\n  rects.remove();\n  rects.enter()\n    .append('rect')\n    .attr('x', d => 150 - Math.random() * d)\n    .attr('y', d => -waveLength(d))\n    .attr('width', d => rangeScale(d))\n    .attr('height', 3)\n    .attr('fill', d => d3.hsl(hslScale(d), 1, 0.85))\n    .attr('transform', 'rotate(90)');\n  rects.enter()\n    .append('rect')\n    .attr('x', d => 150 - Math.random() * (max - d))\n    .attr('y', d => -waveLength2(d))\n    .attr('width', d => rangeScale(max - d))\n    .attr('height', 3)\n    .attr('fill', d => d3.hsl(hslScale(d), 1, 0.85))\n    .attr('transform', 'rotate(90)');\n};\n\n\nconst createBoomBox = (frequencyData) => {\n  makeBoomBox(frequencyData);\n  makeWaveForm(frequencyData);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createBoomBox);\n\n\n//# sourceURL=webpack:///./src/boombox.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n\n\nlet start = true;\n\nconst receiveElement = (number) => {\n  const audioString = `audioElement-${number}`;\n  document.getElementById(audioString).play();\n  Object(_music__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioString);\n};\n\ndocument.addEventListener('keydown', (key) => {\n  if (start) {\n    const introText = document.getElementById('instructions');\n    introText.parentNode.removeChild(introText);\n    start = false;\n  }\n\n  switch (key.keyCode) {\n    case 192:\n      // `\n      document.getElementById('`').classList.add('on');\n      break;\n    case 49:\n      document.getElementById('1').classList.add('on');\n      receiveElement(1);\n      break;\n    case 50:\n      // 2\n      document.getElementById('2').classList.add('on');\n      receiveElement(2);\n      break;\n    case 51:\n      // 3\n      document.getElementById('3').classList.add('on');\n      receiveElement(3);\n      break;\n    case 52:\n      // 4\n      document.getElementById('4').classList.add('on');\n      receiveElement(4);\n      break;\n    case 53:\n      // 5\n      document.getElementById('5').classList.add('on');\n      receiveElement(5);\n      break;\n    case 54:\n      // 6\n      document.getElementById('6').classList.add('on');\n      receiveElement(6);\n      break;\n    case 55:\n      // 7\n      document.getElementById('7').classList.add('on');\n      receiveElement(7);\n      break;\n    case 56:\n      // 8\n      document.getElementById('8').classList.add('on');\n      receiveElement(8);\n      break;\n    case 57:\n      // 9\n      document.getElementById('9').classList.add('on');\n      receiveElement(9);\n      break;\n    case 48:\n      // 0\n      document.getElementById('0').classList.add('on');\n      receiveElement(10);\n      break;\n    case 189:\n      //-\n      document.getElementById('-').classList.add('on');\n      receiveElement(11);\n      break;\n    case 187:\n    // =\n      document.getElementById('=').classList.add('on');\n      receiveElement(12);\n      break;\n    case 8:\n      // delete\n      document.getElementById('Backspace').classList.add('on');\n      receiveElement(13);\n      break;\n    case 9:\n      // tab\n      key.preventDefault();\n      break;\n    case 81:\n      // q\n      document.getElementById('q').classList.add('on');\n      receiveElement(14);\n      break;\n    case 87:\n      // w\n      document.getElementById('w').classList.add('on');\n      receiveElement(15);\n      break;\n    case 69:\n      // e\n      document.getElementById('e').classList.add('on');\n      receiveElement(16);\n      break;\n    case 82:\n      // r\n      document.getElementById('r').classList.add('on');\n      receiveElement(17);\n      break;\n    case 84:\n      // t\n      document.getElementById('t').classList.add('on');\n      receiveElement(18);\n      break;\n    case 89:\n      // y\n      document.getElementById('y').classList.add('on');\n      receiveElement(19);\n      break;\n    case 85:\n      // u\n      document.getElementById('u').classList.add('on');\n      receiveElement(20);\n      break;\n    case 73:\n      // i\n      document.getElementById('i').classList.add('on');\n      receiveElement(21);\n      break;\n    case 79:\n      // o\n      document.getElementById('o').classList.add('on');\n      receiveElement(22);\n      break;\n    case 80:\n      // p\n      document.getElementById('p').classList.add('on');\n      receiveElement(23);\n      break;\n    case 219:\n      // [\n      document.getElementById('[').classList.add('on');\n      receiveElement(24);\n      break;\n    case 221:\n      // ]\n      document.getElementById(']').classList.add('on');\n      receiveElement(25);\n      break;\n    case 20:\n      // caps lock\n      key.preventDefault();\n      document.getElementById('\\\\').classList.add('on');\n      document.getElementById('Capslock').classList.add('on');\n      receiveElement(26);\n      break;\n    case 65:\n      // a\n      document.getElementById('a').classList.add('on');\n      receiveElement(27);\n      break;\n    case 83:\n      // s\n      document.getElementById('s').classList.add('on');\n      receiveElement(28);\n      break;\n    case 68:\n      // d\n      document.getElementById('d').classList.add('on');\n      receiveElement(29);\n      break;\n    case 70:\n      // f\n      document.getElementById('f').classList.add('on');\n      receiveElement(30);\n      break;\n    case 71:\n      // g\n      document.getElementById('g').classList.add('on');\n      receiveElement(31);\n      break;\n    case 72:\n      // h\n      document.getElementById('h').classList.add('on');\n      receiveElement(32);\n      break;\n    case 74:\n      // j\n      document.getElementById('j').classList.add('on');\n      receiveElement(33);\n      break;\n    case 75:\n      // k\n      document.getElementById('k').classList.add('on');\n      receiveElement(34);\n      break;\n    case 76:\n      // l\n      document.getElementById('l').classList.add('on');\n      receiveElement(35);\n      break;\n    case 186:\n    // ;\n      document.getElementById(';').classList.add('on');\n      receiveElement(36);\n      break;\n    case 222:\n    // '\n      document.getElementById('\\'').classList.add('on');\n      receiveElement(37);\n      break;\n    case 13:\n    // return\n      key.preventDefault();\n      document.getElementById('Enter').classList.add('on');\n      receiveElement(38);\n      break;\n    case 16:\n    // shift\n      key.preventDefault();\n      document.getElementById('Shift-1').classList.add('on');\n      receiveElement(39);\n      break;\n    case 90:\n    // z\n      document.getElementById('z').classList.add('on');\n      receiveElement(40);\n      break;\n    case 88:\n    // x\n      document.getElementById('x').classList.add('on');\n      receiveElement(41);\n      break;\n    case 67:\n    // c\n      document.getElementById('c').classList.add('on');\n      receiveElement(42);\n      break;\n    case 86:\n    // v\n      document.getElementById('v').classList.add('on');\n      receiveElement(43);\n      break;\n    case 66:\n    // b\n      document.getElementById('b').classList.add('on');\n      receiveElement(44);\n      break;\n    case 78:\n    // n\n      document.getElementById('n').classList.add('on');\n      receiveElement(45);\n      break;\n    case 77:\n    // m\n      document.getElementById('m').classList.add('on');\n      receiveElement(46);\n      break;\n    case 188:\n    // ,\n      document.getElementById(',').classList.add('on');\n      receiveElement(47);\n      break;\n    case 190:\n    // .\n      document.getElementById('.').classList.add('on');\n      receiveElement(48);\n      break;\n    case 191:\n    //  /\n      document.getElementById('/').classList.add('on');\n      receiveElement(49);\n      break;\n    case 32:\n    // space\n      key.preventDefault();\n      document.getElementById(' ').classList.add('on');\n      receiveElement(50);\n      break;\n    default:\n      break;\n  }\n});\n\n\ndocument.addEventListener('keyup', (e) => {\n  // console.log(e);\n  document.getElementById(e.key).classList.remove('on');\n});\n\n\n//# sourceURL=webpack:///./src/keyboard.js?");

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boombox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boombox */ \"./src/boombox.js\");\n\n\nconst frequencyData = new Uint8Array(200);\nconst receivedElements = {};\n\nconst createFrequency = (analyser) => {\n  // const frequencyData = new Uint8Array(200);\n  requestAnimationFrame(() => createFrequency(analyser));\n  // Copy frequency data to frequencyData array\n  analyser.getByteFrequencyData(frequencyData);\n  Object(_boombox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(frequencyData);\n};\n\nconst createAudio = (audioId) => {\n  // create audio ctx\n  console.log('in audio');\n  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();\n\n  // get audioElement\n  const audioElement = document.getElementById(audioId);\n\n  if (receivedElements[audioId]) {\n  } else {\n    receivedElements[audioId] = true;\n    // turn audioElement into MediaElementAudioSourceNode to manipulate its data\n    const audioSrc = audioCtx.createMediaElementSource(audioElement);\n\n    // creates analyser node\n    const analyser = audioCtx.createAnalyser();\n\n    // connects output of audio element to input of analyser\n    audioSrc.connect(analyser);\n\n    // then connects to audioCtx.destination (our speakers)\n    audioSrc.connect(audioCtx.destination);\n\n    createFrequency(analyser);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAudio);\n\n\n//# sourceURL=webpack:///./src/music.js?");

/***/ })

/******/ });