function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (
      (str.length === 2 && /[:;][)D]/.test(str)) ||
      (str.length === 3 && /[:;][~-][)D]/.test(str))
    ) {
      count++;
    }
  }
  return count;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
