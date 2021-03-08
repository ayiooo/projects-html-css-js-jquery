const isOdd = (num) => {
  if (num % 2 === 0) return false;
  return true;
};
const sumOddFibonacciNums = (num) => {
  if (num === 1 || num === 2) return num;
  const fibonacciNums = [1, 1];
  let total = 0;
  while (total < num) {
    total = fibonacciNums.reduce((prev, cur) => {
      if (isOdd(cur)) {
        return prev + cur;
      }
      return prev;
    }, 0);
    console.log(total);
    fibonacciNums.push(
      fibonacciNums[fibonacciNums.length - 1] + fibonacciNums[fibonacciNums.length - 2]
    );
  }
  console.log(fibonacciNums);
  return total;
};

// console.log(sumOddFibonacciNums(10))
// console.log(sumOddFibonacciNums(1000))
// console.log(sumOddFibonacciNums(4000000))
