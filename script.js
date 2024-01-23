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
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters.")
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Please input a valid length.");
    return;
  };
  
  //---check for uppercase choice---
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var addUpper= confirm("If you would like to include uppercase letters, choose OK");
  
  //---check for lowercase choice---
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var addLower = confirm("If you would like to include lowercase letters, choose OK");
  
  //---check for numeric choice---
  var numberChoice = "0123456789"
  var addNumber = confirm("If you would like to include numbers, choose OK");
  
  //---check for specials choice---
  var specialChar = "!@#$%^&*()_+-=[]\{}|;':,./<>?"
  var addSpecial = confirm("If you would like to include special characters, choose OK");


  //---generate password---
  var possibleChars = "";
  var newPassword = "";
  if (addUpper) {possibleChars += upperCase};
  if (addLower) {possibleChars += lowerCase};
  if (addNumber) {possibleChars += numberChoice};
  if (addSpecial) {possibleChars += specialChar};
  
  for (var i = 0; i < passwordLength; i++) {
    newPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  }
  return newPassword;
  //filler to confirm results while working
  //return "You have a test result!";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
