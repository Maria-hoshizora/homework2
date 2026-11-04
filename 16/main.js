// Дз

//1.

const number = 19;

if (number % 2 === 0) {
	console.log("Число четное");
} else {
	console.log("Число нечетное");
}

//2.

let age = 18;
let discount;

discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(discount);

switch (age) {
	case age < 18:
		discount = 10;
		break;
	case age <= 65:
		discount = 20;
		break;
	default:
		discount = 30;
}

//3.

const userName = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");
if ((userName === 'admin' || userName === 'user') && password === 123456) {
    console.log('Доступ разрешен')
} else {
    console.log('Доступ запрещен')
}

