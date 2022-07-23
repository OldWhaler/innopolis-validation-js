"use strict"

const profit = 'freelance';
const purpose = 80000;
const period = 4;
const money = prompt(`Ваш месячный доход?`);
const expenses = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую`);
const amount = prompt(`Во сколько обойдутся обязательные статьи расходов?`);
const deposit = confirm(`Есть ли у вас вклад в банке?`);
const budgetMonth = money - amount;
const budgetDay = Math.floor(budgetMonth / 30);

console.log(`Тип данных переменной money: ${typeof money}.`);
console.log(`Тип данных переменной profit: ${typeof profit}.`);
console.log(`Длинна строки expenses: ${expenses.length}.`);
console.log(`Период равен ${period} месяцев.`);
console.log(`Цель заработать ${purpose} рублей.`);
console.log(`Месячный бюджет ${budgetMonth} рублей.`);
console.log(`Дневной бюджет ${Math.floor(budgetDay)} рублей.`);
console.log(`Цель будет достигнута через ${Math.ceil(purpose / budgetMonth)} месяцев.`)

if (budgetDay > 60000) {
  console.log(`У вас высокий уровень дохода`)
} else if (budgetDay > 30000 && budgetDay <= 60000) {
  console.log(`У вас средний уровень дохода`)
} else if (budgetDay <= 30000 && budgetDay > 0) {
  console.log(`К сожалению у вас уровень дохода ниже среднего`)
} else {
  console.log(`Что то пошло не так`)
}


const expensesArr = expenses.toLocaleLowerCase().match(/[а-яА-ЯёЁ]+/ig);
console.log(expensesArr)



