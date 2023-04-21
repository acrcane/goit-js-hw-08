import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', hahdleFillValue);
form.addEventListener('submit', handleSubmitForm);
form.addEventListener('input', throttle(handleSaveMessage, 500));

const FORM_MESSAGE_KEY = 'feedback-form-state';
const formData = {};

function handleSaveMessage(e) {
  formData[e.target.name] = e.target.value;
  saveMessageToLocalStorage(formData);
}

function saveMessageToLocalStorage(msg) {
  localStorage.setItem(FORM_MESSAGE_KEY, JSON.stringify(msg));
}

function getMessageToLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(FORM_MESSAGE_KEY));
  } catch (error) {
    console.log(error.message);
  }
}

function handleSubmitForm(e) {
  e.preventDefault();

  localStorage.removeItem(FORM_MESSAGE_KEY);
  form.reset();
}

function hahdleFillValue() {
  const storage = getMessageToLocalStorage();

  if (storage && storage.email && storage.message) {
    form.elements.email.value = storage.email;
    form.elements.message.value = storage.message;
  } else {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
}
