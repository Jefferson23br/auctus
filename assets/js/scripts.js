document.addEventListener('DOMContentLoaded', function () {
    // Se no futuro você quiser alguma animação, scroll suave entre seções, etc.,
    // podemos adicionar aqui. Por enquanto, mantemos simples.

    // Exemplo de rolagem suave para âncoras internas (se ainda usar algum #id na mesma página):
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 0; // sem header fixo

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});