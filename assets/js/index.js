// importing lazy loading with module
import { initLazyLoading } from "./lazyLoading.js";
document.addEventListener('DOMContentLoaded', initLazyLoading);

// validate form
const firstName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const btn_submit = document.querySelector("#btnSubmit");

btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(el => el.remove());

    const showError = (input, message) => {
        const errorMsg = document.createElement("span");
        errorMsg.style.color = "red";
        errorMsg.classList.add("error-message");
        errorMsg.textContent = message;
        input.parentNode.insertBefore(errorMsg, input.nextSibling);
    };

    const nameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let isValid = true;

    if (nameValue.length < 3) {
        showError(firstName, "O nome deve conter pelo menos 2 caracteres.");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        showError(email, "Por favor, insira um e-mail válido.");
        isValid = false;
    }

    if (messageValue.length === 0) {
        showError(message, "A mensagem não pode estar vazia.");
        isValid = false;
    }

    if (!isValid) return;

    const dados = {
        name: nameValue,
        email: emailValue,
        message: messageValue
    };

    firstName.value = "";
    email.value = "";
    message.value = "";
    firstName.focus();

    console.table(dados);
});
