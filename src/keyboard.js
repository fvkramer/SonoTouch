import createAudio from './music';

document.addEventListener('keydown', (key) => {
  console.log(key.keyCode);
  debugger;
  switch (key.keyCode) {
    case 192:
      // `
      document.getElementById('`').classList.add('on');
      break;
    case 49:
      // 1
      console.log('in 1');
      document.getElementById('1').classList.add('on');
      document.getElementById('audioElement-1').play();
      createAudio('audioElement-1');
      // setTimeout(() => document.getElementById('audioElement-1').play(), 2000);
      break;
    case 50:
      // 2
      document.getElementById('2').classList.add('on');
      break;
    case 51:
      // 3
      document.getElementById('3').classList.add('on');
      break;
    case 52:
      // 4
      document.getElementById('4').classList.add('on');
      break;
    case 53:
      // 5
      document.getElementById('5').classList.add('on');
      break;
    case 54:
      // 6
      document.getElementById('6').classList.add('on');
      break;
    case 55:
      // 7
      document.getElementById('7').classList.add('on');
      break;
    case 56:
      // 8
      document.getElementById('8').classList.add('on');
      break;
    case 57:
      // 9
      document.getElementById('9').classList.add('on');
      break;
    case 48:
      // 0
      document.getElementById('0').classList.add('on');
      break;
    case 189:
      //-
      document.getElementById('-').classList.add('on');
      break;
    case 187:
    // =
      document.getElementById('=').classList.add('on');
      break;
    case 8:
      // delete
      document.getElementById('Backspace').classList.add('on');
      break;
    case 9:
      // tab
      break;
    case 81:
      // q
      document.getElementById('q').classList.add('on');
      break;
    case 87:
      // w
      document.getElementById('w').classList.add('on');
      break;
    case 69:
      // e
      document.getElementById('e').classList.add('on');
      break;
    case 82:
      // r
      document.getElementById('r').classList.add('on');
      break;
    case 84:
      // t
      document.getElementById('t').classList.add('on');
      break;
    case 89:
      // y
      document.getElementById('y').classList.add('on');
      break;
    case 85:
      // u
      document.getElementById('u').classList.add('on');
      break;
    case 73:
      // i
      document.getElementById('i').classList.add('on');
      break;
    case 79:
      // o
      document.getElementById('o').classList.add('on');
      break;
    case 80:
      // p
      document.getElementById('p').classList.add('on');
      break;
    case 219:
      // [
      document.getElementById('[').classList.add('on');
      break;
    case 221:
      // ]
      document.getElementById(']').classList.add('on');
      break;
    case 20:
      // caps lock
      document.getElementById('\\').classList.add('on');
      document.getElementById('Capslock').classList.add('on');
      break;
    case 65:
      // a
      document.getElementById('a').classList.add('on');
      break;
    case 83:
      // s
      document.getElementById('s').classList.add('on');
      break;
    case 68:
      // d
      document.getElementById('d').classList.add('on');
      break;
    case 70:
      // f
      document.getElementById('f').classList.add('on');
      break;
    case 71:
      // g
      document.getElementById('g').classList.add('on');
      break;
    case 72:
      // h
      document.getElementById('h').classList.add('on');
      break;
    case 74:
      // j
      document.getElementById('j').classList.add('on');
      break;
    case 75:
      // k
      document.getElementById('k').classList.add('on');
      break;
    case 76:
      // l
      document.getElementById('l').classList.add('on');
      break;
    case 186:
    // ;
      document.getElementById(';').classList.add('on');
      break;
    case 222:
    // '
      document.getElementById('\'').classList.add('on');
      break;
    case 13:
    // return
      document.getElementById('Enter').classList.add('on');
      break;
    case 16:
    // shift
      document.getElementById('Shift-1').classList.add('on');
      break;
    case 90:
    // z
      document.getElementById('z').classList.add('on');
      break;
    case 88:
    // x
      document.getElementById('x').classList.add('on');
      break;
    case 67:
    // c
      document.getElementById('c').classList.add('on');
      break;
    case 86:
    // v
      document.getElementById('v').classList.add('on');
      break;
    case 66:
    // b
      document.getElementById('b').classList.add('on');
      break;
    case 78:
    // n
      document.getElementById('n').classList.add('on');
      break;
    case 77:
    // m
      document.getElementById('m').classList.add('on');
      break;
    case 188:
    // ,
      document.getElementById(',').classList.add('on');
      break;
    case 190:
    // .
      document.getElementById('.').classList.add('on');
      break;
    case 191:
    //  /
      document.getElementById('/').classList.add('on');
      break;
    case 32:
    // space
      document.getElementById(' ').classList.add('on');
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', (e) => {
  // console.log(e);
  document.getElementById(e.key).classList.remove('on');
});
