/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    // Return undefined if the array is empty
    if (numbers.length === 0) {
        return undefined;
    }

    // Initialize the largest number to the first element
    let largest = numbers[0];

    // Iterate through the array
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

module.exports = findLargestElement;

console.log(findLargestElement([3, 7, 2, 9, 1])); // Output: 9
console.log(findLargestElement([-3, -7, -2, -9, -1])); // Output: -1
console.log(findLargestElement([])); // Output: undefined
