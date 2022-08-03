//"Загадывание случайного числа от 1 до 10"


const game = guessNumberGame(5);
game()


function guessNumberGame(numberOfattempts) {
  let counter = 0;
  let stopGame = false;
  const number = randomInteger(0, 100);


  return function func() {
    if (stopGame) return;
    let answer = getNumber();

    if (answer === undefined) {
      stopGame = true;
      alert('Игра окончена');
      return;
    }

    const attemptsLeft = numberOfattempts - counter;
    
    if (answer === number) {
      alert(`Поздравляю, Вы угадали!!! Количество затраченных попыток ${counter} из ${numberOfattempts}`);

      if (confirm('Хотели бы сыграть еще?', '')) {
        counter = 0;
        func();
      } else {
        stopGame = true;
        alert('Спасибо за игру!!!');
        return;
      }
    }

    if (answer > number) {
      alert(`Загаданное число меньше, осталось попыток ${attemptsLeft}`);

      if (attemptsLeft <= 0) {
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
          counter = 0;
          func();
        } else {
          stopGame = true;
          alert('Спасибо за игру!!!');
          return;
        }
      }
      func();
    }

    if (answer < number) {
      alert(`Загаданное число больше, осталось попыток ${attemptsLeft}`);

      if (attemptsLeft <= 0) {
        
      }
      func();
    }

    function getNumber() {
      const num = prompt('Угадай число от 1 до 100');
      if (num === null) return;
      if (isFinite(num) && num !== '') {
        counter++
        return +num;
      }
      alert('Введите число!');
      return getNumber()
    }
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

