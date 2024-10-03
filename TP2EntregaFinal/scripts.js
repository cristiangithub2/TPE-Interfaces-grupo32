// scripts.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Acá se puede agregar validación o hacer una llamada al backend
    if (email === "grupo32@example.com" && password === "grupo32") {
        alert("Inicio de sesión exitoso!");
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

// Añadir evento al botón de registro
document.querySelector(".register-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del botón

    // Simular registro exitoso
    const isSuccess = true; // Lógica para verificar el registro

    if (isSuccess) {
        const registerButton = document.querySelector('.register-btn');
        registerButton.classList.add('success-animation'); // Añadir clase de éxito

        // Opción para quitar la animación después de un tiempo
        setTimeout(() => {
            registerButton.classList.remove('success-animation'); // Quitar la clase de éxito después de 3 segundos
        }, 3000);
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Lógica para verificar el reCAPTCHA y enviar los datos al servidor

    const registerButton = document.querySelector('.register-btn');
    registerButton.classList.add('success-animation'); // Añadir clase de éxito

    // Quitar la clase de animación después de 3 segundos
    setTimeout(() => {
        registerButton.classList.remove('success-animation'); // Quitar la clase de éxito
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Verificar si el usuario ha completado el reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();

        if (recaptchaResponse.length === 0) {
            alert("Por favor valida que eres humano completando el reCAPTCHA.");
        } else {
            // Si el reCAPTCHA es válido, muestra la notificación de éxito
            showSuccessNotification();
            
            // Simula un retardo para enviar el formulario o realizar más validaciones.
            setTimeout(() => {
                form.submit(); // Simular el envío del formulario
            }, 3000); // Esperar 3 segundos antes de enviar el formulario
        }
    });
});

// Función para mostrar la animación de éxito
function showSuccessNotification() {
    const notification = document.getElementById('success-notification');
    notification.classList.add('show');

    // Quitar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Desaparece después de 3 segundos
}
