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
  for (let i = 1; i <= 32; i++) { 
    crackedText += "Ключ " + i + ": " + caesarCipher(text, -i) + "\n";
  }
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