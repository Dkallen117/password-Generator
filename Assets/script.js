// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword (){

  // Sets empty variables for all character types and the overall number of characters

var minCount = 0;

var minLowCase = " ";

var minUpCase = " ";

var minNums = " ";

var minSpecial = " ";

// All the inputs and alerts for the user when selecting the criteria of their passowrd

const pLength = prompt ("Please enter the number of characters you would like to use for your password.");

if (pLength < 8 || pLength > 128){

alert("Password must be between 8 and 128 characters.");

const pLength = prompt ("Please enter the number of characters you would like to use for your password.");

}

const lowCase = confirm ("Will you include lower case letters in your password?");

const upCase = confirm ("Will you include upper case letters in your password?");

const nums = confirm ("Will you include numbers in your password?");

const specialCase = confirm ("Will you include special characters in your password?");

// Array for selecting random characters according to their categories

const charArray = {
  randomNums: function() {
    var Numbers = '1234567890'
     return Numbers[Math.floor(Math.random() * Numbers.length)]
  },

  randomLowCase: function() {
     var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
     return lowerCase[Math.floor(Math.random() * lowerCase.length)]
  },

  randomUpCase: function() {
    var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    return upperCase[Math.floor(Math.random() * upperCase.length)]
  },

  randomSpecialChar: function() {
    var specialCharacters = '!@#$%^&*(){}[]=<>/,.'
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

};

// Checks to see what the user selected, adds it the base count for all characters
// And adds the randomly selected categories of characters that the user selected

if (nums === true) {
  minNums = charArray.randomNums();
  minCount++;

}

if (lowCase === true) {
  minLowCase = charArray.randomLowCase();
  minCount++;

}

if (upCase === true) {
  minUpCase = charArray.randomUpCase();
  minCount++;

}

if (specialCase === true) {
  minSpecial = charArray.randomSpecialChar();
  minCount++;

}

// empty variable for the randomly generated password to be put into
var randomPassword = " ";

// loop genereating random characters
for (let i = 0; i < (parseInt(pLength) - minCount); i++) {
  const randomNumPicked = Math.floor(Math.random() * 4);

  randomPassword += randomNumPicked;

}

// adds randomly generated selected criteria to the password
randomPassword += minNums;
randomPassword += minLowCase;
randomPassword += minUpCase;
randomPassword += minSpecial;

// generates random password, trims white space
return randomPassword.trim();


}
