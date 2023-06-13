const productA = 15.678;
const productB = 123.965;
const productC = 90.2345;
const allProducts = [productA, productB, productC]
const minMax ="Мінімальне число: " + Math.min(productA, productB, productC) + " " + "Максимальне число: " +  Math.max(productA, productB, productC) //Min and Max numbers
const sumOfProducts = productA + productB + productC; //the cost of all products
const floorNumber = Math.floor(productA) + ", "+ Math.floor(productB) + ", " + Math.floor(productC) //we throw away all the pennies
const floorSum =  Math.floor(sumOfProducts); //round to floor
const sumRound = Math.round(sumOfProducts / 100) * 100; // rounded to hundrets
const booleanValue =  Math.floor(sumOfProducts) % 2 === 0; //boolean values
const payment = 500;
const amountOfTheRest = Math.round((payment - sumOfProducts) * 100) / 100; // amount of the rest
const average = Math.round((sumOfProducts / allProducts.length) * 100) / 100; // average amount
const everythingInOneLine = `${minMax} Вартість всіх товарів: ${sumOfProducts} Відкидаємо копійки у всіх товарах: ${floorNumber} Складіть цілу частину вартості кожного товару між собою: ${floorSum}
Сума товарів, округлена до сотень: ${sumRound} Булеве значення: ${booleanValue} Решта: ${ amountOfTheRest} Середнє значення цін: ${average}`

console.log (everythingInOneLine)


const amount = 457.98;
const randomDiscount = Math.random() * 85;
const discount = amount - (amount * (randomDiscount / 100));
const round = Math.round(discount * 100) / 100;
const amountOfSale = Math.round((amount - round) * 100) / 100;

console.log("Сума без знижки: ", amount,  "Випадкова знижка та сума до оплати округлену до 2 знаків після коми: ", round, "Вартість самої знижки: ", amountOfSale)

// Net profit
const cost = amount / 2;
const profit = Math.round((cost -  amountOfSale) * 100) / 100;
console.log("Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни: ", profit)
