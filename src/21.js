function sum(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return total;
}
