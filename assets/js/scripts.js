document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-icon');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuClose = document.getElementById('side-menu-close');

    // Abre/fecha menu lateral ao clicar no hambúrguer
    if (hamburger && sideMenu) {
        hamburger.addEventListener('click', () => {
            sideMenu.classList.toggle('open');
        });
    }

    // Fecha menu ao clicar no botão X
    if (sideMenu && sideMenuClose) {
        sideMenuClose.addEventListener('click', () => {
            sideMenu.classList.remove('open');
        });
    }

    // Fecha menu ao clicar em qualquer link dentro dele
    if (sideMenu) {
        sideMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('open');
            });
        });
    }

    // Rolagem suave para âncoras internas (se usar #id na mesma página)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====
    // CARROSSEL DE DEPOIMENTOS
    // ====
    
    const carousel = document.getElementById('testimonials-carousel');
    const indicatorsContainer = document.getElementById('testimonials-indicators');
    
    if (carousel && indicatorsContainer) {
        const cards = carousel.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;
        
        // Determina quantos cards mostrar por vez baseado na largura da tela
        function getCardsPerView() {
            const width = window.innerWidth;
            if (width <= 480) return 1;
            if (width <= 768) return 2;
            if (width <= 992) return 3;
            return 4;
        }
        
        let cardsPerView = getCardsPerView();
        let currentIndex = 0;
        let autoplayInterval;
        
        // Calcula o número total de páginas
        function getTotalPages() {
            return Math.ceil(totalCards / cardsPerView);
        }
        
        // Cria os indicadores
        function createIndicators() {
            indicatorsContainer.innerHTML = '';
            const totalPages = getTotalPages();
            
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('div');
                dot.classList.add('indicator-dot');
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    goToPage(i);
                    resetAutoplay();
                });
                
                indicatorsContainer.appendChild(dot);
            }
        }
        
        // Atualiza a posição do carrossel
        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 24; // gap entre os cards
            const offset = currentIndex * cardsPerView * (cardWidth + gap);
            
            carousel.style.transform = `translateX(-${offset}px)`;
            
            // Atualiza indicadores
            const dots = indicatorsContainer.querySelectorAll('.indicator-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Vai para uma página específica
        function goToPage(pageIndex) {
            const totalPages = getTotalPages();
            currentIndex = pageIndex;
            
            // Loop infinito
            if (currentIndex >= totalPages) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalPages - 1;
            }
            
            updateCarousel();
        }
        
        // Próxima página
        function nextPage() {
            goToPage(currentIndex + 1);
        }
        
        // Página anterior
        function prevPage() {
            goToPage(currentIndex - 1);
        }
        
        // Autoplay
        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                nextPage();
            }, 5000); // Muda a cada 5 segundos
        }
        
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }
        
        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }
        
        // Pausa o autoplay quando o mouse está sobre o carrossel
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        
        // Suporte para touch/swipe em dispositivos móveis
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay();
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoplay();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextPage(); // Swipe left
                } else {
                    prevPage(); // Swipe right
                }
            }
        }
        
        // Recalcula ao redimensionar a janela
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newCardsPerView = getCardsPerView();
                
                if (newCardsPerView !== cardsPerView) {
                    cardsPerView = newCardsPerView;
                    currentIndex = 0;
                    createIndicators();
                    updateCarousel();
                }
            }, 250);
        });
        
        // Inicializa
        createIndicators();
        updateCarousel();
        startAutoplay();
    }
});