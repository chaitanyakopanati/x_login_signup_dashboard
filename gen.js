// function generatePassword() {
//     // Define character sets
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const digits = '0123456789';
//     const specialChars = '@$!%*?&';
  
//     // Generate random characters for each category
//     const randomUppercase = uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
//     const randomLowercase = lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
//     const randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));
//     const randomSpecialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  
//     // Combine random characters into a single string
//     const randomChars = randomUppercase + randomLowercase + randomDigit + randomSpecialChar;
  
//     // Generate remaining random characters (if needed)
//     const remainingChars = generateRandomChars(4);
  
//     // Shuffle all characters
//     const shuffledChars = randomChars + remainingChars;
//     const shuffledPassword = shuffleString(shuffledChars);
  
//     return shuffledPassword;
//   }
  
//   // Function to generate random characters
//   function generateRandomChars(length) {
//     const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&';
//     let randomChars = '';
//     for (let i = 0; i < length; i++) {
//       randomChars += allChars.charAt(Math.floor(Math.random() * allChars.length));
//     }
//     return randomChars;
//   }
  
//   // Function to shuffle a string
//   function shuffleString(str) {
//     const array = str.split('');
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array.join('');
//   }
  
//   // Example usage
//   const newPassword = generatePassword();
//   console.log(newPassword);
  
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Password Generator Example</title>
// <style>
//   .password-icon {
//     cursor: pointer;
//   }
// </style>
// </head>
// <body>

// <!-- Input field for the password -->
// <input type="password" id="password" placeholder="Enter Password">
// <span class="password-icon" onclick="showExample()">👁️</span>

// <script>
// function validatePassword(password) {
//   // Regular expression to match the password specifications
//   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
//   return regex.test(password);
// }

// function generatePassword() {
//   const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//   const digits = '0123456789';
//   const specialChars = '@$!%*?&';

//   const randomUppercase = uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
//   const randomLowercase = lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
//   const randomDigit = digits.charAt(Math.floor(Math.random() * digits.length));
//   const randomSpecialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));

//   const randomChars = randomUppercase + randomLowercase + randomDigit + randomSpecialChar;

//   const remainingChars = generateRandomChars(4);

//   const shuffledChars = randomChars + remainingChars;
//   const shuffledPassword = shuffleString(shuffledChars);

//   return shuffledPassword;
// }

// function generateRandomChars(length) {
//   const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&';
//   let randomChars = '';
//   for (let i = 0; i < length; i++) {
//     randomChars += allChars.charAt(Math.floor(Math.random() * allChars.length));
//   }
//   return randomChars;
// }

// function shuffleString(str) {
//   const array = str.split('');
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array.join('');
// }

// function showExample() {
//   const passwordInput = document.getElementById('password');
//   const examplePassword = generatePassword();
//   passwordInput.value = examplePassword;
//   passwordInput.type = 'text'; // To temporarily change the input type to text to display the password
//   setTimeout(function() {
//     passwordInput.type = 'password'; // To change it back to password type after a short delay
//   }, 2000);
// }
// </script>

// </body>
// </html>
