const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");
const resultMessage = document.getElementById("resultMessage");

function checkPassword() {
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verifyPassword").value;

  if (password.length < 8 || verifyPassword.length < 8) {
    return false;
  }

  if (password !== verifyPassword) {
    return false;
  }

  return true;
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // stop default submit

  let valid = form.checkValidity();   // HTML5 validation
  let passwordsOk = checkPassword();  // custom validation

  if (valid && passwordsOk) {
    resultMessage.textContent = "Registration successful!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "Please fix the errors before submitting.";
    resultMessage.style.color = "red";
  }
});