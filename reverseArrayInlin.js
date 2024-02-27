const reverseArrayInline = (array) => {
  let leftSide = 0;
  let rightSide = array.length - 1;

  while (leftSide < rightSide) {
    [array[leftSide], array[rightSide]] = [array[rightSide], array[leftSide]];
    leftSide++;
    rightSide--;
  }

  return array;
};

console.log(reverseArrayInline([1, 2, 3]));
console.log(reverseArrayInline([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
