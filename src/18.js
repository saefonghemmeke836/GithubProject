function findLargestPrimeFactor(num) {
  let largestPrime = Math.sqrt(num);

  while (largestPrime > 1) {
    if (num % largestPrime === 0) break;
    largestPrime--;
  }

  return num;
}

// Example usage:
let number = 60;
console.log(`The largest prime factor of ${number} is ${findLargestPrimeFactor(number)}`);
