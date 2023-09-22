const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("conf-pass");

form.addEventListener("submit", (e) => {
  if (!inputValidate()) {
    e.preventDefault();
  }
});

function inputValidate() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;

  if (usernameVal === "") {
    success = false;
    setError(username, "username is required");
  } else {
    setSucces(username);
  }
  if (emailVal === "") {
    success = false;
    setError(email, "email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter valid email");
  } else {
    setSucces(email);
  }
  if (passwordVal === "") {
    success = false;
    setError(password, "please enter a password");
  } else if (passwordVal.length < 8) {
    setError(password, "passowrd should be 8 characters long");
  } else {
    setSucces(password);
  }
  if (cpasswordVal !== passwordVal) {
    success = false;
    setError(cpassword, "password is not same");
  } else {
    setSucces(cpassword);
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
}
function setSucces(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}
