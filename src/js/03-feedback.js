
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  form.addEventListener('input', throttle(function () {
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500));

  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email || '';
    messageInput.value = parsedState.message || '';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const currentState = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.removeItem('feedback-form-state');
    console.log(currentState);
  });
});

