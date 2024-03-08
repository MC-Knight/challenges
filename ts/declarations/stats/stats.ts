import exp from "constants";

export function getMaxIndex<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): number {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[i], input[maxIndex]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

export function getMaxElement<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): T | null {
  var index: number = getMaxIndex(input, comparator);
  return index === -1 ? null : input[index];
}

export function getMinIndex<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): number {
  if (input.length === 0) {
    return -1;
  }
  var maxIndex = 0;
  for (var i = 1; i < input.length; i++) {
    if (comparator(input[maxIndex], input[i]) > 0) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

export function getMinElement<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): T | null {
  var index: number = getMinIndex(input, comparator);
  return index === -1 ? null : input[index];
}

export function getMedianIndex<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): number {
  if (input.length === 0) {
    return -1;
  }
  var data = input.slice().sort(comparator);
  return input.indexOf(data[Math.floor(data.length / 2)]);
}

export function getMedianElement<T>(
  input: T[],
  comparator: (a: T, b: T) => number
): T | null {
  var index: number = getMedianIndex(input, comparator);
  return index === -1 ? null : input[index];
}

export function getAverageValue<T>(
  input: T[],
  getValue: (value: T) => number
): number | null {
  if (input.length === 0) {
    return null;
  }
  return (
    input.reduce(function (result, item) {
      return result + getValue(item);
    }, 0) / input.length
  );
}
