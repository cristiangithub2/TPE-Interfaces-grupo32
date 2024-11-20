document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const mask = document.getElementById("mask");
    const loader = document.getElementById("loader");
    const progressText = document.getElementById("progress-text"); // Nuevo elemento

    let progress = 0;

    // Controla el intervalo de tiempo para avanzar el progreso
    const interval = setInterval(() => {
        progress += 1;

        // Actualiza el ancho de la barra de carga
        progressBar.style.width = `${progress*10}%`;

        // Actualiza el texto del porcentaje
        progressText.textContent = `${progress}%`;  // Muestra el porcentaje

        // Calcula el desplazamiento del div `mask` en píxeles
        const loaderWidth = loader.offsetWidth; // Tamaño total del contenedor
        const offset = (progress / 80) * loaderWidth; // Avance proporcional en píxeles

        // Mueve el mask de acuerdo con el avance en píxeles
        mask.style.transform = `translateX(${offset - 100}px)`; 

        if (progress === 100) {
            clearInterval(interval);

            // Oculta el loader cuando la carga ha terminado
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 30); // Ajusta la velocidad del avance (el valor puede ser mayor o menor según el ritmo deseado)
});
window.addEventListener('scroll', () => {
    const layer17 = document.querySelector('.layer-17');
    const scrollPosition = window.scrollY; // Obtiene la posición del scroll en la página
    layer17.style.backgroundPositionY = `${scrollPosition * -0.5}px`; // Ajusta el valor para la velocidad de movimiento

});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const logo = document.querySelector('.layer-02');
    

    if (window.scrollY > 50) {
        header.classList.add('header-shrink');
        logo.classList.add('logo-shrink');

    } else {
        header.classList.remove('header-shrink');
        logo.classList.remove('logo-shrink');
    }



});
function resizeOnScroll() {
//agarro los layer
    const arbusto1 = document.querySelector('.layer-16');
    const arbol1 = document.querySelector('.layer-15');
    const logo = document.querySelector('.layer-02');
    const robot1 = document.querySelector('.layer-14');
    const robot2 = document.querySelector('.layer-13');
    const arbusto2 = document.querySelector('.layer-12');
    const arbol2 = document.querySelector('.layer-11');
    const robot3 = document.querySelector('.layer-10');
    const piedra4 = document.querySelector('.layer-09');
    const piedra2 = document.querySelector('.layer-08');
    const piedra1 = document.querySelector('.layer-07');
    const arbusto3 = document.querySelector('.layer-06');
    const arbol3 = document.querySelector('.layer-05');
    const piedra3 = document.querySelector('.layer-04');
    const arbusto4 = document.querySelector('.layer-03');
    


// Obtiene la posición del scroll
    const scrollY = window.scrollY;

// Escala para el logo y su desplazamiento en top
    const scaleValue = Math.max(0.3, 1 - scrollY / 600);
    const topValue = Math.min(scrollY / 2, 90);
    logo.style.top = `calc(-5px - ${topValue}px)`;
    logo.style.transform = `scale(${scaleValue})`;

  

// Escala 
    //arboles y arbustos
    const scaleValueArbol1 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbust1 = Math.max(0.3, 1 - scrollY / 7000);
    //robots
    const scaleValueRobot1 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueRobot2 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueRobot3 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbusto2 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbol2 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValuePiedra2 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValuePiedra4 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbusto3 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbol3 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValuePiedra3 = Math.max(0.3, 1 - scrollY / 7000);
    const scaleValueArbusto4 = Math.max(0.3, 1 - scrollY / 7000);


//desplazamiento
    //desplazamiento vertical en Y
    const translateYRobot1 = scrollY / 2.5; // Ajusta la velocidad de desplazamiento vertical
    const translateYRobot2 = scrollY / 2.3; // Ajusta la velocidad de desplazamiento vertical
    const translateYRobot3 = scrollY / 3.5; // Ajusta la velocidad de desplazamiento vertical
    const translateYArbusto1 = scrollY / 2.8; // Ajusta la velocidad usando un único valor
    const translateYArbol1 = scrollY / 2.7;
    const translateYArbust2 =  scrollY / 2.2;
    const translateYArbol2 =  scrollY / 2.0 ;
    const translateYPiedra2 =  scrollY / 2.0;
    const translateYPiedra4 =  scrollY / 2.0;
    const translateYPiedra1 =  scrollY / 1.95;
    const translateYArbust03 =  scrollY / 1.85;
    const translateYArbol3 =  scrollY / 1.8;
    const translateYPiedra3 =  scrollY / 2.3;
    const translateYArbusto4 =  scrollY / 2.3;
    




   

    // Aplica las transformaciones 
    arbusto1.style.transform = `scale(${scaleValueArbust1}) translateY(${translateYArbusto1}px) `;
    arbol1.style.transform = `scale(${scaleValueArbol1}) translateY(${translateYArbol1}px)`;
    robot1.style.transform = `scale(${scaleValueRobot1}) translateY(${translateYRobot1}px)`;
    robot2.style.transform = `scale(${scaleValueRobot2}) translateY(${translateYRobot2}px) `;
    robot3.style.transform = `scale(${scaleValueRobot3}) translateY(${translateYRobot3}px)`;
    arbusto2.style.transform = `scale(${scaleValueArbusto2}) translateY(${translateYArbust2}px)`;
    arbol2.style.transform = `scale(${scaleValueArbol2}) translateY(${translateYArbol2}px) `;
    piedra2.style.transform = `scale(${scaleValuePiedra2}) translateY(${translateYPiedra2}px)`;
    piedra1.style.transform = `scale(${scaleValuePiedra2}) translateY(${translateYPiedra1}px)`;
    arbusto3.style.transform = `scale(${scaleValueArbusto3}) translateY(${translateYArbust03}px) `;
    arbol3.style.transform = `scale(${scaleValueArbol3}) translateY(${translateYArbol3}px) `;
    piedra3.style.transform = `scale(${scaleValuePiedra3}) translateY(${translateYPiedra3}px) `;
    arbusto4.style.transform = `scale(${scaleValueArbusto4}) translateY(${translateYArbusto4}px) `;
    piedra4.style.transform = `scale(${scaleValuePiedra4}) translateY(${translateYPiedra4}px) `;

}

