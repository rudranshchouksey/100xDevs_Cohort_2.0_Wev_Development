/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Get the start time
    const startTime = Date.now();
    
    // Calculate sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the end time
    const endTime = Date.now();

    // Calculate the time difference in seconds
    const timeInSeconds = (endTime - startTime) / 1000;

    return timeInSeconds;
}

// Testing the function
console.log(calculateTime(100)); // Should return a very small number
console.log(calculateTime(100000)); // Takes a little longer
console.log(calculateTime(1000000000)); // Takes significantly longer

