class Registration {
  static drawRegistrationBlock() {
    const container = document.querySelector('.container');
    container.innerHTML = `
    <section class="form">
      <button class="change-form">Авторизоваться</button>
      <h1 class="form__title">Регистрация</h1>
      <form action="#" class="form__form" method="get" name="form">
        <div class="form__email">
          <span>*</span>
          <label for="mail">Email</label>
          <input type="email" id="mail" name="user_email" placeholder="Введите email" required>
        </div>
        <div class="form__pass">
          <span>*</span>
          <label for="pass">Пароль</label>
          <input type="password" id="pass" name="user_pass" placeholder="Введите пароль" minlength="8" required>
        </div>
        <div class="form__checkbox">
          <span id="checkbox-span">*</span>
          <div class="form__checkbox-wrapper">
            <input type="checkbox" id="checkbox" required>
            <label for="checkbox" id="checkbox-label"></label>
            <p class="form__checkbox-text" id="checkbox-text">Я согласен с <a href="#">Правилами
                пользования
                приложением</a></p>
          </div>

        </div>
        <input type="submit" id="button" class="form__button button" value="Регистрация">
      </form>
    </section>
    `
  }

  static addRegistrationBlockLogic() {
    const passInput = document.getElementById('pass');
    const mailInput = document.getElementById('mail');
    const submitButton = document.getElementById('button');
    const changeFormButton = document.querySelector('.change-form');

    submitButton.addEventListener('click', (event) => submitButtonClickkHandler(event));
    passInput.addEventListener('invalid', (event) => passInputInvalidHandler(event));
    mailInput.addEventListener('invalid', (event) => mailInputInvalidHandler(event));
    changeFormButton.addEventListener('click', () => changeFormButtonClickHandler())

    function changeFormButtonClickHandler() {
      Authorization.drawAuthorizationBlock();
      Authorization.addAuthorizationBlockLogic();
    }

    function mailInputInvalidHandler(event) {
      event.preventDefault();
      const mailContainer = document.querySelector('.form__email');
      const input = event.target;

      if (input.validity.valueMissing) {
        addWarning(input, mailContainer, 'Поле обязательно для заполнения');
      } else if (input.validity.typeMismatch) {
        addWarning(input, mailContainer, 'Email невалидный');
      }
    }

    function passInputInvalidHandler(event) {
      event.preventDefault();
      const passContainer = document.querySelector('.form__pass');
      const input = event.target;

      if (input.validity.valueMissing) {
        addWarning(input, passContainer, 'Поле обязательно для заполнения');
      } else if (input.validity.tooShort) {
        addWarning(input, passContainer, 'Пароль должен содержать как минимум 8 символов');
      }
    }

    function submitButtonClickkHandler(event) {
      event.preventDefault()
      const form = document.forms.form;
      const checkbox = document.getElementById('checkbox')

      checkboxCheck()

      if (mailInput.checkValidity()) {
        const mailContainer = document.querySelector('.form__email');
        clearWarning(mailContainer)
      }

      if (passInput.checkValidity()) {
        const passContainer = document.querySelector('.form__pass');
        clearWarning(passContainer)
      }

      if (passInput.checkValidity() && mailInput.checkValidity() && checkbox.checked) {
        const users = JSON.parse(localStorage.getItem('users'));
        const usersFiltered = users.filter(user => user.email === mailInput.value)

        if (usersFiltered.length > 0) {
          const mailContainer = document.querySelector('.form__email');
          addWarning(mailInput, mailContainer, 'Пользователь с таким email ужесуществует');
          return;
        }
        const newUsers = [...users, { email: mailInput.value, pass: passInput.value }];
        localStorage.setItem('users', JSON.stringify(newUsers));

        passInput.value = '';
        mailInput.value = '';
        checkbox.checked = false;
        alert('Вы успешно зарегистрированы. Теперь можно авторизоваться.')
      }
    }
  }
}
class Authorization {
  static drawAuthorizationBlock() {
    const container = document.querySelector('.container');
    container.innerHTML = `
    <section class="form">
      <button class="change-form">Зарегистрироваться</button>
      <h1 class="form__title">Вход</h1>
      <form action="#" class="form__form" method="get" name="form">
        <div class="form__email">
          <span class="visually-hidden">*</span>
          <label for="mail">Email</label>
          <input type="email" id="mail" name="user_email" placeholder="Введите email" required>
        </div>
        <div class="form__pass">
          <span class="visually-hidden">*</span>
          <label for="pass">Пароль</label>
          <input type="password" id="pass" name="user_pass" placeholder="Введите пароль" minlength="8" required>
        </div>
        <div class="form__checkbox">
          <span id="checkbox-span" class="visually-hidden">*</span>
          <div class="form__checkbox-wrapper">
            <input type="checkbox" id="checkbox" required>
            <label for="checkbox" id="checkbox-label"></label>
            <p class="form__checkbox-text" id="checkbox-text">Я согласен получать обновления на почту</p>
          </div>

        </div>
        <input type="submit" id="button" class="form__button button" value="Войти">
      </form>
    </section>
    `
  }

