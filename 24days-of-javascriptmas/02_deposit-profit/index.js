const depositProfit = (deposit, rate, threshold) => {
  let year = 0;
  while (deposit < threshold) {
    deposit = deposit + (deposit * rate) / 100;
    year += 1;
  }
  return year
};
