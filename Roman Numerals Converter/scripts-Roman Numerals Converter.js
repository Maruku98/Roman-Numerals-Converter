//GET ELEMENTS FROM THE DOM
let input = document.getElementById("converter");
let resetButton = document.getElementById("reset-button");
let conversionButton = document.getElementById("conversion");
let errorIcon = document.getElementById("error-icon");
let errorMessage = document.getElementById("error-message");
let copyButton = document.getElementById("copy-icon");

//EVENT TO RESTORE ALL STYLES
resetButton.addEventListener("click", () => {
    input.value = "";
    input.placeholder = "Enter decimal number below 3,999";
    input.style.border = "2px solid #38739D";
    errorMessage.innerText = "Please enter a valid number";
    errorMessage.style.visibility = "hidden";
    errorMessage.style.color = "red";
    errorIcon.style.visibility = "hidden";
    errorIcon.style.color = "red";
    errorIcon.classList.replace("glyphicon-ok", "glyphicon-remove");
    copyButton.style.opacity = "0.5";
    copyButton.style.cursor = "no-drop";
})

//EVENT TO TRIGGER WHEN USER SUBMITS INPUT
conversionButton.addEventListener("click", () => {
    if (input.value > 3999 || /[a-z]|\W/ig.test(input.value)) { //FIRST STATEMENT INVALIDATES NUMBERS LARGERS THAN 3,999 AND LETTERS
        input.value = "";
        input.placeholder = "Invalid input!";
        input.style.border = "2px solid red";
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    }
    else {
        input.value = convertToRoman(input.value); //CALL THE FUNCTION AND CONVERT THE NUMBER
        copyButton.style.opacity = "1.0";
        copyButton.style.cursor = "pointer";
        copyButton.disabled = false;
    }
});

//EVENT TO COPY INPUT
copyButton.addEventListener("click", () => {
  errorMessage.innerText = "Copied! :)";
  errorMessage.style.color = "green";
  errorMessage.style.visibility = "visible"
  errorIcon.style.visibility = "visible";
  errorIcon.style.color = "green";
  errorIcon.classList.replace("glyphicon-remove", "glyphicon-ok");
  navigator.clipboard.writeText(input.value);
});


//Define roman numerals ENUM object
const NUMBERS = {
  1000: "M",
  900: "CM", 800: "DCCC", 700: "DCC", 600: "DC", 500: "D", 400: "CD", 300: "CCC", 200: "CC", 100: "C",
  90: "XC", 80: "LXXX", 70: "LXX", 60: "LX", 50: "L", 40: "XL", 10: "X",
  9: "IX", 8: "VIII", 7: "VII", 6: "VI", 5: "V", 4: "IV", 3: "III", 2: "II", 1: "I"
};
Object.freeze(NUMBERS);

//Define function to convert decimal numbers to roman numerals
function convertToRoman(num) {
    const numToArray = num.toString().split(""); //Split numbers in units, tens, hundreds and thousands
    const finalArray = [];
    let counter = 1;
    let exponent;
  
    for (let i = 1; i < numToArray.length + 1; i++) {  //Iterate through all numbers and transform. Example: 43 = 40, 3
      numToArray[numToArray.length - i] = numToArray[numToArray.length - i] * counter;
      if (NUMBERS.hasOwnProperty(numToArray[numToArray.length - i])) {
        finalArray.unshift(NUMBERS[numToArray[numToArray.length - i]]); //If the number is already in NUMBERS, do a lookup
      }
      else if (numToArray[numToArray.length - i] === 0) {
      }
      else {
        exponent = numToArray[numToArray.length - i] / counter; //If not, divide it by counter and put as many letters as needed
        for (let j = 0; j < exponent; j++) {                    //Example: 2,000.
          finalArray.unshift(NUMBERS[counter]);          //2,000 / 2 = 1,000. 1,000 is in NUMBERS, so add M two times
        };
      }
      counter *= 10; //Increment decimal counter after each iteration
    };
    return finalArray.join(""); //Return all array elements joined, as a string
  };