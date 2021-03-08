const adjacentElementsProduct = (inputArray) => {
  let largestProduct = inputArray[0] * inputArray[1];

  // 循环遍历，这里从第一项开始遍历，我们只需要遍历到倒数第二项即可
  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
};

const inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));
