  let n = Number(prompt("Введіть перше ціле число"));
  while(!Number.isInteger(n) || n <= 0){
    n = Number(prompt("Введіть ЦІЛЕ число")); 
    }

  let m = Number(prompt("Введіть друге ціле число"));
  while (!Number.isInteger(m) || m <= n){
    m = Number(prompt("Введіть ЦІЛЕ число та більше за попереднє")); 
    }
//------------------------------------------------------------
  let access = confirm("Пропускати парні числа?");
  let sumOfNumbers = 0;

  for(let i = n; i <= m; i++){
  if(access && i % 2 === 0){
    continue;
  }
  else {
    sumOfNumbers += i;
  }
  };
console.log(`Сума чисел: ${sumOfNumbers}`)




















