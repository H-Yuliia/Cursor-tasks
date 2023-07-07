const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1

function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log(`Taxes in Ukraine: ${getMyTaxes.call(ukraine, 2000)}`);
console.log(`Taxes in Latvia: ${getMyTaxes.call(latvia, 2000)}`);
console.log(`Taxes in Litva: ${getMyTaxes.call(litva, 2000)}`);

//2

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(`Middle taxes in Ukraine: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Middle taxes in Latvia: ${getMiddleTaxes.call(latvia)}`);
console.log(`Middle taxes in Litva: ${getMiddleTaxes.call(litva)}`);

//3

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(`Total taxes in Ukraine: ${getTotalTaxes.call(ukraine)}`);
console.log(`Total taxes in Latvia: ${getTotalTaxes.call(latvia)}`);
console.log(`Total taxes in Litva: ${getTotalTaxes.call(litva)}`);

//4

function getMySalary() {
    let salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    let taxes = (this.tax * salary).toFixed(2);
    let profit = (salary - taxes).toFixed(2);
    console.log({ salary, taxes, profit });
}
setInterval(getMySalary.bind(ukraine), 10000);
setInterval(getMySalary.bind(latvia), 10000);
setInterval(getMySalary.bind(litva), 10000);
