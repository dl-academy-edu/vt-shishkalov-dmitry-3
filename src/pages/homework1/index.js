let name, surname, age, user;

name = prompt("Введите ваше имя: ");
surname = prompt("Введите вашу фамилию: ");
age = +prompt("Введите ваш возраст: ");

user = {
  name: name,
  surname: surname,
  age: age
}

console.log(user);