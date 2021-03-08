const arrayMaximalAdjacentDifference = (arr) => {
  let maximal = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff > maximal) {
      maximal = diff;
    }
  }
  return maximal;
};

const arr = [2, 4, 1, 0];
console.log(arrayMaximalAdjacentDifference(arr));
