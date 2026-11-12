// Задача 1.

const calculateFinalPrice = (basePrice, discount, tax) => {
	const priceAfterDiscount = basePrice * (1 - discount / 100);
	return priceAfterDiscount * (1 + tax / 100);
};
console.log(calculateFinalPrice(100, 10, 0));

//боже как же я ненавижу проценты


// Задача 2.

const checkAccess = (userName, password) => {
	if (userName === "admin" && password === 123456) {
		return "Доступ разрешен";
	} else return "Доступ запрещен";
};

console.log(checkAccess("admin", 123456));


// Задача 3.

const getTimeOfDay = (hour) => {
	if (hour >= 0 && hour <= 5) {
		return "Ночь";
	} else if (hour >= 6 && hour <= 11) {
		return "Утро";
	} else if (hour >= 12 && hour <= 17) {
		return "День";
	} else if (hour >= 18 && hour <= 23) {
		return "Вечер";
	} else return `"Некорректное время"`;
};

console.log(getTimeOfDay(18));


// Задача 4.

const findFirstEven = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет";
};

console.log(findFirstEven(67, 67));
