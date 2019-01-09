document.addEventListener('keydown', (key) => {
  console.log(key.keyCode);
  switch (key.keyCode) {
    case 192:
      // `
      console.log(192);
      break;
    case 49:
      // 1
      document.getElementById('1').classList.add('on');
      break;
    case 50:
      // 2
      break;
    case 51:
      // 3
      break;
    case 52:
      // 4
      break;
    case 53:
      // 5
      break;
    case 54:
      // 6
      break;
    case 55:
      // 7
      break;
    case 56:
      // 8
      break;
    case 57:
      // 9
      break;
    case 48:
      // 0
      break;
    case 189:
      //-
      break;
    case 187:
    // =
      break;
    case 8:
      // delete
      break;
    case 9:
      // tab
      break;
    case 81:
      // q
      break;
    case 87:
    // w
      break;
    case 69:
      // e
      break;
    case 82:
      // r
      break;
    case 84:
      // t
      break;
    case 89:
      // y
      break;
    case 85:
      // u
      break;
    case 73:
      // i
      break;
    case 79:
      // o
      break;
    case 80:
      // p
      break;
    case 219:
      // [
      break;
    case 221:
      // ]
      break;
    case 20:
      // caps lock
      break;
    case 65:
      // a
      break;
    case 83:
      // s
      break;
    case 68:
      // d
      break;
    case 70:
      // f
      break;
    case 71:
      // g
      break;
    case 72:
      // h
      break;
    case 74:
      // j
      break;
    case 75:
      // k
      break;
    case 76:
      // l
      break;
    case 186:
    // ;
      break;
    case 222:
    // '
      break;
    case 13:
    // return
      break;
    case 16:
    // shift
      break;
    case 90:
    // z
      break;
    case 88:
    // x
      break;
    case 67:
    // c
      break;
    case 86:
    // v
      break;
    case 66:
    // b
      break;
    case 78:
    // n
      break;
    case 77:
    // m
      break;
    case 188:
    // ,
      break;
    case 190:
    // .
      break;
    case 191:
    //  /
      break;
    case 32:
    // space
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', (e) => {
  document.getElementById(e.key).classList.remove('on');
});
