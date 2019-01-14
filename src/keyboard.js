import createAudio from './music';

let start = true;

const receiveElement = (number) => {
  const audioString = `audioElement-${number}`;
  document.getElementById(audioString).play();
  createAudio(audioString);
};

document.addEventListener('keydown', (key) => {
  if (start) {
    const introText = document.getElementById('instructions');
    introText.parentNode.removeChild(introText);
    start = false;
  }

  switch (key.keyCode) {
    case 192:
      // `
      document.getElementById('`').classList.add('on');
      break;
    case 49:
      document.getElementById('1').classList.add('on');
      receiveElement(1);
      break;
    case 50:
      // 2
      document.getElementById('2').classList.add('on');
      receiveElement(2);
      break;
    case 51:
      // 3
      document.getElementById('3').classList.add('on');
      receiveElement(3);
      break;
    case 52:
      // 4
      document.getElementById('4').classList.add('on');
      receiveElement(4);
      break;
    case 53:
      // 5
      document.getElementById('5').classList.add('on');
      receiveElement(5);
      break;
    case 54:
      // 6
      document.getElementById('6').classList.add('on');
      receiveElement(6);
      break;
    case 55:
      // 7
      document.getElementById('7').classList.add('on');
      receiveElement(7);
      break;
    case 56:
      // 8
      document.getElementById('8').classList.add('on');
      receiveElement(8);
      break;
    case 57:
      // 9
      document.getElementById('9').classList.add('on');
      receiveElement(9);
      break;
    case 48:
      // 0
      document.getElementById('0').classList.add('on');
      receiveElement(10);
      break;
    case 189:
      //-
      document.getElementById('-').classList.add('on');
      receiveElement(11);
      break;
    case 187:
    // =
      document.getElementById('=').classList.add('on');
      receiveElement(12);
      break;
    case 8:
      // delete
      document.getElementById('Backspace').classList.add('on');
      receiveElement(13);
      break;
    case 9:
      // tab
      key.preventDefault();
      break;
    case 81:
      // q
      document.getElementById('q').classList.add('on');
      receiveElement(14);
      break;
    case 87:
      // w
      document.getElementById('w').classList.add('on');
      receiveElement(15);
      break;
    case 69:
      // e
      document.getElementById('e').classList.add('on');
      receiveElement(16);
      break;
    case 82:
      // r
      document.getElementById('r').classList.add('on');
      receiveElement(17);
      break;
    case 84:
      // t
      document.getElementById('t').classList.add('on');
      receiveElement(18);
      break;
    case 89:
      // y
      document.getElementById('y').classList.add('on');
      receiveElement(19);
      break;
    case 85:
      // u
      document.getElementById('u').classList.add('on');
      receiveElement(20);
      break;
    case 73:
      // i
      document.getElementById('i').classList.add('on');
      receiveElement(21);
      break;
    case 79:
      // o
      document.getElementById('o').classList.add('on');
      receiveElement(22);
      break;
    case 80:
      // p
      document.getElementById('p').classList.add('on');
      receiveElement(23);
      break;
    case 219:
      // [
      document.getElementById('[').classList.add('on');
      receiveElement(24);
      break;
    case 221:
      // ]
      document.getElementById(']').classList.add('on');
      receiveElement(25);
      break;
    case 20:
      // caps lock
      key.preventDefault();
      document.getElementById('\\').classList.add('on');
      document.getElementById('Capslock').classList.add('on');
      receiveElement(26);
      break;
    case 65:
      // a
      document.getElementById('a').classList.add('on');
      receiveElement(27);
      break;
    case 83:
      // s
      document.getElementById('s').classList.add('on');
      receiveElement(28);
      break;
    case 68:
      // d
      document.getElementById('d').classList.add('on');
      receiveElement(29);
      break;
    case 70:
      // f
      document.getElementById('f').classList.add('on');
      receiveElement(30);
      break;
    case 71:
      // g
      document.getElementById('g').classList.add('on');
      receiveElement(31);
      break;
    case 72:
      // h
      document.getElementById('h').classList.add('on');
      receiveElement(32);
      break;
    case 74:
      // j
      document.getElementById('j').classList.add('on');
      receiveElement(33);
      break;
    case 75:
      // k
      document.getElementById('k').classList.add('on');
      receiveElement(34);
      break;
    case 76:
      // l
      document.getElementById('l').classList.add('on');
      receiveElement(35);
      break;
    case 186:
    // ;
      document.getElementById(';').classList.add('on');
      receiveElement(36);
      break;
    case 222:
    // '
      document.getElementById('\'').classList.add('on');
      receiveElement(37);
      break;
    case 13:
    // return
      key.preventDefault();
      document.getElementById('Enter').classList.add('on');
      receiveElement(38);
      break;
    case 16:
    // shift
      key.preventDefault();
      document.getElementById('Shift-1').classList.add('on');
      receiveElement(39);
      break;
    case 90:
    // z
      document.getElementById('z').classList.add('on');
      receiveElement(40);
      break;
    case 88:
    // x
      document.getElementById('x').classList.add('on');
      receiveElement(41);
      break;
    case 67:
    // c
      document.getElementById('c').classList.add('on');
      receiveElement(42);
      break;
    case 86:
    // v
      document.getElementById('v').classList.add('on');
      receiveElement(43);
      break;
    case 66:
    // b
      document.getElementById('b').classList.add('on');
      receiveElement(44);
      break;
    case 78:
    // n
      document.getElementById('n').classList.add('on');
      receiveElement(45);
      break;
    case 77:
    // m
      document.getElementById('m').classList.add('on');
      receiveElement(46);
      break;
    case 188:
    // ,
      document.getElementById(',').classList.add('on');
      receiveElement(47);
      break;
    case 190:
    // .
      document.getElementById('.').classList.add('on');
      receiveElement(48);
      break;
    case 191:
    //  /
      document.getElementById('/').classList.add('on');
      receiveElement(49);
      break;
    case 32:
    // space
      key.preventDefault();
      document.getElementById(' ').classList.add('on');
      receiveElement(50);
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', (e) => {
  // console.log(e);
  document.getElementById(e.key).classList.remove('on');
});
