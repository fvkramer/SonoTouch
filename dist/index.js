!function(e){var t={};function a(d){if(t[d])return t[d].exports;var n=t[d]={i:d,l:!1,exports:{}};return e[d].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,d){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(d,n,function(t){return e[t]}.bind(null,n));return d},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var d=e=>{const t=d3.select(".boom-box").append("svg").attr({height:600,width:900}),a=d3.scale.linear().domain([0,d3.max(e)]).range([0,600]),d=d3.scale.linear().domain([0,d3.max(e)]).range([0,360]);t.select("circle").data(e).enter().append("circle").attr({r:e=>a(e),x:450,y:300,fill:"none","stroke-width":4,"stroke-opacity":1,stroke:e=>d3.hsl(d(e),1,.5)}).exit()};const n=new Uint8Array(200),s=e=>{requestAnimationFrame(()=>s(e)),e.getByteFrequencyData(n),d(n)};var c=e=>{const t=new(window.AudioContext||window.webkitAudioContext),a=document.getElementById(e),d=t.createMediaElementSource(a),n=t.createAnalyser();d.connect(n),d.connect(t.destination),s(n)};document.addEventListener("keydown",e=>{switch(console.log(e.keyCode),e.keyCode){case 192:document.getElementById("`").classList.add("on");break;case 49:document.getElementById("1").classList.add("on"),document.getElementById("audioElement-1").play(),c("audioElement-1");break;case 50:document.getElementById("2").classList.add("on");break;case 51:document.getElementById("3").classList.add("on");break;case 52:document.getElementById("4").classList.add("on");break;case 53:document.getElementById("5").classList.add("on");break;case 54:document.getElementById("6").classList.add("on");break;case 55:document.getElementById("7").classList.add("on");break;case 56:document.getElementById("8").classList.add("on");break;case 57:document.getElementById("9").classList.add("on");break;case 48:document.getElementById("0").classList.add("on");break;case 189:document.getElementById("-").classList.add("on");break;case 187:document.getElementById("=").classList.add("on");break;case 8:document.getElementById("Backspace").classList.add("on");break;case 9:break;case 81:document.getElementById("q").classList.add("on");break;case 87:document.getElementById("w").classList.add("on");break;case 69:document.getElementById("e").classList.add("on");break;case 82:document.getElementById("r").classList.add("on");break;case 84:document.getElementById("t").classList.add("on");break;case 89:document.getElementById("y").classList.add("on");break;case 85:document.getElementById("u").classList.add("on");break;case 73:document.getElementById("i").classList.add("on");break;case 79:document.getElementById("o").classList.add("on");break;case 80:document.getElementById("p").classList.add("on");break;case 219:document.getElementById("[").classList.add("on");break;case 221:document.getElementById("]").classList.add("on");break;case 20:document.getElementById("\\").classList.add("on"),document.getElementById("Capslock").classList.add("on");break;case 65:document.getElementById("a").classList.add("on");break;case 83:document.getElementById("s").classList.add("on");break;case 68:document.getElementById("d").classList.add("on");break;case 70:document.getElementById("f").classList.add("on");break;case 71:document.getElementById("g").classList.add("on");break;case 72:document.getElementById("h").classList.add("on");break;case 74:document.getElementById("j").classList.add("on");break;case 75:document.getElementById("k").classList.add("on");break;case 76:document.getElementById("l").classList.add("on");break;case 186:document.getElementById(";").classList.add("on");break;case 222:document.getElementById("'").classList.add("on");break;case 13:document.getElementById("Enter").classList.add("on");break;case 16:document.getElementById("Shift-1").classList.add("on");break;case 90:document.getElementById("z").classList.add("on");break;case 88:document.getElementById("x").classList.add("on");break;case 67:document.getElementById("c").classList.add("on");break;case 86:document.getElementById("v").classList.add("on");break;case 66:document.getElementById("b").classList.add("on");break;case 78:document.getElementById("n").classList.add("on");break;case 77:document.getElementById("m").classList.add("on");break;case 188:document.getElementById(",").classList.add("on");break;case 190:document.getElementById(".").classList.add("on");break;case 191:document.getElementById("/").classList.add("on");break;case 32:document.getElementById(" ").classList.add("on")}}),document.addEventListener("keyup",e=>{document.getElementById(e.key).classList.remove("on")})}]);