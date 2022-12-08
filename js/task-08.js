const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};