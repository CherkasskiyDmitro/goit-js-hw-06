document.body.style.backgroundColor = '#232931';
document.body.style.color = '#eeeeee';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(element) {
  element.preventDefault();

  const {
    elements: { email, password },
    } = element.currentTarget;


  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    element.currentTarget.reset();
  }
}
