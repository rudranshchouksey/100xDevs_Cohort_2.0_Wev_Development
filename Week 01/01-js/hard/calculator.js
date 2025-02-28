/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
      this.result = 0;
  }

  // Add a number to the result
  add(number) {
      this.result += number;
      return this; // Allows method chaining
  }

  // Subtract a number from the result
  subtract(number) {
      this.result -= number;
      return this; // Allows method chaining
  }

  // Multiply the result by a number
  multiply(number) {
      this.result *= number;
      return this; // Allows method chaining
  }

  // Divide the result by a number
  divide(number) {
      if (number === 0) {
          throw new Error("Cannot divide by zero");
      }
      this.result /= number;
      return this; // Allows method chaining
  }

  // Reset the result to 0
  clear() {
      this.result = 0;
      return this;
  }

  // Return the current value of result
  getResult() {
      return this.result;
  }

  // Calculate based on a string expression
  calculate(expression) {
      // Remove all continuous spaces
      const sanitizedExpression = expression.replace(/\s+/g, '');

      // Ensure the expression contains only valid characters (digits, operators, parentheses)
      if (/[^0-9+\-*/().]/.test(sanitizedExpression)) {
          throw new Error("Invalid characters in expression");
      }

      try {
          // Evaluate the mathematical expression using JavaScript's `eval`
          this.result = eval(sanitizedExpression); // Note: eval should be used cautiously in real-world apps.
          return this;
      } catch (error) {
          throw new Error("Invalid mathematical expression");
      }
  }
}

module.exports = Calculator;

const calc = new Calculator();

console.log(calc.add(10).subtract(5).getResult()); // Output: 5
calc.clear();
console.log(calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7').getResult()); // Output: 22
console.log(calc.calculate('10 + abc')); // Throws error: "Invalid characters in expression"