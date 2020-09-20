window.alert("Welcome to Password Generator!");

//variable for special characters
var specialChar = [
'@','#','$','^','&','*','(',')','-','_','+','[',']','=','?','>','<','.',
]
//variable for uppercase letters
var upperLetters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
//variable for lower case letters
var lowerLetters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
//variable for numbers 
var numberChar = [
  '1','2','3','4','5','6','7','8','9'
];


// Get references to the #generate element

window.alert("Welcome to Password Generator!");

function passWordQuestions(){
  var length = parseInt(
    prompt("How Many Characters Would You Like In Your Password? Choose Between 8 and 128")
  )

  if(length<8){
    alert("Password must be at least 8 characters")
  }
//add prompts for password questions
//use special characters
//use uppercase letters
//use lowercase letters
//use numbers
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function useSpecialChar(){}

function useCapChar(){}

function useLowChar(){}

function useNumbers(){}

function generatePassword(){}

function writePassword(){}

//add password to textbox

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
