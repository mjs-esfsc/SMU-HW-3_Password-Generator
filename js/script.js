
// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  var passResult = [];
  var useArrays = 1

  // WHEN prompted for the length of the password

  var passLength = prompt("Enter password length from 8 to 128 characters");
  // THEN I choose a length of at least 8 characters and no more than 128 characters
            // getLength()
            // test1 = (parseInt(passLength));
            // test2 = (typeof parseInt(passLength))
            // if  (test2!==Number){
            //   alert("INTEGER ONLY PLEASE!")
            //   getLength()
            // }

            // function getLength() {
            //   var passLength = prompt("Enter password length from 8 to 128 characters")
            //   return passLength
            // }


  // WHEN asked for character types to include in the password
  var passCase = prompt("Use upper and lower case letters?");
  var passNums = prompt("Use numbers?");
  var passSpec = prompt("Use special characters?");
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  //TODO Add Validation logic.
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  for (var i=0;i<passLength;i++){
  passResult.push (uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)]); 
  }
  return passResult.join("");
}

// Write password to the #password input
function writePassword() {
  // WHEN the password is generated
  var password = generatePassword();
  // THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Password is " + passwordText.value)
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

