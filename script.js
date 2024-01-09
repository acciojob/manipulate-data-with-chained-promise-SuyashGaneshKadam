const input = [1, 2, 3, 4];

function promiseGenerator() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input);
    }, 3000); 
  });
}

promiseGenerator()

// Chain promises instead of nesting
.then(arr => {
  const filtered = arr.filter(num => num % 2 === 0);
  document.getElementById("output").textContent = JSON.stringify(filtered);
  return filtered;
})

.then(arr => {
  const multiplied = arr.map(num => num * 2);
  document.getElementById("output").textContent = JSON.stringify(multiplied);
  return multiplied;
});