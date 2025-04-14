
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("SEU_PUBLIC_KEY"); // Substitua pelo seu public key
  });
  
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", form)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((error) => {
        alert("Erro ao enviar. Tente novamente.");
        console.error("Erro no envio:", error);
      });
  });
  