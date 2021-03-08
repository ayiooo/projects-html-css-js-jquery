const s = 'abcde';

const countVowelConsonant = (s) => {
  const vowelValue = 1;
  const notVowelValue = 2;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const stringArray = s.split('');
  let total = stringArray.reduce((prevVal, str) => {
    // ! "a" in vowels 判断的是 key。我们这里判断的是值。使用 includes
    // console.log("a" in vowels, vowels.includes("a"))
    if (vowels.includes(str)) {
      return prevVal + vowelValue;
    } else {
      return prevVal + notVowelValue;
    }
  }, 0);
  return total;
};

console.log(countVowelConsonant(s));
