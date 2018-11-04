/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const sunNumDigits = num => {
    num.toString().split('').map(Number).reduce((accumulator, currentValue) => {
      accumulator + currentValue;
    });
  };
  
  const arrSorted = arr.sort(function (a, b) {
    return sunNumDigits(a) - sunNumDigits(b);
  });
  
  return arrSorted;
};