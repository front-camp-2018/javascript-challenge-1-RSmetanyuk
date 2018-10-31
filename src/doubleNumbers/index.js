/* eslint-disable-next-line */
export const doubleNum = num => {
  const str = num.toString();
  const length = str.length;
  const num1 = str.slice(0, length / 2);
  const num2 = str.slice(length / 2);

  if (num1 === num2) {
    return num;
  } else {
    return num * 2;
  }
};