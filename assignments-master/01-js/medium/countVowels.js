/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Define the set of vowels (both lowercase and uppercase)
  const vowels = 'aeiouAEIOU';
  let count = 0;

  // Loop through the string and check for vowels
  for (let char of str) {
      if (vowels.includes(char)) {
          count++;
      }
  }

  return count;
}

module.exports = countVowels;

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("xyz")); // Output: 0