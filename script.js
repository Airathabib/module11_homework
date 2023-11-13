// Задание 1

const randomArr = [42, 31, 5, 78, 73, null, 0, 33, 0.5, 2, true, 55, 19, 52, undefined, 0];
const newArr = [3, 4.6, 5, '45', NaN, 8, 90, 2.9, 7]

function numberFilter(arr) {
  let zeroNumber = 0,
    oddNumder = 0,
    evenNumber = 0
  const numbersOnly = arr.filter(item => typeof item === "number" && !isNaN(item))
  for (i = 0; i < numbersOnly.length; i++) {
    if (numbersOnly[i] === 0) {
      zeroNumber += 1
    }
    else if (numbersOnly[i] % 2 === 0) {
      evenNumber += 1;
    }
    else {
      oddNumder += 1;
    }
  }
  return console.log(`В массиве: ${numbersOnly.length} цифр, ${zeroNumber} нулей, ${evenNumber} четных цифр, ${oddNumder} нечетных цифр.`);
}

numberFilter(randomArr)
numberFilter(newArr)


// Задание 2

function primeNums(num) {
  num = +prompt('Введите число от 0 до 1000')
  if (!Number.isInteger(num) || num < 2 || num > 1000 || num === null && num.trim() === '') return console.log("Данные введены неверно");

  let max = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= max; i++) {
    if (num % i === 0) {
      return console.log('Составное число');
    } else return console.log('Простое число');
  }
}
// primeNums()

// Задание 3

function someNum(a) {
  return function (b) {
    return a + b;
  };
}


const randomNum = someNum(4)
console.log(randomNum(2));
console.log(randomNum(3));
console.log(randomNum(7));

// Задание 4
function myTimer(a, b) {
  let int = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(int)
  }, 1000)
}
// myTimer(5, 20)

// Задание 5
const arrow = (x, n) => {
  console.log(x ** n)
}
arrow(2, 9)