window.alert("Welcome to Password Generator!");

//user prompt input variables

//special characters array
specialChar = [
'@','#','$','^','&','*','(',')','-','_','+','[',']','=','?','>','<','.',
]
// uppercase letters array
upperLetters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
// lower case letters array
lowerLetters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
//numbers 
numberChar = [
  '1','2','3','4','5','6','7','8','9'
];

var length;
var useNumbers;
var useUpperLetters;
var useLowerLetters;
var useSpecialChars;

function generatePassword() {
  //prompts for password requirements
  length= parseInt(prompt("How long would you like your password? Must be between 8 and 128 characters"));
    if (length < 8 || length > 128 ) {
      alert("You must choose between 8 and 128 characters");
    }

    else if (length > 8 || length < 129 ) {
      useSpecialChars =confirm ("Do you want special characters?");

      useNumbers = confirm("Do you want numbers?");

      useUpperLetters = confirm("Do you want Uppercase letters?");

      useLowerLetters = confirm("Do you want lowercase letters?");
    }
    

    

}
//Welcome window 

//Password Prompts


//add prompts for password questions
//use special characters



//combine all functions

//combine functions for numbers, upper, and lower

//combine functions for 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//add password to textbox

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
