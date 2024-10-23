function encrypt() {
  let text = document.getElementById("text").value;
  let key = parseInt(document.getElementById("key").value);
  document.getElementById("result").value = caesarCipher(text, key);
}

function decrypt() {
  let text = document.getElementById("text").value;
  let key = parseInt(document.getElementById("key").value);
  document.getElementById("result").value = caesarCipher(text, -key);
}

function generateKey() {
  let key = Math.floor(Math.random() * 32) + 1;
  document.getElementById("key").value = key;
  return key;
}

function crack() {
  let text = document.getElementById("text").value;
  let crackedText = "";
  let letterCount = {};

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char >= 'а' && char <= 'я') {
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
  }

  let sortedLetters = Object.entries(letterCount).sort((a, b) => b[1] - a[1]);

  let top5Letters = sortedLetters.slice(0, 5).map(item => item[0]);

  const frequency = {
    'о': 10.97, 'е': 8.45, 'а': 8.01, 'и': 7.34, 'н': 6.70,
    'т': 6.29, 'с': 5.99, 'р': 5.73, 'в': 4.54, 'л': 4.29,
    'к': 3.49, 'м': 3.21, 'д': 3.14, 'п': 2.81, 'у': 2.62,
    'я': 2.01, 'ь': 1.74, 'г': 1.66, 'з': 1.61, 'й': 1.30,
    'ч': 1.25, 'х': 0.87, 'ж': 0.67, 'ш': 0.59, 'ц': 0.44,
    'щ': 0.25, 'ъ': 0.19, 'э': 0.16, 'ю': 0.15, 'ф': 0.11
  };

  let sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  let top5FreqLetters = sortedFrequency.slice(0, 5).map(item => item[0]); 

  let possibleShifts = [];
  for (let i = 0; i < top5Letters.length; i++) {
    for (let j = 0; j < top5FreqLetters.length; j++) {
      let shift = (top5Letters[i].charCodeAt(0) - top5FreqLetters[j].charCodeAt(0) + 32) % 32;
      possibleShifts.push(shift);
    }
  }

  let mostFrequentShift = 0;
  let shiftCount = {};
  possibleShifts.forEach(shift => {
    if (shiftCount[shift]) {
      shiftCount[shift]++;
    } else {
      shiftCount[shift] = 1;
    }
  });

  mostFrequentShift = Object.entries(shiftCount).reduce((a, b) => a[1] > b[1] ? a : b)[0];

  crackedText += "Предполагаемый ключ: " + mostFrequentShift + "\n";
  crackedText += "Расшифрованный текст: " + caesarCipher(text, -mostFrequentShift);

  document.getElementById("result").value = crackedText;
}

function caesarCipher(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 1040 && charCode <= 1071) { 
      charCode = ((charCode - 1040 + shift + 32) % 32) + 1040; 
    } else if (charCode >= 1072 && charCode <= 1103) { 
      charCode = ((charCode - 1072 + shift + 32) % 32) + 1072; 
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
