const books = document.querySelector('.books');

// Восстановить порядок книг.
const orderedElements = Array.from(books.children).sort((a, b) => a.dataset.serialNumber - b.dataset.serialNumber);
books.innerHTML = '';
books.append(...orderedElements);

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const thirdBookLink = books.querySelector('[data-serial-number="3"] a');
thirdBookLink.textContent = "Книга 3. this и Прототипы Объектов";

// Удалить рекламу со страницы
document.querySelector('.adv').remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const secondBookСontents = books.querySelector('[data-serial-number="2"] ul');
const fifthBookСontents = books.querySelector('[data-serial-number="5"] ul');
setCorrectChapterOrder(secondBookСontents);
setCorrectChapterOrder(fifthBookСontents);

// В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const sixthBookСontents = books.querySelector('[data-serial-number="6"] ul');
sixthBookСontents.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
setCorrectChapterOrder(sixthBookСontents);

// Вспомогательные функции
function setCorrectChapterOrder(node) {
  const chaptersArray = Array.from(node.children);

  chaptersArray.sort((a, b) => {
    const wordsA = a.textContent.split(' ');
    const wordsB = b.textContent.split(' ');
    return wordsA[1] < wordsB[1] ? -1 : 1;
  })
  node.innerHTML = '';
  node.append(...chaptersArray)
}