
1.用/* eslint-disable-next-line */

function isPrime(n) {
  if (n === 1) return false; // edge case
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false; // 除了 1 和該數自身以外，若能被其他自然數整除，則非質數
  }
  return true;
}

function solve(line) {
  for (let i = 1; i < line.length; i += 1) {
    console.log(isPrime(Number(line[i])) ? 'Prime' : 'Composite');
    // 三元運算子：若 isPrime() return true，印出 'Prime'，否則印出 'Composite'

## hw1：好多星星

## hw2：水仙花數

## hw3：判斷質數

## hw4：判斷迴文

## hw5：聯誼順序比大小
