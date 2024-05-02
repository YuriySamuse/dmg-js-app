import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

const contactFormData = {};

const refs = {
  form: document.querySelector('.js-contact-form'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 200));

populateMessage();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(evt) {
  contactFormData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contactFormData));
}

function populateMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    Object.entries(savedMessage).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
