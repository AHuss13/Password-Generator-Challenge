// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword {
  //---prompt for password criteria---
  //---choose 8-12 characters---
  
  //---check for uppercase choice---
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //---check for lowercase choice---
  lowercase = "abcdefghijklmnopqrstuvwxyz"
  //---check for numeric choice---
  numberChoice = "0123456789"
  //---check for specials choice---
  specialChar = "!@#$%^&*()_+-=[]\{}|;':,./<>?"
  //---generate password---

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,generatePassword);
