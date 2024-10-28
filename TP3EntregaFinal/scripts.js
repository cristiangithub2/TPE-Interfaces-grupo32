document.addEventListener('DOMContentLoaded', function () {
    const captchaCheckbox = document.getElementById('captchaCheckbox');
    const submitButton = document.getElementById('submitButton');
    const registerForm = document.getElementById('register-form');
    const notification = document.getElementById('success-notification');

    // Verificar si el checkbox está marcado y habilitar el botón
    captchaCheckbox.addEventListener('change', function () {
        submitButton.disabled = !captchaCheckbox.checked;
    });

    // Manejamos el evento de envío del formulario
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Evita que el formulario se envíe

        // Muestra la notificación de éxito
        notification.style.display = 'block';  // Hace visible la notificación
        notification.classList.add('show');  // Agrega la clase 'show' para hacerla visible gradualmente

        // Después de 3 segundos, redirige al home
        setTimeout(function () {
            window.location.href = 'home.html';  // Redirige al home después de 3 segundos
        }, 3000);
    });
});
