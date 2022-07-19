"use strict"

const money = 43000;
const profit = 'freelance';
const expenses = 'Проезд, Питание, Развлечения, Отпуск';
const purpose = 80000;
const period = 4;
const budgetDay = Math.floor(money / 30);

console.log(`Тип данных переменной money: ${typeof money}.`);
console.log(`Тип данных переменной profit: ${typeof profit}.`);
console.log(`Длинна строки expenses: ${expenses.length}.`);
console.log(`Период равен ${period} месяцев.`);
console.log(`Цель заработать ${purpose} рублей.`);
console.log(`Дневной бюджет ${budgetDay} рублей.`);

const expensesArr = expenses.toLocaleLowerCase().match(/[а-яА-ЯёЁ]+/ig);
console.log(expensesArr)
