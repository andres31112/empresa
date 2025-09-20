document.addEventListener('DOMContentLoaded', () => {

    /**
     * @fileoverview Módulo de JavaScript para manejar interacciones y animaciones en el sitio web.
     * @version 1.1.0
     * @author [Tu Nombre]
     */

    'use strict';

    // =========================================================================
    // 1. Configuración de Enlaces de WhatsApp
    // =========================================================================
    const WA_PHONE_NUMBER = '573013303933';
    const WA_MESSAGE = encodeURIComponent('Hola, me gustaría solicitar un presupuesto. He visitado su sitio web y me interesa saber más sobre sus servicios.');
    const WA_URL = `https://wa.me/${WA_PHONE_NUMBER}?text=${WA_MESSAGE}`;

    /**
     * Inicializa los enlaces de WhatsApp en el documento.
     */
    const initWhatsAppLinks = () => {
        const whatsappLinks = document.querySelectorAll('#whatsapp-link, #whatsapp-button-cta');
        whatsappLinks.forEach(link => {
            link.href = WA_URL;
        });
    };

    // =========================================================================
    // 2. Animaciones al hacer scroll (Intersection Observer)
    // =========================================================================
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-pulse, .animate-bounce-in, .animate-fade-down, .animate-slide-down, .animate-rotate-in, .animate-flip-in, .animate-zoom-in, .animate-blur-in, .animate-glow-in, .animate-wobble-in');

    /**
     * Crea y configura un Intersection Observer para activar animaciones.
     */
    const setupAnimations = () => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }); // Un pequeño margen para mejor experiencia

        animatedElements.forEach(el => observer.observe(el));
    };

    // =========================================================================
    // 3. Funcionalidad de Carruseles
    // =========================================================================
    /**
     * Configura la funcionalidad de un carrusel.
     * @param {string} carouselSelector - Selector CSS del carrusel.
     * @param {string} prevBtnSelector - Selector CSS del botón de retroceso.
     * @param {string} nextBtnSelector - Selector CSS del botón de avance.
     */
    const setupCarousel = (carouselSelector, prevBtnSelector, nextBtnSelector) => {
        const carousel = document.querySelector(carouselSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);

        if (!carousel || !prevBtn || !nextBtn) return;

        /**
         * Actualiza el estado de los botones del carrusel (ocultar/mostrar).
         */
        const updateBtns = () => {
            prevBtn.classList.toggle('hidden', carousel.scrollLeft <= 0);
            nextBtn.classList.toggle('hidden', carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth);
        };

        /**
         * Desplaza el carrusel en una dirección específica.
         * @param {number} direction - 1 para avanzar, -1 para retroceder.
         */
        const scrollCarousel = (direction) => {
            const itemWidth = carousel.firstElementChild.offsetWidth + 20; // 20px de gap
            carousel.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        };

        prevBtn.addEventListener('click', () => scrollCarousel(-1));
        nextBtn.addEventListener('click', () => scrollCarousel(1));
        carousel.addEventListener('scroll', updateBtns);
        window.addEventListener('resize', updateBtns);
        updateBtns();
    };

    // =========================================================================
    // 4. Navegación y Encabezado
    // =========================================================================
    /**
     * Maneja el menú de hamburguesa para la navegación móvil.
     */
    const setupMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    };

    /**
     * Añade la clase 'scrolled' al navbar al hacer scroll.
     */
    const setupStickyNavbar = () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    };

    // =========================================================================
    // 5. Inicialización de Todas las Funcionalidades
    // =========================================================================
    initWhatsAppLinks();
    setupAnimations();
    setupCarousel('.projects-carousel', '.projects-carousel-container .prev-btn', '.projects-carousel-container .next-btn');
    setupMobileMenu();
    setupStickyNavbar();
});
