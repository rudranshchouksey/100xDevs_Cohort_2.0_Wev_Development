/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800001, price: 5, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800002, price: 20, category: 'Clothing', itemName: 'Shirt' }
];


function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to hold the total spent by category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If category exists in the object, add the price, otherwise set it
      if (categoryTotals[category]) {
          categoryTotals[category] += price;
      } else {
          categoryTotals[category] = price;
      }
  });

  // Convert the category totals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
      category: category,
      totalSpent: categoryTotals[category]
  }));

  return result;
}

console.log(calculateTotalSpentByCategory(transactions));
// Output: [{ category: 'Food', totalSpent: 15 }, { category: 'Clothing', totalSpent: 20 }]


module.exports = calculateTotalSpentByCategory;
