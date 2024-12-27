document.getElementById('showToastBtn').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var toastElement = document.querySelector('.toast');

    var toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 3000
    });

    if (userInput.trim() !== '') {
        document.querySelector('.toast-body').textContent = userInput;
        toast.show();
    } else {
        alert('Por favor, digite algo no input.');
    }
});

window.alert = function(message) {
    var toastElement = document.querySelector('.toast');
    var toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 3000
    });

    // Define o corpo do toast para a mensagem do alerta
    document.querySelector('.toast-body').textContent = message;

    // Exibe o toast
    toast.show();
};