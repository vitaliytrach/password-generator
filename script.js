// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable to hold the length of generated password
var passwordLength = 0;

// Boolean variables for various password criterias
var includeUppercase = true;
var includeLowercase = true;
var includeNumbers = true;
var includeSpecials = true;

// Initializing all arrays
var specialChar = generateSpecialsArray();
var uppercase = generateUpperCaseArray();
var lowercase = generateLowerCaseArray();
var digits = generateNumArray();

// variable to hold all the chars that will be acceptable in password generation
var acceptedChars = [];

// Write password to the #password input
function writePassword() {

  getPasswordCriterias();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPasswordCriterias() {
  var input = prompt("Enter your desired password length\n Must be an integer between 8 and 128", "");

  if(input != null && input != "") {
    var num = parseInt(input);

    // valid input for password length
    if(num != NaN && num >= 8 && num <= 128) {
      passwordLength = num;
      setCriterias();
    } 
    // invalid input for password length
    else {
      confirm("Please enter a valid password length");
    }
  } 
}

function setCriterias() {
  if(confirm("Would you like to include lowercase letters?")) {
    acceptedChars = acceptedChars.concat(lowercase);
  } 

  if(confirm("Would you like to include uppercase letters?")) {
    acceptedChars = acceptedChars.concat(uppercase);
  } 

  if(confirm("Would you like to include numbers?")) {
    acceptedChars = acceptedChars.concat(digits);
  } 

  if(confirm("Would you like to include special characters?")) {
    acceptedChars = acceptedChars.concat(specialChar);
  } 
}

function generatePassword() {
  var result = [];

  for(var i = 0; i < passwordLength; i++) {
    result.push(acceptedChars[generateRandBetween(0, acceptedChars.length - 1)]);
  }

  acceptedChars = [];
  return result.join("");
}

// ---------------- HELPER METHODS ----------------------

// Generates a random integer between a and b
function generateRandBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

// Generates an array that only contains special characters
function generateSpecialsArray() {
  var specials = [];

  for(var i = 32; i <= 47; i++) {
    specials.push(String.fromCharCode(i));
  }
  
  for(var i = 58; i <= 64; i++) {
    specials.push(String.fromCharCode(i));  
  }
  
  for(var i = 91; i <= 96; i++) {
    specials.push(String.fromCharCode(i));  
  }
  
  for(var i = 123; i <= 126; i++) {
    specials.push(String.fromCharCode(i));  
  }

  return specials;
}

// Generates an array that only contains lowercase letters
function generateLowerCaseArray() {
  var lc = [];

  for(var i = 97; i <= 122; i++) {
    lc.push(String.fromCharCode(i));
  }

  return lc;
}

// Generates an array that only contain uppercase letters
function generateUpperCaseArray() {
  var uc = [];

  for(var i = 65; i <= 90; i++) {
    uc.push(String.fromCharCode(i));
  }

  return uc;
}

// Generates an array that only contains numbers 0-9
function generateNumArray() {
  var nums = [];

  for(var i = 0; i <= 9; i++) {
    nums.push(i);
  }

  return nums;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