// para el navegador
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");
    const menuItems = navMenu.querySelectorAll(".items-nav");
    
    menu.addEventListener("click", function() {
        menu.classList.toggle("active");
        navMenu.classList.toggle("active");

        // Configurar el retraso de animación basado en data-speed
        if (navMenu.classList.contains("active")) {
            menuItems.forEach(item => {
                const delay = item.getAttribute("data-speed");

                // Establece el retraso de la animación
                item.style.setProperty("--animation-delay", delay);

                // Reinicia la animación manipulando el estilo en línea
                item.style.animation = "none"; // Quita la animación
                void item.offsetWidth; // Forzar un reflow para reiniciar la animación
                item.style.animation = `fadeInLeft 0.5s ease forwards var(--animation-delay)`;
            });
        } else {
            // Opcional: Ocultar los elementos del menú cuando se cierre
            menuItems.forEach(item => {
                item.style.opacity = "0";
                item.style.transform = "translateX(-20px)";
            });
        }
    });
});
// Ejecutamos la función cada vez que se haga scroll
window.addEventListener('scroll', resizeOnScroll); 

// La app + Divertida //

 // Aplicamos parallax a los personajes, el texto y el marco de fotos.
 document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax-element-mas-diversion');
    
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-speed');
      const yOffset = window.scrollY * speed;
      el.style.transform = `translateY(${yOffset}px)`;
    });
  });

  //  Las imágenes dentro del marco de fotos cambian cada 3 segundos
  const images = ["img/unnamed_elem_3.png", "img/unnamed_elem_4.png", "img/unnamed_elem_6.png"];
