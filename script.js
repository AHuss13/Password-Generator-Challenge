// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //prompt for password criteria
  //choose 8-12 characters

  //check for uppercase choice
  //check for lowercase choice
  //check for numeric choice
  //check for specials choice

  //display password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
