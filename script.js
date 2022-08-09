"use strict"

// const profit = 'freelance';
// const purpose = 80000;
// const period = 4;
// const expenses = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую`);

// let money;
// while (true) {
//   money = +prompt(`Ваш месячный доход?`);
//   if (isFinite(money)) break;
//   alert('Введите число');
// }

// let extraMoney;
// while (true) {
//   extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);
//   if (isFinite(extraMoney)) break;
//   alert('Введите число');
// }

// let amount;
// while (true) {
//   amount = +prompt(`Во сколько обойдутся обязательные статьи расходов?`);
//   if (isFinite(amount)) break;
//   alert('Введите число');
// }

// const deposit = confirm(`Есть ли у вас вклад в банке?`);
// const accumulatedIncome = getAccumulatedIncome();
// const budgetDay = Math.floor(accumulatedIncome / 30);

// console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
// console.log('Дневной бюджет', budgetDay);

// if (getTargetMonth() > 0) {
//   console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
// } else {
//   console.log('Цель не будет достигнута');
// }

// function getAccumulatedIncome() {
//   return money - amount + extraMoney;
// };
// function getTargetMonth() {
//   return Math.ceil(purpose / accumulatedIncome);
// };

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


async function getUsersInfo() {
  const res = await fetch('https://reqres.in/api/users?per_page=12');
  const users = await res.json();
  console.log('-----------');
  console.log('Пункт №1:')
  console.log('-----------');
  users.data.forEach(user => console.log(user.last_name))
  console.log('-----------');
  console.log('Пункт №2:')
  console.log('-----------');
  users.data.forEach(user => {
    if (user.last_name[0] === 'F') console.log(user)
  })
  console.log('-----------');
  console.log('Пункт №3:')
  console.log('-----------');
  const task3 = users.data.reduce((acc, cur) => {
    return acc += ` ${cur.first_name} ${cur.last_name},`
  }, 'Наша база содержит данные следующих пользователей:')
  console.log(task3.slice(0, -1))
  console.log('-----------');
  console.log('Пункт №4:')
  console.log('-----------');
  console.log(Object.keys(users.data[0]).toString())
}

getUsersInfo()

