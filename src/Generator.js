import React, { useState } from 'react';

const Generator = (props) => {
  const [numChars, setNumChars] = useState(8);
  const [pass, setPass] = useState([]);
  const upper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specials = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '+',
    '-',
    '.',
    '`',
    '~',
    '|',
    '<',
    '>',
    '=',
    '-',
    '_',
  ];
  const allChars = [...upper, ...lower, ...nums, ...specials];
  const generateChar = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const generatePass = () => {
    const newPassArray = [];
    newPassArray.push(generateChar(upper));
    newPassArray.push(generateChar(lower));
    newPassArray.push(generateChar(nums));
    newPassArray.push(generateChar(specials));
    while (newPassArray.length < numChars) {
      newPassArray.push(generateChar(allChars));
    }
    return shuffle(newPassArray).join('');
  };

  const updatePass = () => {
    return setPass(generatePass());
  };
  return (
    <div>
      <h1>I'm a password generator component</h1>
      <label htmlFor="charsInput">Password length</label>
      <input
        id="charsInput"
        type="number"
        min="8"
        max="20"
        value={numChars}
        onChange={(event) => setNumChars(event.target.value)}
      />
      <button onClick={updatePass}>Generate</button>
      <div>{pass}</div>
    </div>
  );
};

export default Generator;
