let i = 1;

function task1() {
  let max = +prompt("Введите число (Не более 40)", 7);
  if (Number.isNaN(max)) {
    alert("Необходимо ввести число!");
    task1()
  }
  if (max > 40) {
    alert("Слишком большое число!");
    max = 0;
    task1()
  }
  for (i; i <= max; i++) {
    if (i % 4) {
      console.log(i);
      continue
    }
  }
}

function task2() {
  console.log(num);
  num = num + 3;
}

console.log("Результат первой программы:");
task1()
console.log("Результат второй программы:");
let num = +prompt("Введите другое число", 9);
let timerId = setInterval(function () {
  task2();
}, 3000);
setTimeout(function () {
  clearInterval(timerId);
}, 9000);
