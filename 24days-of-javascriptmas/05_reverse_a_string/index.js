const reverseAString = (str) => {
  console.log(str);
  let alphaArr = str.split('');
  alphaArr = alphaArr.reverse();
  return alphaArr.join('');
};

console.log(reverseAString('hello'));
