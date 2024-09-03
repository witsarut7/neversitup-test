function findOddNumber(arr) {
  const count = {};

  arr.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  for (const [key, countValue] of Object.entries(count)) {
    if (countValue % 2 !== 0) {
      return key;
    }
  }
}

console.log(findOddNumber([7]));
console.log(findOddNumber([0]));
console.log(findOddNumber([1, 1, 2]));
console.log(findOddNumber([0, 1, 0, 1, 0]));
console.log(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
