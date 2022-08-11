const passInput = document.getElementById('pass');
const mailInput = document.getElementById('mail');
const submitButton = document.getElementById('button');

submitButton.addEventListener('click', (event) => submitButtonClickkHandler(event));
passInput.addEventListener('invalid', (event) => passInputInvalidHandler(event));
mailInput.addEventListener('invalid', (event) => mailInputInvalidHandler(event));

function submitButtonClickkHandler(event) {
  const form = document.forms.registration;

  checkboxCheck()

  if (form.elements.user_email.validity.valid) {
    const mailContainer = document.querySelector('.registration__email');
    clearWarning(mailContainer)
  }

  if (form.elements.user_pass.validity.valid) {
    const passContainer = document.querySelector('.registration__pass');
    clearWarning(passContainer)
  }

  if (!document.querySelector('.warning-text')) {
    event.preventDefault();
    console.log({ email: mailInput.value, password: passInput.value });
  }
}

function passInputInvalidHandler(event) {
  event.preventDefault();
  const passContainer = document.querySelector('.registration__pass');
  const warningText = passContainer.querySelector('.warning-text');
  const input = event.target;

  if (input.validity.valueMissing) {
    passContainer.classList.add('warning');
    if (warningText) {
      warningText.textContent = 'Поле обязательно для заполнения';
    } else {
      input.insertAdjacentHTML('afterend', '<p class="warning-text">Поле обязательно для заполнения</p>');
    }
  } else if (input.validity.tooShort) {
    passContainer.classList.add('warning');
    if (warningText) {
      warningText.textContent = 'Пароль должен содержать как минимум 8 символов';
    } else {
      input.insertAdjacentHTML('afterend', '<p class="warning-text">Пароль должен содержать как минимум 8 символов</p>');
    }
  }
}

function mailInputInvalidHandler(event) {
  event.preventDefault();
  const mailContainer = document.querySelector('.registration__email');
  const warningText = mailContainer.querySelector('.warning-text');
  const input = event.target;

  if (input.validity.valueMissing) {
    mailContainer.classList.add('warning');
    if (warningText) {
      warningText.textContent = 'Поле обязательно для заполнения';
    } else {
      input.insertAdjacentHTML('afterend', '<p class="warning-text">Поле обязательно для заполнения</p>');
    }
  } else if (input.validity.typeMismatch) {
    mailContainer.classList.add('warning');
    if (warningText) {
      warningText.textContent = 'Email невалидный';
    } else {
      input.insertAdjacentHTML('afterend', '<p class="warning-text">Email невалидный</p>');
    }
  }
}

function checkboxCheck() {
  const checkbox = document.getElementById('checkbox');
  const checkboxLabel = document.getElementById('checkbox-label');
  const checkboxSpan = document.getElementById('checkbox-span');
  const checkboxWrapper = document.querySelector('.registration__checkbox-wrapper');
  const checkboxContainer = document.querySelector('.registration__checkbox');
  const warningText = checkboxContainer.querySelector('.warning-text');

  if (checkbox.checked) {
    checkboxLabel.style.border = '2px solid #787878';
    checkboxSpan.style.color = '#787878';
    if (warningText) warningText.remove()
  } else {
    checkboxLabel.style.border = '2px solid #CB2424';
    checkboxSpan.style.color = '#CB2424';
    if (!warningText) {
      checkboxWrapper.insertAdjacentHTML('afterend', '<p class="warning-text">Поле обязательно для заполнения</p>');
    }
  }
}

function clearWarning(node) {
  node.classList.remove('warning');
  const warningText = node.querySelector('.warning-text');
  if (warningText) warningText.remove()
}