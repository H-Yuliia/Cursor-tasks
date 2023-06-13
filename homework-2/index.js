function button() {
  let n = parseInt(prompt("Введіть ціле число"));
  let m = parseInt(prompt("Введіть ціле число"));
  if (isNaN(n) && isNaN(m)) {
  } else {
  }

  const acces = confirm("Пропускати парні числа?");
  if (acces === true) {
    for (let result = 0; n <= m; n++) {
      if (n % 2 === 0) {
        continue;
      }
      result += n;
      console.log(result);
    }
  } else if (acces !== true) {
    for (let result = 0; n <= m; n++) {
      result += n;
      console.log(result);
    }
  }
}
