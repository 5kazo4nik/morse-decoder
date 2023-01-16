const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let indexCounter = 0;
  let counter = 0;
  const morseArr = [];
  const arrExp = expr.match(/.{1,2}/g);

  arrExp.forEach((el, index, arr) => {
    if (counter % 10 === 0 && counter !== 0) {
      indexCounter += 1;
    }
    if (el === '10') {
      morseArr[indexCounter] = (morseArr[indexCounter] || '') + '.';
    }
    if (el === '11') {
      morseArr[indexCounter] = (morseArr[indexCounter] || '') + '-';
    }
    if (el === '**' && arr[index + 1] !== '**') {
      morseArr[indexCounter] = (morseArr[indexCounter] || '') + ' ';
    }
    counter += 2;
  });

  return morseArr
    .map((el) => {
      let letter = ' ';
      for (const key of Object.keys(MORSE_TABLE)) {
        if (el === key) {
          letter = MORSE_TABLE[key];
        }
      }
      return letter;
    })
    .join('');
}

module.exports = {
  decode,
};
