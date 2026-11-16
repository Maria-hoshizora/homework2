// 1.

const user = {
	name: "Мария",
	age: 17,
	hobby: "Японский язык",
	isCute: true,
};

console.log(user);

//2.

const emptyUser = {};

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log(isEmpty(emptyUser));

//3.


const task = {
	title: "Task",
	description: "hz",
	isCompleted: true,
};

const modifications = {
	title: "Task2",
	isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
	const newObj = {
		...object,
		...modifications,
	};
	return newObj;
};

const task2 = cloneAndModify(task, modifications);

for (let key in task2) {
	console.log(`${key}: ${task2[key]}`)
}

//4.

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
}

callAllMethods(myObject);
