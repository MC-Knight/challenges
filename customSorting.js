const isPrime = (number) => {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const customSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  for (let i = data.length - 1; i >= 0; i--) {
    if (isPrime(data[i])) {
      data.splice(i, 1);
    }
  }

  let [leftSide, rightSide] = [0, data.length - 1];
  while (leftSide < rightSide) [data[leftSide++], data[rightSide--]] = [data[rightSide], data[leftSide]];

  return data;
};

console.log(customSort([1, 10, 30, 4, 8, 9, 2, 5, 15, 3, 35, 40, 39, 7, 100]));
