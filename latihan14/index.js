function comparesNumber(a, b) {
  if (b > a) {
    return true;
  }
  if (b < a) {
    return false;
  }
  if (b == a) {
    return -1;
  }
}

// console.log(comparesNumber(5, 8));

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("Hello"));

function urutHuruf(str) {
  return str.split("").sort().join("");
}

// console.log(urutHuruf("halo"));

function isArithmeticProgression(numbers) {
  var beda = numbers[1] - numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] != beda) {
      return false;
    }
  }
  return true;
}

// console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
// console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
// console.log(isArithmeticProgression([1, 3, 5, 7, 9, 11]));
// console.log(isArithmeticProgression([5, 10, 15, 20, 25, 30]));

function threeStepsAB(text) {
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a" && text[i + 4] == "b") {
      return true;
    }
    if (text[i] == "b" && text[i + 4] == "a") {
      return true;
    }
  }
  return false;
}

// console.log(threeStepsAB("lane borrowed"));
// console.log(threeStepsAB("i am sick"));
// console.log(threeStepsAB("you are boring"));
// console.log(threeStepsAB("barbarian"));

function gcd(firstNumber, secondNumber) {
  var result = 0;
  //   for (var i = 1; i <= firstNumber && i <= secondNumber; i++) {
  //     if (firstNumber % i == 0 && secondNumber % i == 0) {
  //       result = i;
  //     }
  //   }
  //   return result;
  while (secondNumber != 0) {
    result = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = result;
  }
  return firstNumber;
}

// console.log(gcd(12, 16));

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(7));
// console.log(isPrime(33));

function listPrime(firstNumber, secondNumber) {
  var result = [];
  for (var i = firstNumber; i <= secondNumber; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

// console.log(listPrime(1, 10));
// console.log(listPrime(5, 10));
