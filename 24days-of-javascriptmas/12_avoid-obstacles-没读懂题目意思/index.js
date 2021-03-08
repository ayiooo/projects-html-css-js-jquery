function avoidObstacles(nums) {
  // 这步是找到最大的数
  const largestNum = nums.sort((a, b) => a - b)[nums.length - 1];

  for (let i = 1; i <= largestNum + 1; i++) {
    console.log(i);
    // 数组中的每一项 对 i 取余数 都不为 0 就返回。
    if (nums.every((value) => value % i !== 0)) {
      return i;
    }
  }
}
const nums = [5, 3, 6, 9, 7];
console.log(avoidObstacles(nums));
