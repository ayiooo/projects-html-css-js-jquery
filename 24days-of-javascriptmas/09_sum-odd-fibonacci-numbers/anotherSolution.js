const isOdd = (num) => {
  if (num % 2 === 0) return false;
  return true;
};

function sumOddFibonacciNums(num) {
  let sum = 0;
  let previous = 0;
  let current = 1;
  while (sum < num) {
    if (isOdd(current)) {
      sum += current;
    }
    const nextVal = current + previous;
    previous = current;
    current = nextVal;
  }
  return sum;
}
console.log(sumOddFibonacciNums(10));