  static addAuthorizationBlockLogic() {
    const passInput = document.getElementById('pass');
    const mailInput = document.getElementById('mail');
    const submitButton = document.getElementById('button');
    const changeFormButton = document.querySelector('.change-form');

    submitButton.addEventListener('click', (event) => submitButtonClickkHandler(event));
    passInput.addEventListener('invalid', (event) => passInputInvalidHandler(event));
    mailInput.addEventListener('invalid', (event) => mailInputInvalidHandler(event));
    changeFormButton.addEventListener('click', () => changeFormButtonClickHandler())

    function changeFormButtonClickHandler() {
      Registration.drawRegistrationBlock();
      Registration.addRegistrationBlockLogic();
    }

    function mailInputInvalidHandler(event) {
      event.preventDefault();
      const mailContainer = document.querySelector('.form__email');
      const input = event.target;

      if (input.validity.valueMissing) addWarning(input, mailContainer, 'Поле обязательно для заполнения');
    }

    function passInputInvalidHandler(event) {
      event.preventDefault();
      const passContainer = document.querySelector('.form__pass');
      const input = event.target;

      if (input.validity.valueMissing) addWarning(input, passContainer, 'Поле обязательно для заполнения');
    }

    function submitButtonClickkHandler(event) {
      event.preventDefault()
      checkboxCheck()
      if (!document.getElementById('checkbox').checked) return;

      const users = JSON.parse(localStorage.getItem('users'));
      const usersFiltered = users.filter(user => user.email === mailInput.value)

      if (usersFiltered.length === 0) {
        addAuthorizationWarning()
        return;
      }
      if (usersFiltered[0].pass !== passInput.value) {
        addAuthorizationWarning()
        return;
      }

      location.href = './some-page.html'
    }
  }
}


function addWarning(input, node, text) {
  node.classList.add('warning');
  const warningText = node.querySelector('.warning-text');

  if (warningText) {
    warningText.textContent = text;
  } else {
    const hiddenSpan = node.querySelector('.visually-hidden');
    if (hiddenSpan) hiddenSpan.classList.remove('visually-hidden');
    input.insertAdjacentHTML('afterend', `<p class="warning-text">${text}</p>`);
  }
}

function addAuthorizationWarning() {
  const mailContainer = document.querySelector('.form__email');
  mailContainer.classList.add('warning');
  const hiddenSpan = mailContainer.querySelector('.visually-hidden');
  if (hiddenSpan) hiddenSpan.classList.remove('visually-hidden');

  const passContainer = document.querySelector('.form__pass');
  addWarning(document.getElementById('pass'), passContainer, 'Логин или Пароль невереный ');
}

function clearWarning(node) {
  node.classList.remove('warning');
  const warningText = node.querySelector('.warning-text');
  if (warningText) warningText.remove()
}

function checkboxCheck() {
  const checkbox = document.getElementById('checkbox');
  const checkboxLabel = document.getElementById('checkbox-label');
  const checkboxSpan = document.getElementById('checkbox-span');
  const checkboxWrapper = document.querySelector('.form__checkbox-wrapper');
  const checkboxContainer = document.querySelector('.form__checkbox');
  const warningText = checkboxContainer.querySelector('.warning-text');

  if (checkbox.checked) {
    checkboxLabel.style.border = '2px solid #787878';
    checkboxSpan.style.color = '#787878';
    if (warningText) warningText.remove()
  } else {
    checkboxLabel.style.border = '2px solid #CB2424';
    checkboxSpan.style.color = '#CB2424';
    if (!warningText) {
      const span = checkboxContainer.querySelector('.visually-hidden');
      if (span) span.classList.remove('visually-hidden');
      checkboxWrapper.insertAdjacentHTML('afterend', '<p class="warning-text">Поле обязательно для заполнения</p>');
    }
  }
}

window.addEventListener('load', () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', '[]');
  }
  Registration.drawRegistrationBlock()
  Registration.addRegistrationBlockLogic()

})

