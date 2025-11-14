document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-icon');
    const sideMenu = document.getElementById('side-menu');

    if (hamburger && sideMenu) {
        hamburger.addEventListener('click', () => {
            sideMenu.classList.toggle('open');
        });

        // Fechar menu ao clicar em um link
        sideMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('open');
            });
        });
    }

    // Rolagem suave para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});