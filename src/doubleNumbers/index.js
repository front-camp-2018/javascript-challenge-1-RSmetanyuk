/* eslint-disable-next-line */
export const doubleNum = num => {
  const numArr = num.toString().split('');
  const length = numArr.length;
  let double = false;
  
  if (!(length % 2)) {
    double = true;
    for (let i = 0; i < length / 2; i++) {
      if (numArr[i] !== numArr[i + length / 2]) {
        double = false;
        break;
      }
    }
  }

  if (double) {
    return num;
  } else {
    return (num * 2);
  }
};
