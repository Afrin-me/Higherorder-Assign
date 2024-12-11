// Use reduce() to group the categories and count how many times each category appears.
let task = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

let count = task.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(count);
let sortedCategories = Object.entries(count).sort((a, b) => b[1] - a[1]);
console.log(sortedCategories);
