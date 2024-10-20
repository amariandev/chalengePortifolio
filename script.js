const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = 'Enviando...';

    // Pegando os valores do formulário
    const fromName = document.getElementById('from_name').value;
    const fromEmail = document.getElementById('from_email').value; // Captura o e-mail do remetente
    const message = document.getElementById('message').value;

    // Criando os parâmetros para passar no emailjs.send
    const templateParams = {
        from_name: fromName,
        from_email: fromEmail, // Certifique-se de enviar o e-mail
        message: message
    };

    emailjs.send('service_pguairp', 'template_sdnlwef', templateParams)
        .then(function() {
            statusMessage.textContent = 'Mensagem enviada com sucesso!';
        }, function(error) {
            statusMessage.textContent = 'Erro no envio: ' + JSON.stringify(error);
        });
});
const botaoModoNoturno = document.getElementById('modo-noturno');

botaoModoNoturno.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

