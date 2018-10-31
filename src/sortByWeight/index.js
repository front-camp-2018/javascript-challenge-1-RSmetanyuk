/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const arrSorted = arr.sort(function (a, b) {
    return eval(a.toString().split('').join('+')) - eval(b.toString().split('').join('+'));
  });
  return arrSorted;
};
