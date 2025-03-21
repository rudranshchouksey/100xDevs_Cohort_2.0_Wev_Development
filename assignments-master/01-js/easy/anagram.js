/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // Clean up both strings: remove spaces and convert to lowercase
  let cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  let cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // If the lengths of cleaned strings don't match, they're not anagrams
  if (cleanStr1.length !== cleanStr2.length) {
      return false;
  }

  // Sort both strings and compare
  let sortedStr1 = cleanStr1.split('').sort().join('');
  let sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

console.log(isAnagram("spar", "rasp")); // true
console.log(isAnagram("hello", "world")); // false