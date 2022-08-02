"use strict"

const profit = 'freelance';
const purpose = 80000;
const period = 4;
const expenses = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую`);

let money;
while (true) {
  money = +prompt(`Ваш месячный доход?`);
  if (isFinite(money)) break;
  alert('Введите число');
}

let extraMoney;
while (true) {
  extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);
  if (isFinite(extraMoney)) break;
  alert('Введите число');
}

let amount;
while (true) {
  amount = +prompt(`Во сколько обойдутся обязательные статьи расходов?`);
  if (isFinite(amount)) break;
  alert('Введите число');
}

const deposit = confirm(`Есть ли у вас вклад в банке?`);
const accumulatedIncome = getAccumulatedIncome();
const budgetDay = Math.floor(accumulatedIncome / 30);

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
console.log('Дневной бюджет', budgetDay);

if (getTargetMonth() > 0) {
  console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
} else {
  console.log('Цель не будет достигнута');
}

function getAccumulatedIncome() {
  return money - amount + extraMoney;
};
function getTargetMonth() {
  return Math.ceil(purpose / accumulatedIncome);
};

/* if (budgetDay > 60000) {
  console.log(`У вас высокий уровень дохода`)
} else if (budgetDay > 30000 && budgetDay <= 60000) {
  console.log(`У вас средний уровень дохода`)
} else if (budgetDay <= 30000 && budgetDay > 0) {
  console.log(`К сожалению у вас уровень дохода ниже среднего`)
} else {
  console.log(`Что то пошло не так`)
} */


/* const expensesArr = expenses.toLocaleLowerCase().match(/[а-яА-ЯёЁ]+/ig);
console.log(expensesArr) */




