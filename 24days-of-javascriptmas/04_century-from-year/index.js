const centuryFromYear = (year) => {
  if (typeof year !== 'number') {
    throw new Error('year must be integer');
  }
  if (year <= 0) {
    throw new Error('year must bigger than 0');
  }
  const hasDecimal = year % 100 > 0;
  const integer = Math.floor(year / 100);
  if (hasDecimal) {
    return integer + 1;
  }
  return integer;
};

console.log(centuryFromYear(1));
