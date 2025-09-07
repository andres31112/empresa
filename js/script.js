document.addEventListener('DOMContentLoaded', () => {
    const whatsappPhoneNumber = '573013303933';
    const whatsappMessage = encodeURIComponent('Hola, me gustaría solicitar un presupuesto. He visitado su sitio web y me interesa saber más sobre sus servicios.');
    const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`;

    const whatsappLinks = document.querySelectorAll('#whatsapp-link, #whatsapp-button-cta');
    whatsappLinks.forEach(link => {
        link.href = whatsappUrl;
    });
    
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-pulse, .animate-bounce-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));

    const projectsCarousel = document.querySelector('.projects-carousel');
    const prevProjectBtn = document.querySelector('.projects-carousel-container .prev-btn');
    const nextProjectBtn = document.querySelector('.projects-carousel-container .next-btn');

    if (projectsCarousel && prevProjectBtn && nextProjectBtn) {
        const updateProjectBtns = () => {
            if (projectsCarousel.scrollLeft <= 0) {
                prevProjectBtn.classList.add('hidden');
            } else {
                prevProjectBtn.classList.remove('hidden');
            }
            if (projectsCarousel.scrollLeft >= projectsCarousel.scrollWidth - projectsCarousel.clientWidth) {
                nextProjectBtn.classList.add('hidden');
            } else {
                nextProjectBtn.classList.remove('hidden');
            }
        };

        const scrollProjectsCarousel = (carousel, direction) => {
            const itemWidth = carousel.firstElementChild.offsetWidth + 20;
            carousel.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        };

        prevProjectBtn.addEventListener('click', () => scrollProjectsCarousel(projectsCarousel, -1));
        nextProjectBtn.addEventListener('click', () => scrollProjectsCarousel(projectsCarousel, 1));

        projectsCarousel.addEventListener('scroll', updateProjectBtns);
        window.addEventListener('resize', updateProjectBtns);
        updateProjectBtns();
    }

    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    const prevTestimonialBtn = document.querySelector('.testimonials-carousel-container .prev-btn');
    const nextTestimonialBtn = document.querySelector('.testimonials-carousel-container .next-btn');

    if (testimonialsCarousel && prevTestimonialBtn && nextTestimonialBtn) {
        const updateTestimonialBtns = () => {
            if (testimonialsCarousel.scrollLeft <= 0) {
                prevTestimonialBtn.classList.add('hidden');
            } else {
                prevTestimonialBtn.classList.remove('hidden');
            }
            if (testimonialsCarousel.scrollLeft >= testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth) {
                nextTestimonialBtn.classList.add('hidden');
            } else {
                nextTestimonialBtn.classList.remove('hidden');
            }
        };

        const scrollTestimonialCarousel = (carousel, direction) => {
            const itemWidth = carousel.firstElementChild.offsetWidth + 20;
            carousel.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        };

        prevTestimonialBtn.addEventListener('click', () => scrollTestimonialCarousel(testimonialsCarousel, -1));
        nextTestimonialBtn.addEventListener('click', () => scrollTestimonialCarousel(testimonialsCarousel, 1));

        testimonialsCarousel.addEventListener('scroll', updateTestimonialBtns);
        window.addEventListener('resize', updateTestimonialBtns);
        updateTestimonialBtns();
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

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

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});