import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-contact-form'),
  textarea: document.querySelector('.js-contact-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextInput, 3000));

populateTextarea();
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
