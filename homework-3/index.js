/* 1 Створити функцію getMaxDigit(number) – яка отримує будь-яке
число та виводить найбільшу цифру в цьому числі. */

function getMaxDigit(digit) {
  const values = String(digit).split("");
  return (digit = parseInt(Math.max(...values)));
}

// 2 Створити функцію, яка визначає ступінь числа. Не
// використовуючи Math.pow та **. Використовуйте цикл

function getPowerOfNumber(number, power) {
  for (let i = 0; i < power; i++) {
    number = number * number;
  }
  return number;
}

/* 3 Створити функцію, яка форматує ім'я, роблячи першу букву
великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);*/

function myName(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1, 6).toLowerCase();
}

/* 4 Створити функцію, яка вираховує суму, що залишається після
оплати податку від зарабітньої плати.*/

function getSalary() {
  let salary = 1000;
  let tax = 19.5;
  return salary - (salary / 100) * tax;
}

/* 6 Створити функцію, яка рахує скільки разів певна буква
повторюється в слові. */

function countLetter(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "i") {
      count++;
    }
  }
  return count;
}

// 7; 8 Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.

function convertCurrency(currency) {
  if (currency.includes("uah")) {
    return parseInt(currency) / 36 + "$";
  } else if (currency.includes("$")) {
    return parseInt(currency) * 36 + "uah";
  } else {
    return "Error";
  }
}

//10. Створіть функцію, яка видаляє всі букви з речення.

function deleteLetters() {
  let letters = "blablabla";
  return letters.replaceAll("a", "");
}

//11. Створіть функцію, яка перевіряє, чи є слово паліндромом.

function isPalyndrom() {
  let firstValue = "Мадам";
  firstValue = firstValue.toLocaleLowerCase();
  let palydrom = firstValue.split(",").reverse().join("");
  if (firstValue === palydrom) {
    return true;
  }
  return false;
}

let task1 = 6789765;
document.writeln(`Max digit: ${getMaxDigit(task1)}`);
document.writeln(`</br>`);

let task2 = getPowerOfNumber(5, 1);
document.writeln(`Power of number 5^2: ${task2}`);
document.writeln(`</br>`);

let task3 = "yuLIIA";
document.writeln(`Format my name: ${myName(task3)}`);
document.writeln(`</br>`);

let task4 = getSalary();
document.writeln(`Salary after paying taxes: ${task4}`);
document.writeln(`</br>`);

let task6 = "Yuliia";
document.writeln(
  `How many identical letters in one string: ${countLetter(task6)}`
);
document.writeln(`</br>`);

let task8 = "1000$";
document.writeln(`Convert currency: ${convertCurrency(task8)}`);
document.writeln(`</br>`);

let task10 = deleteLetters();
document.writeln(`Delete letters "a": ${task10}`);
document.writeln(`</br>`);

let task11 = isPalyndrom();
document.writeln(`Is "Мадам" palidrom: ${task11}`);
document.writeln(`</br>`);
