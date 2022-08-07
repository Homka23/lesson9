// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function ploshcha_pr(a, b) {
    return a * b;
};

console.log(ploshcha_pr(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function ploshcha_kola(r) {
    const pi = 3.14;
    return r * r * pi;
};

console.log(ploshcha_kola(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function ploshcha_cylindra(h, r) {
    const pi = 3.14;
    return (2 * r * r * pi) + (2 * pi * h * r);
};

console.log(ploshcha_cylindra(6, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

function array () {
    let my_array = ['a', 3, 'e', 're', 76, 'hello'];
    for (const myArrayElement of my_array) {
        console.log(myArrayElement);
    };
};
console.log(array());

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf(text) {
    document.write(`<p>${text}</p>`);
};

paragraf('hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>`);
    for (let i = 1; i < 4; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);

};

list('Hello world!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list_rand(text, num_li) {
    document.write(`<ul>`);
    for (let i = 0; i < num_li; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);

};

list_rand('Hello world!', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function array_for_list_fun() {
    let array_for_list = ['right', 45, true, 'hello', 32, false];
    document.write(`<ul>`);
    for (const arrayForListElement of array_for_list) {
        document.write(`<li>${arrayForListElement}</li>`)
    };
    document.write(`</ul>`);
};

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.

function array_users() {
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    for (const user of users) {
        document.write(`<div>${user.name + ' ' + user.age + ' ' + user.status}</div>`)
    };
};

array_users();
// - створити функцію яка повертає найменьше число з масиву

function array_number() {
    let numbers = [2, 4, 32, 22, 54, 24, 234, 5322, 543, -543];
    let numbers_min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers_min) {
            numbers_min = numbers[i];
        }
    }
    console.log(numbers_min);
};

array_number();


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum_array() {
    let numbers = [2, 4, 12, 1, 5, 3, 4, 2, 6, -6, 54332];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    return sum;
};

console.log(sum_array());