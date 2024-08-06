document.addEventListener('DOMContentLoaded', () => {
    const enButton = document.getElementById('en-btn');
    const esButton = document.getElementById('es-btn');

    // Set initial language
    let language = localStorage.getItem('language') || 'en';
    updateLanguage(language);

    // Event listeners for buttons
    enButton.addEventListener('click', () => {
        updateLanguage('en');
        localStorage.setItem('language', 'en');
    });

    esButton.addEventListener('click', () => {
        updateLanguage('es');
        localStorage.setItem('language', 'es');
    });

    function updateLanguage(lang) {
        // Common elements
        const navLinks = document.querySelectorAll('.navbar a');
        const footerSocial = document.querySelector('.social-media');
        
        // Update navigation links
        navLinks.forEach(link => {
            switch (link.textContent) {
                case 'Home':
                    link.textContent = lang === 'en' ? 'Home' : 'Inicio';
                    break;
                case 'Services':
                    link.textContent = lang === 'en' ? 'Services' : 'Servicios';
                    break;
                case 'Locations':
                    link.textContent = lang === 'en' ? 'Locations' : 'Ubicaciones';
                    break;
            }
        });

        // Update footer social media links (if needed)
        // Assuming you want to translate social media labels
        // Example: footerSocial.querySelector('.social-icon')...

        if (document.body.classList.contains('index-page')) {
            // Index page content
            if (lang === 'en') {
                document.querySelector('.hero h1').textContent = 'Coverage When You Need It';
                document.querySelector('.hero p').textContent = 'Get a quote and start saving today!';
                document.querySelector('#quote-btn').textContent = 'Get a Quote';
                document.querySelector('.features h2').textContent = 'Why Choose Us?';
                document.querySelectorAll('.features li')[0].innerHTML = '<i class="fas fa-lock"></i> Secure Coverage';
                document.querySelectorAll('.features li')[1].innerHTML = '<i class="fas fa-dollar-sign"></i> Affordable Rates';
                document.querySelectorAll('.features li')[2].innerHTML = '<i class="fas fa-phone"></i> 24/7 Support';
            } else if (lang === 'es') {
                document.querySelector('.hero h1').textContent = 'Cobertura Cuando La Necesites';
                document.querySelector('.hero p').textContent = '¡Obtén una cotización y comienza a ahorrar hoy!';
                document.querySelector('#quote-btn').textContent = 'Obtener Cotización';
                document.querySelector('.features h2').textContent = '¿Por Qué Elegirnos?';
                document.querySelectorAll('.features li')[0].innerHTML = '<i class="fas fa-lock"></i> Cobertura Segura';
                document.querySelectorAll('.features li')[1].innerHTML = '<i class="fas fa-dollar-sign"></i> Tarifas Asequibles';
                document.querySelectorAll('.features li')[2].innerHTML = '<i class="fas fa-phone"></i> Soporte 24/7';
            }
        } else if (document.body.classList.contains('services-page')) {
            // Services page content
            if (lang === 'en') {
                document.querySelector('h1').textContent = 'Our Services';
                document.querySelector('p').textContent = 'Details about the services we offer.';
            } else if (lang === 'es') {
                document.querySelector('h1').textContent = 'Nuestros Servicios';
                document.querySelector('p').textContent = 'Detalles sobre los servicios que ofrecemos.';
            }
        } else if (document.body.classList.contains('locations-page')) {
            // Locations page content
            const locations = document.querySelectorAll('.location-item');
            if (lang === 'en') {
                locations.forEach(location => {
                    const h2 = location.querySelector('h2');
                    const buttons = location.querySelectorAll('button');

                    if (h2) {
                        switch (h2.textContent) {
                            case 'Mcallen':
                                h2.textContent = 'Mcallen';
                                break;
                            case 'Harlingen':
                                h2.textContent = 'Harlingen';
                                break;
                            case 'Brownsville':
                                h2.textContent = 'Brownsville';
                                break;
                            case 'La Feria':
                                h2.textContent = 'La Feria';
                                break;
                            case 'San Benito':
                                h2.textContent = 'San Benito';
                                break;
                        }
                    }

                    if (buttons.length > 0) {
                        buttons[0].textContent = 'Request a Quote';
                        buttons[1].textContent = 'Get Directions';
                    }
                });
            } else if (lang === 'es') {
                locations.forEach(location => {
                    const h2 = location.querySelector('h2');
                    const buttons = location.querySelectorAll('button');

                    if (h2) {
                        switch (h2.textContent) {
                            case 'Mcallen':
                                h2.textContent = 'Mcallen';
                                break;
                            case 'Harlingen':
                                h2.textContent = 'Harlingen';
                                break;
                            case 'Brownsville':
                                h2.textContent = 'Brownsville';
                                break;
                            case 'La Feria':
                                h2.textContent = 'La Feria';
                                break;
                            case 'San Benito':
                                h2.textContent = 'San Benito';
                                break;
                        }
                    }

                    if (buttons.length > 0) {
                        buttons[0].textContent = 'Solicitar una Cotización';
                        buttons[1].textContent = 'Obtener Direcciones';
                    }
                });
            }
        }
    }
});
