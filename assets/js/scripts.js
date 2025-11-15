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
});