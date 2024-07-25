// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  //---prompt for password criteria---
  //---choose 8-12 characters---
  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 characters."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input a valid length.");
    return;
  }

  //---check for uppercase choice---
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var addUpper = confirm(
    "If you would like to include uppercase letters, choose OK"
  );

  //---check for lowercase choice---
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var addLower = confirm(
    "If you would like to include lowercase letters, choose OK"
  );

  //---check for numeric choice---
  var numberChoice = "0123456789";
  var addNumber = confirm("If you would like to include numbers, choose OK");

  //---check for specials choice---
  var specialChar = " \"!@#$%^&*()_+-=[\\]{}|;':,./<>?";
  var addSpecial = confirm(
    "If you would like to include special characters, choose OK"
  );

  //---generate password---
  var possibleChars = "";
  var newPassword = "";
  if (addUpper) {
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)]; //randomly select a character from the uppercase string
    possibleChars += upperCase;
  }

  if (addLower) {
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]; //randomly select a character from the lowercase string
    possibleChars += lowerCase;
  }

  if (addNumber) {
    newPassword +=
      numberChoice[Math.floor(Math.random() * numberChoice.length)]; //randomly select a character from the number string
    possibleChars += numberChoice;
  }

  if (addSpecial) {
    newPassword += specialChar[Math.floor(Math.random() * specialChar.length)]; //randomly select a character from the special character string
    possibleChars += specialChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    newPassword +=
      possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  //Mix up characters to avoid the order of character confirmations
  newPassword = newPassword
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
