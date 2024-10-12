"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let loadingText = document.getElementById('loading-text');
    let loadingScreen = document.getElementById('loading-screen');
    let content = document.getElementById('content');

    let percentage = 0;
    let loadingInterval = setInterval(function() {
        percentage += 1;
        loadingText.textContent = percentage + '%';

        if (percentage >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }
    }, 50); // 5000ms (5 segundos) / 100% = 50ms por cada incremento de 1%
});