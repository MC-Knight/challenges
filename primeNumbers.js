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

const primeNumbers = (numbers) => {
  let primes = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primes.push(numbers[i]);
    }
  }

  return primes;
};

/* prettier-ignore */
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
