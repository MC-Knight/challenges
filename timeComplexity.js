const majorityElement = (data) => {
  let element;
  let count = 0;

  for (let num of data) {
    if (count === 0) {
      element = num;
    }
    count += num === element ? 1 : -1;
  }

  count = 0;
  for (let num of data) {
    if (num === element) {
      count++;
    }
  }

  if (count > data.length / 2) {
    return element;
  } else {
    return "it has no  majority element";
  }
};

console.log(majorityElement([1, 3, 3, 4, 4, 5, 3, 5, 3, 3, 3, 3, 6]));
console.log(majorityElement([3, 1, 3, 4, 4]));
