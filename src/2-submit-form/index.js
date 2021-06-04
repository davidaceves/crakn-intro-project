const formElement = document.getElementById("login-form");

const inputEmail = document.getElementById("email-address");
const errorLabelEmail = document.getElementById("error-email");

const inputPassword = document.getElementById("password");
const errorLabelPass = document.getElementById("error-pass");

const errorLabels = document.getElementsByClassName("errors");
const formControl = document.getElementsByClassName("form-control");

// inputEmail.addEventListener("input", function () {
//   if (inputEmail.value) {
//     errorLabelEmail.innerHTML = "";
//   }
// });

// inputPassword.addEventListener("input", function () {
//   if (inputPassword.value) {
//     errorLabelPass.innerHTML = "";
//   }
// });

// Refactored
for (let i = 0; i < formControl.length; i++) {
  formControl[i].addEventListener("input", function () {
    errorLabels[i].innerHTML = "";
  });
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  if (event.submitter) {
    event.submitter.disabled = true;
  }

  console.log(event);

  // validate form here
  if (!inputEmail.value) {
    errorLabelEmail.innerHTML = "Please enter an email address.";
  }

  if (!inputPassword.value) {
    errorLabelPass.innerHTML = "Please enter a password.";
  }

  if (event.submitter) {
    event.submitter.disabled = false;
  }

  false; // we never actually want to submit the form since this is a proof of concept
});
