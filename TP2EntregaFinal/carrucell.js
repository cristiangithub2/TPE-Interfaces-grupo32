"use strict";

document.addEventListener("DOMContentLoaded", load);/**/

function load() {
    // Inicializamos los carruseles de recomendados y los de categoria
    initRecommendedCarousel();
    initCategoryCarousel();
}

// Función para inicializar el carrusel recomendado
function initRecommendedCarousel() {
    const carruseles = document.querySelectorAll(".recommended");

    carruseles.forEach((categoria) => {
        const carrusel = categoria.querySelector(".specials");
        const btnLeft = categoria.querySelector(".btn-left-recommended");
        const btnRight = categoria.querySelector(".btn-right-recommended");

        // Función para mover el carrusel hacia la derecha
        const moveRightRecommended = () => {
            const width = carrusel.getBoundingClientRect().width;
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth; // Máximo desplazamiento permitido

            if (carrusel.scrollLeft + width <= maxScrollLeft) {
                carrusel.scrollLeft += width;
            } else {
                console.log("Ya estás en el último elemento.");
            }
        };

        // Función para mover el carrusel hacia la izquierda
        const moveLeftRecommended = () => {
            const width = carrusel.getBoundingClientRect().width;

            if (carrusel.scrollLeft > 0) {
                carrusel.scrollLeft -= width;
            } else {
                console.log("Ya estás en el primer elemento.");
            }
        };

        // Asignar eventos a los botones
        btnRight.addEventListener("click", moveRightRecommended);
        btnLeft.addEventListener("click", moveLeftRecommended);
    });
}

// Función para inicializar el carrusel de categoría
function initCategoryCarousel() {
    const categorias = document.querySelectorAll(".category"); // Seleccionamos todas las categorias

    categorias.forEach((categoria) => {
        const carrusel = categoria.querySelector(".carrusel"); // Seleccionamos el carrusel de la categoria actual

        const btnLeft = categoria.querySelector(".btn-left");
        const btnRight = categoria.querySelector(".btn-right");
        const btnLeftMobile = categoria.querySelector(".btn-left-mobile");
        const btnRightMobile = categoria.querySelector(".btn-right-mobile");

        // Funcion para mover el carrusel hacia la derecha
        const moveRightCategory = () => {
            const width = carrusel.clientWidth; // Cambiado a clientWidth para un mejor manejo
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth; // Máximo desplazamiento permitido
        
            // Comprueba si se puede desplazar hacia la derecha
            if (carrusel.scrollLeft < maxScrollLeft) {
                carrusel.scrollLeft += width;
            } else {
                console.log("Ya estás en el último elemento.");
            }
        };

        // Función para mover el carrusel hacia la izquierda
        const moveLeftCategory = () => {
            const width = carrusel.getBoundingClientRect().width;

            if (carrusel.scrollLeft > 0) {
                carrusel.scrollLeft -= width;
            } else {
                console.log("Ya estás en el primer elemento.");
            }
        };

        // Asignar eventos a los botones
        btnRight.addEventListener("click", moveRightCategory);
        btnLeft.addEventListener("click", moveLeftCategory);
        btnRightMobile.addEventListener("click", moveRightCategory);
        btnLeftMobile.addEventListener("click", moveLeftCategory);
    });
}