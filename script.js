const generateBtn = document.getElementById('generate');

const resultEl = document.getElementById('password');

const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomCharacter
};

generateBtn.addEventListener("click", () => {
  const lengthPrompt = window.prompt("How many characters would you like? (Must be between 8-128 characters)")
  // console.log(lengthPrompt);

  if (lengthPrompt < 8) {
    console.log("Please enter a number of 8 or higher"); 
  } 
  if (lengthPrompt > 128) {
    console.log("Please enter a number of 128 or lower"); 
  }
  else {
    const upperConfirm = window.confirm("Would you like upper-case letters?")
  // console.log(upperConfirm);

  const lowerConfirm = window.confirm("Would you like lower-case letters?")
  // console.log(lowerConfirm);

  const numberConfirm = window.confirm("Would you like numbers?")
  // console.log(numberConfirm);

  const symbolConfirm = window.confirm("Would you like special characters?")
  // console.log(symbolConfirm);

  resultEl.innerText = generatePassword(lengthPrompt, upperConfirm, lowerConfirm, numberConfirm, symbolConfirm);
  }
  });

function generatePassword(length, lower, upper, number, symbol ) {

  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol; 
  // console.log('typesCount', typesCount);
  const typesArray = [ 
    {lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  // console.log('typesArray', typesArray);

  if (typesCount === 0) {
    // console.log('Please include parameters');
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log('funcName', funcName);

      generatedPassword += randomFunctions[funcName]();
      // console.log(generatedPassword);
    });
    
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
  
}

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomCharacter () {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// console.log(getRandomCharacter());