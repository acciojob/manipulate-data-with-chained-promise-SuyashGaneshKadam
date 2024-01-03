//your JS code here. If required.
const input = [1, 2, 3, 4];

function promiseGenerator() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input);
    }, 3000);
  });
}

promiseGenerator()
  .then(arr => {
    return new Promise(resolve => {
      setTimeout(() => {
        const filtered = arr.filter(num => num % 2 === 0);
        document.getElementById("output").textContent = JSON.stringify(filtered);
        resolve(filtered);  
      }, 1000);
    });
  })
  .then(arr => {
    return new Promise(resolve => {
      setTimeout(() => {
        const multiplied = arr.map(num => num * 2);
        document.getElementById("output").textContent = JSON.stringify(multiplied);
        resolve(multiplied);
      }, 2000);
    });
  });