let currentIndex = 0;

function changeImage() {
  const slideshowImage = document.querySelector('.slideshow-image');
  currentIndex = (currentIndex + 1) % images.length;
  slideshowImage.src = images[currentIndex];

  // Aseguramos que la clase 'additional' esté siempre aplicada
  slideshowImage.classList.add('additional_div');
}

setInterval(changeImage, 3000); // Cambia cada 3 segundos

//3 cards con texto aparecen cuando se scrollea con una diferencia de 0.3 segundos.

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".extra-content-diver .item_mas_diversion");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // Añadir la clase 'visible' con un retraso para el efecto en cascada
              setTimeout(() => {
                  entry.target.classList.add("visibleDiversion");
              }, index * 300); // 0.3 segundos de diferencia entre cada tarjeta
          }
      });
  }, { threshold: 0.5 }); // Detecta cuando el 10% del elemento entra en vista

  items.forEach(item => observer.observe(item));
});
// Descubre el juego que convierte las Matemáticas en diversión //

// Código que se encargará de mover la imagen en la dirección opuesta al mouse:

document.addEventListener("mousemove", function(event) {
    const numberBlocksImage = document.querySelector(".numberBlocks-bottom");

    // Obtener las dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Obtener las coordenadas del mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calcular la dirección del movimiento contrario
    const moveX = (mouseX / windowWidth) * 30 - 15; // Ajusta la magnitud de movimiento
    const moveY = (mouseY / windowHeight) * 30 - 15; // Ajusta la magnitud de movimiento

    // Aplica la transformación CSS para mover la imagen
    numberBlocksImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
// mas amigos mas diversión 
//al estar en -1 no tiene ninguna cargada
let currentImageIndex = -1; // Variable para rastrear la imagen actual

//cuando hacemos scroll se ejecuta lo de adentro
document.addEventListener("scroll", () => {
    //agarramos todos los textos
    const sections = document.querySelectorAll(".div-masAmigos");
    //agarramos todas las img ( Es una lista de las rutas a las imágenes que se mostrarán en la pag.)
    const images = [
        "./img/9-0.png",
        "./img/9-1.png",
        "./img/9-2.png",
        "./img/9-3.png",
        "./img/9-4.png",
        "./img/9-5.png",
        "./img/9-6.png",
        "./img/9-7.png",
        "./img/9-8.png",
        "./img/9-9.png",
        "./img/9-10.png",
    ];

    //agarramos la imagn del continer
    const imgSticky = document.querySelector(".img-sticky");
    let index = currentImageIndex; // Mantener el índice actual

    //Encontramos qué sección está en el centro de la pantalla:
    sections.forEach((section, i) => {
        //por cada seccion usamos el getBoudin... para calcular s posicion en la pantalla
        const rect = section.getBoundingClientRect();

        
        const sectionCenter = rect.top + rect.height / 2; // Centro de la sección
        const viewportCenter = window.innerHeight / 2; // Centro de la ventana
        const textElement = section.querySelector(".text-masAmigos");
        // //aca verificamos si la seccion esta cerca de la  ventan dentro de un margen de 100 px arriba y abajo
        if (sectionCenter >= viewportCenter - 100 && sectionCenter <= viewportCenter + 100) {
            //Si sí está cerca, guardamos el índice de esa seccion index = i
            index = i;
           
        }
    });
        // Zoom progresivo vinculado al scroll
    sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const start = window.innerHeight * 0.3; // Comienza el zoom antes del centro
        const end = window.innerHeight * 0.7; // Termina el zoom después del centro

        if (rect.top >= start && rect.bottom <= end) {
            const progress = 1 - Math.abs(rect.top - window.innerHeight / 2) / (end - start);
            const zoom = 1 + progress * 0.1; // Ajusta la escala (1.0 a 1.1)

            imgSticky.style.transform = `scale(${zoom})`; // Cambia el zoom según el progreso
        }
    });
    if (index !== currentImageIndex && images[index]) {
        // Cambiar imagen solo si el índice ha cambiado
        currentImageIndex = index;

        imgSticky.style.opacity = "0"; // Desaparece suavemente (opasidad)
        setTimeout(() => {
            imgSticky.src = images[index]; // Cambiamos la imagen (fade-out)
            imgSticky.style.opacity = "1"; //Reaparece suavemente (Fade-in)
        }, 200);
    }
});

