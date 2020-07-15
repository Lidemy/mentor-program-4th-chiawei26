const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(line) {
  const m = line[0];
  const arr = [];
  for (let i = 1; i <= m; i += 1) {
    arr.push(Number(line[i]));
  }

  function isPrime(n) {
    if (n === 1) {
      return false;
    }
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < m; i += 1) {
    if (isPrime(arr[i])) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
