const chunkyMonkey = (values, size) => {
  const length = values.length;
  const resultArr = [];
  if (length) {
    let start = 0;
    while (start < length) {
      resultArr.push(values.slice(start, start + size));
      start += size;
    }
  }

  return resultArr;
};

console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 2));
