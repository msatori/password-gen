
// Get references to the #generate element

window.alert("Welcome to Password Generator!");

function passWordQuestions(){
window.prompt("How Many Characters Would You Like In Your Password? Choose Between 8 and 128");
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

function generatePassword()

//add password to textbox

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
