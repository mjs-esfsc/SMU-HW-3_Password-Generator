
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
  var passCase = prompt("Use upper and lower case letters? y or n");
  var passNums = prompt("Use numbers? y or n");
  var passSpec = prompt("Use special characters? y or n");
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  //TODO Add Validation logic.
  //Testing array selector logic
  if (passCase === "y") {
    useArrays++
  }
  if (passNums === "y") {
    useArrays++
  }
  if (passSpec === "y") {
    useArrays++
  }
  console.log(passCase);
  console.log(passNums);
  console.log(passSpec);
  console.log(useArrays);
  var arrayUsed = "";
  console.log("use array " + arrayUsed);
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  for (var i = 0; i < passLength; i++) {
    arrayUsed = ([Math.floor(Math.random() * useArrays)]);
    console.log((typeof parseInt(arrayUsed)));
    console.log(arrayUsed);
    if (arrayUsed == 0) {
      passResult.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
    }
    if (arrayUsed == 1) {
      passResult.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
    }
    if (arrayUsed == 2) {
      passResult.push(uppercaseArray[Math.floor(Math.random() * numArray.length)]);
    }
    if (arrayUsed == 3) {
      passResult.push(uppercaseArray[Math.floor(Math.random() * charArray.length)]);
    }
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

