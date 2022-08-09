const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**': ' ',
};

function decode(expr) {
    let strArr = [];
for (let i = 0; i < expr.length; i+=10) {
    strArr.push(expr.slice(i, i+10));
}
let longArr = [];
for (let i = 0; i < strArr.length; i++) {
    let subStr = strArr[i].substring(strArr[i].indexOf(1));
    subStr = subStr.replaceAll('11', '-');
    subStr = subStr.replaceAll('10', '.');
    subStr = subStr.replaceAll('**********', ' ');
    longArr.push(subStr);
}

for (const [key, value] of Object.entries(MORSE_TABLE)) {
    for (let i = 0; i < longArr.length; i++) {
        if (longArr[i] == `${key}`) {
            longArr[i] = `${value}`;
        }
    }
}

longArr = longArr.join('');

return longArr;
}

module.exports = {
    decode
}