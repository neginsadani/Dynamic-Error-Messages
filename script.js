"use strict";

const users = [];
const form = document.querySelector(".userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());

  const name = document.querySelector(".name").value.trim();
  const age = parseInt(document.querySelector(".age").value, 10);

  let hasError = false;

  if (!name) {
    const nameError = document.createElement("div");
    nameError.classList.add("error-message");
    nameError.textContent = "نام نمی‌تواند خالی باشد.";
    form.insertBefore(nameError, document.querySelector(".age").nextSibling);
    hasError = true;
  }

  if (isNaN(age) || age < 18 || age > 100) {
    const ageError = document.createElement("div");
    ageError.classList.add("error-message");
    ageError.textContent = "سن باید یک عدد بین ۱۸ تا ۱۰۰ باشد.";
    form.insertBefore(ageError, document.querySelector(".age").nextSibling);
    hasError = true;
  }

  if (!hasError) {
    const user = {
      name: name,
      age: age,
    };

    users.push(user);
    console.log(users);
    form.reset();
  }
});
