inputArray = ['abc', '', 'aaa', 'a', 'zz'];
const sortByLength = (strs) => {
  return strs.sort((str1, str2) => str1.length - str2.length);
};

console.log(sortByLength(inputArray));
