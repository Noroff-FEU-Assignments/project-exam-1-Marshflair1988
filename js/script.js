

const form = document.querySelector(".contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm() {
    event.preventDefault();

    console.log("hello");
}

form.addEventListener("submit", validateForm)
