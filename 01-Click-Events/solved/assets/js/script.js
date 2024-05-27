// var passwordBtnEl = $('#password-btn');
// var passwordDisplayEl = $('#password-display');

// // Returns a random character that includes alphanumeric and special character values
// function getPasswordCharacter() {
//   return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
// }

// // Returns a string of concatenated characters of length num
// function passwordGenerator(num) {
//   var password = '';
//   for (var i = 0; i < num; i++) {
//     password += getPasswordCharacter();
//   }
//   return password;
// }

// passwordBtnEl.on('dblclick', function () {
//   var newPassword = passwordGenerator(15);
//   passwordDisplayEl.textContent=newPassword;
// });



var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Use single click event instead of double click
passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword); // Use text() instead of textContent
});