// Mira el video
// Selecciona todos los elementos que tienen un efecto de parallax
const parallaxElements = document.querySelectorAll('[data-speed]');

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Obtén la posición actual del scroll

    parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed')); // Obtén el valor de data-speed
        const offset = scrollY * speed; // Calcula el desplazamiento basado en el speed
        element.style.transform = `translateY(${offset}px)`; // Aplica la transformación
    });

    // Sincroniza el movimiento del video con su contenedor
    const videoContainer = document.querySelector('.parallax-container-laApp');
    const video = document.querySelector('.parallax-video-laApp');
   
    if (videoContainer && video) {
        const speed = parseFloat(videoContainer.getAttribute('data-speed')); // Velocidad del contenedor
        const offset = scrollY * speed; // Desplazamiento común para ambos
        videoContainer.style.transform = `translateY(${offset}px)`;
        video.style.transform = `translateY(${offset}px)`;
    }
});
const iframe = document.querySelector('.parallax-video-laApp');
if (iframe) {
    iframe.style.transform = 'none'; // Elimina cualquier translateY preexistente
    iframe.style.marginTop = '-414px'; // Ajusta este valor según la necesidad
}

//Experimenta Efecto3D




const modelViewer = document.querySelector('#reveal');


document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 360; 
    const y = (event.clientY / window.innerHeight - 0.5) * 30;  
    
    modelViewer.setAttribute('camera-orbit', `${x}deg ${y}deg 2.5m`);
});
document.querySelector('#reveal').addEventListener('load', () => {
    document.querySelector('.image-container-img').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.querySelector('.subscription-button');
    const toastMessage = document.getElementById("toast-message");
    const emailInput = document.getElementById("email-input");

    // Agrega el evento click al botón
    btnForm.addEventListener('click', validateEmail);

    function validateEmail() {
        const email = emailInput.value.trim();

        // Validar correo electrónico
        if (!email.endsWith("@gmail.com")) {
            showToast("Por favor, ingrese un correo válido que termine en @gmail.com.", true);
            emailInput.classList.add("error");
            emailInput.focus();
            return;
        }

        // Si el correo es válido, pide contraseña
        emailInput.type = "password";
        emailInput.value = ""; // Limpia el valor ingresado
        emailInput.placeholder = "Ingresa tu contraseña";
        emailInput.classList.remove("error");
        btnForm.textContent = "CONFIRMAR";

        // Cambiar el evento del botón
        btnForm.removeEventListener('click', validateEmail);
        btnForm.addEventListener('click', confirmRegistration);
    }

    function confirmRegistration() {
        showToast("Registro exitoso.", false);

        // Limpia y resetea el formulario después de unos segundos
        setTimeout(() => {
            emailInput.type = "email";
            emailInput.value = "";
            emailInput.placeholder = "Ingresa aquí tu correo";
            btnForm.textContent = "SUSCRIBIRSE";
            btnForm.removeEventListener('click', confirmRegistration);
            btnForm.addEventListener('click', validateEmail);
        }, 3000);
    }

    // Función para mostrar el mensaje
    function showToast(message, isError) {
        toastMessage.textContent = message;
        toastMessage.style.backgroundColor = isError ? "red" : "green";
        toastMessage.classList.add("show");

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
            toastMessage.classList.remove("show");
        }, 3000);
    }
});
