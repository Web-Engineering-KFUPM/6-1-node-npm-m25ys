export function add(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const [first, ...rest] = numbers;
  return rest.reduce((total, num) => total - num, first);
}

export function multiply(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const [first, ...rest] = numbers;
  return rest.reduce((product, num) => product * num, first);
}

export function divide(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN;
  }

  const [first, ...rest] = numbers;

  if (rest.some((num) => num === 0)) {
    return NaN;
  }

  return rest.reduce((quotient, num) => quotient / num, first);
}