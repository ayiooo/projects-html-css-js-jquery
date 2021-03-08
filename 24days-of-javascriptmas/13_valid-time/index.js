// const validTime = (str) => {
//   const [hours, minutes] = str.split(':');
//   if (parseInt(hours) >= 0 && parseInt(hours) <= 23) {
//     if (parseInt(minutes) >= 0 && parseInt(minutes) <= 59) {
//       return true;
//     }
//   }
//   return false;
// };

const validTime = (str) => {
  const [hours, minutes] = str.split(':');
  if (parseInt(hours) > 23 || parseInt(hours) < 0) {
    return false;
  }
  if (parseInt(minutes) > 59 && parseInt(minutes) < 0) {
    return false;
  }
  return true;
};
const time = '13:58';
// const time = "02:76"
// const time = "25:51"
console.log(validTime(time));
