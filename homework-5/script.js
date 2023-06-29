// 1
function getRandomArray(length, min, max) {
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArr.push(randomNumber);
    }
    return randomArr;
}

console.log("№1 Масив випадкових чисел", getRandomArray(15, 1, 100))


//3 -------------------------------------

function getAverage(...numbers) {
    const allIntegers = numbers.every((numbers) => Number.isInteger(numbers));
    if (!allIntegers) {
        return "Numbers is not integer"
    }
    else {
        let avarage =
            numbers.reduce((accumulator, currentValue) => accumulator + currentValue) /
            numbers.length;
        return avarage;
    }
}
console.log(`№3 Середнє значення: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

//5
function filterEvenNumbers(...numbers) {
    let filterNumbers = numbers.filter(item => item % 2 !== 0)
    return filterNumbers;
}
console.log("№5 Фільтрування парних чисел: ", filterEvenNumbers(1, 2, 3, 4, 5, 6))

//6 -----------------------------------------
function countPositiveNumbers(numbers) {
    numbers = [1, -2, 3, -4, -5, 6];
    let result = numbers.filter(item => item > 0)
    return result.length;
}
console.log("№6  Кількість більших чисел: ", countPositiveNumbers())

//7 
function getDividedByFive(...numbers){
    let number = numbers.filter(item => item % 5 === 0)
    return number;
    }
    console.log("№7 Елементи, котрі діляться на 5 без остачі: ", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

//8 ------------------------------------------

function replaceBadWords(string) {
    string = string.toLowerCase()
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("shit")) {
            words[i] = words[i].replace("shit", "****")
        }
        else if (words[i].includes("fuck")) {
            words[i] = words[i].replace("fuck", "****")
        }
    }
    return words.join(" ");
}
console.log("№8 Зміна поганих слів на зірочки: ", replaceBadWords(`Shit, are you fucking kidding me?`));

//9 ------------------------------------------
function divideByThree(word) {
    word = word.toLowerCase();
    let array = [];
    for (let i = 0; i < word.length; i += 3) {
        if (i + 3 <= word.length) {
            array.push(word.substring(i, i + 3))
        }
        else {
            array.push(word.substring(i));
        }
    }
    return array;
}
console.log("№9 Розділяє слово на умовні склади по 3 букви: ", divideByThree("live"))

