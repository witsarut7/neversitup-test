function shufflings(str) {
  const res = new Set();
  const arr = str.split("");
  const n = arr.length;

  function generateShufflings(currentIndex) {
    if (currentIndex === n - 1) {
      res.add(arr.join(""));
      return;
    }

    for (let i = currentIndex; i < n; i++) {
      if (i !== currentIndex && arr[i] === arr[currentIndex]) {
        continue;
      }
      [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
      generateShufflings(currentIndex + 1);
      [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
    }
  }

  generateShufflings(0);
  return Array.from(res);
}

console.log(shufflings("a"));
console.log(shufflings("ab"));
console.log(shufflings("abc"));
console.log(shufflings("aabb"));
