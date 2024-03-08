export function strReverse(value: string): string {
  return value.split("").reverse().join("");
}

export function strToLower(value: string): string {
  return value.toLowerCase();
}

export function strToUpper(value: string): string {
  return value.toUpperCase();
}

export function strRandomize(value: string): string {
  var array = value.split("");
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join("");
}

export function strInvertCase(value: string): string {
  return value
    .split("")
    .map(function (c) {
      if (c === c.toLowerCase()) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join("");
}
