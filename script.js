//// Assignment Code
var generateBtn = document.querySelector("#generate");

// create variables from arrays of possible alpha-numeric possibilities ...
var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","<",">","?",".","/","|"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// initialize variables ...
var charCount;
var masterArr;

// confirm user input is being accurately collected ...
// console.log(charCount);
// console.log(confirmSpecChar);
// console.log(confirmNumChar);
// console.log(confirmLowCaseChar);
// console.log(confirmUpCaseChar);

// test code for logging random character ...
// var random = Math.floor(Math.random() * specialChar.length);
// console.log(specialChar[random]);

// test logging array addition ...
// console.log(specialChar + numbers);

function generatePassword() {
  var returnPassword = "";
  for (var i = 0; i < charCount; i++) {
    var random = Math.floor(Math.random() * masterArr.length);
    returnPassword = returnPassword + masterArr[random];
  }
  return returnPassword;
}

//// Write password to the #password input
function writePassword() {
  // create variables to collect user alpha-numeric password parameters ...
  charCount = prompt("How many characters would you like your password to contain?");
  var confirmSpecChar = confirm("Click OK to confirm including special characters.");
  var confirmNumChar = confirm("Click OK to confirm including number characters.");
  var confirmLowCaseChar = confirm("Click OK to confirm including lower case characters.");
  var confirmUpCaseChar = confirm("Click OK to confirm including upper case characters.");
  masterArr = []

  // test logging pushed user selected parameter ...
  if (confirmSpecChar) {
    // masterArr.push(specialChar);
    masterArr = masterArr.concat(specialChar)
    console.log(masterArr);
  }
  
  if (confirmNumChar) {
    masterArr = masterArr.concat(numbers)
    console.log(masterArr);
  }

  if (confirmLowCaseChar) {
    masterArr = masterArr.concat(lowerCase)
    console.log(masterArr);
  }

  if (confirmUpCaseChar) {
    masterArr = masterArr.concat(upperCase)
    console.log(masterArr);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//// add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// when button is pushed ...
// run a loop equal to 'charCount',
// that randomly picks an alpha-numeric character,
// from a master array generated with parameters created from user input,
// and prints result to card body