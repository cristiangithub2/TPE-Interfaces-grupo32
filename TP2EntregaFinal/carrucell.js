"use strict";

document.addEventListener("DOMContentLoaded", load);/**/

function load() {
    // Inicializamos los carruseles de recomendados y los de categoría
    initRecommendedCarousel();
    initCategoryCarousel(); // Asumiendo que también tienes esta función
}

// Función para inicializar el carrusel recomendado
function initRecommendedCarousel() {
    const carruseles = document.querySelectorAll(".recommended");

    carruseles.forEach((categoria) => {
        const carrusel = categoria.querySelector(".specials");
        const cards = carrusel.querySelectorAll(".recommended-card");
        const btnLeft = categoria.querySelector(".btn-left-recommended");
        const btnRight = categoria.querySelector(".btn-right-recommended");

        let currentIndex = 0; // Para rastrear la tarjeta activa

        // Función para actualizar las clases activas y inactivas
        const updateCardClasses = () => {
            cards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.classList.add("active-card");
                    card.classList.remove("inactive-card");
                } else {
                    card.classList.add("inactive-card");
                    card.classList.remove("active-card");
                }
            });
        };

        // Función para mover el carrusel hacia la derecha
        const moveRightRecommended = () => {
            const width = carrusel.clientWidth; 
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

            if (carrusel.scrollLeft + width <= maxScrollLeft) {
                carrusel.scrollLeft += width; 
                if (currentIndex < cards.length - 1) {
                    currentIndex++; // Avanza al siguiente card
                }
                updateCardClasses(); // Actualiza las clases después de mover
            } else {
                console.log("Ya estás en el último elemento.");
            }
        };

        // Función para mover el carrusel hacia la izquierda
        const moveLeftRecommended = () => {
            const width = carrusel.clientWidth; 

            if (carrusel.scrollLeft > 0) {
                carrusel.scrollLeft -= width; 
                if (currentIndex > 0) {
                    currentIndex--; // Retrocede al card anterior
                }
                updateCardClasses(); // Actualiza las clases después de mover
            } else {
                console.log("Ya estás en el primer elemento.");
            }
        };

        // Inicializar las clases en el primer render
        updateCardClasses();

        // Asignar eventos a los botones
        btnRight.addEventListener("click", moveRightRecommended);
        btnLeft.addEventListener("click", moveLeftRecommended);
    });
}

// Asegúrate de llamar a la función `load` cuando el DOM esté completamente cargado
function initCategoryCarousel() {
    const categorias = document.querySelectorAll(".category");

    categorias.forEach((categoria) => {
        const carrusel = categoria.querySelector(".carrusel");
        const cards = carrusel.querySelectorAll(".game-card");
        const btnLeft = categoria.querySelector(".btn-left");
        const btnRight = categoria.querySelector(".btn-right");
        const btnLeftMobile = categoria.querySelector(".btn-left-mobile");
        const btnRightMobile = categoria.querySelector(".btn-right-mobile");

        // Función para achicar las tarjetas mientras el carrusel está en movimiento
        const shrinkCards = () => {
            cards.forEach((card) => {
                card.classList.add("shrink-card");
            });
        };

        // Función para restaurar las tarjetas a su tamaño original
        const restoreCards = () => {
            cards.forEach((card) => {
                card.classList.remove("shrink-card");
            });
        };

        // Función para aplicar la animación al mover las tarjetas
        const moveCategory = (direction) => {
            const width = carrusel.clientWidth;
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
            let newScrollLeft;

            if (direction === "right") {
                newScrollLeft = Math.min(carrusel.scrollLeft + width, maxScrollLeft);
            } else if (direction === "left") {
                newScrollLeft = Math.max(carrusel.scrollLeft - width, 0);
            }

            if (newScrollLeft !== carrusel.scrollLeft) {
                shrinkCards();  // Achicar las tarjetas al moverse
                carrusel.scrollLeft = newScrollLeft;
                setTimeout(restoreCards, 500);  // Restaurar el tamaño de las tarjetas después de la animación
            }
        };

        // Asignar eventos a los botones
        btnRight.addEventListener("click", () => {
            moveCategory("right");
        });
        btnLeft.addEventListener("click", () => {
            moveCategory("left");
        });
        btnRightMobile.addEventListener("click", () => {
            moveCategory("right");
        });
        btnLeftMobile.addEventListener("click", () => {
            moveCategory("left");
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initCategoryCarousel();
});     
// Selecciona todos los carruseles
const carruseles = document.querySelectorAll('.carrusel');

// Función para actualizar los filtros
function updateFilters(carrusel) {
    const filterLeft = carrusel.parentElement.querySelector('.div-filter-left');
    const filterRight = carrusel.parentElement.querySelector('.div-filter-right');


    const isAtStart = carrusel.scrollLeft === 0; // Verifica si está al inicio
    const isAtEnd = carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth -1; // Verifica si está al final

    // Actualiza la opacidad de los filtros
    filterLeft.style.opacity = isAtStart ? '0' : '1';
    filterRight.style.opacity = isAtEnd ? '0' : '1';
    filterRight.style.background = isAtEnd ? 'transparent' : ''; // Restaurar fondo si no está al final
}

// Función para mover el carrusel
function moveCarrusel(carrusel, direction) {
    const scrollAmount = direction === 'left' ? -carrusel.clientWidth : carrusel.clientWidth;
    carrusel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Usar un timeout para asegurarnos de que el scroll se complete antes de actualizar filtros
    setTimeout(() => updateFilters(carrusel), 300); // Ajustar el tiempo según sea necesario
}

// Agrega el evento 'scroll' a cada carrusel
carruseles.forEach(carrusel => {
    // Actualiza los filtros al cargar la página
    updateFilters(carrusel);

    // Actualiza los filtros cuando el carrusel se desplaza
    carrusel.addEventListener('scroll', () => {
        updateFilters(carrusel);
    });

    // Agregar los botones de navegación
    const btnLeft = carrusel.parentElement.querySelector('.btn-left');
    const btnRight = carrusel.parentElement.querySelector('.btn-right');

    if (btnLeft) {
        btnLeft.addEventListener('click', () => {
            moveCarrusel(carrusel, 'left');
        });
    }

    if (btnRight) {
        btnRight.addEventListener('click', () => {
            moveCarrusel(carrusel, 'right');
        });
    }

    
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');

    // Evento de clic para abrir/cerrar el menu
    menuIcon.addEventListener("click", function() {
        sideNav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic en el en el menu
    overlay.addEventListener("click", function() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const perfilIcon = document.querySelector(".perfil");
    const profileP = document.querySelector('.profile-panel');
    const overlay = document.querySelector('.overlay');

    perfilIcon.addEventListener("click", function(){
        profileP.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener("click", function() {
        profileP.classList.remove('active');
        overlay.classList.remove('active');
    });

});
document.addEventListener("DOMContentLoaded", load);