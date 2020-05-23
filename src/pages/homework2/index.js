let i = 1;

function f() {
  let max = +prompt("Введите число (Не более 40)", 7);
  if (Number.isNaN(max)) {
    alert("Необходимо ввести число!");
    f()
  }
  if (max > 40) {
    alert("Слишком большое число!");
    max = 0;
    f()
  }
  for (i; i <= max; i++) {
    if (i % 4 == 0) {
      continue
    }
    console.log(i);
  }
}

function f2() {
  console.log(num);
  num = num + 3;
}

console.log("Результат первой программы:");
f()
console.log("Результат второй программы:");
let num = +prompt("Введите другое число", 9);
let timerId = setInterval(function () {
  f2();
}, 3000);
setTimeout(function () {
  clearInterval(timerId);
}, 9000);
