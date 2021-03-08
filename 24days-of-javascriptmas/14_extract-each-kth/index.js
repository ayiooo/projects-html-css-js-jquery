const extractEachKth = (arr, k) => {
  return arr.filter((item, index) => (index + 1) % k !== 0)
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(extractEachKth(arr, 3));
