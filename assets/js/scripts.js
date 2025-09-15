// Aguarda o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA ANTIGA PARA O MENU HAMBÚRGUER ---
    const hamburger = document.getElementById('hamburger-icon');
    const sideMenu = document.getElementById('side-menu');

    if (hamburger && sideMenu) {
        hamburger.addEventListener('click', function() {
            sideMenu.classList.toggle('open');
        });
    }

    // --- NOVA LÓGICA PARA O EFEITO DE DIGITAÇÃO ---
    
    // Função que cria o efeito de digitação
    function typeEffect(element, speed) {
        const text = element.innerHTML;
        element.innerHTML = "";
        element.classList.add('typing-cursor'); // Adiciona o cursor piscando
        
        let i = 0;
        const timer = setInterval(function() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.remove('typing-cursor'); // Remove o cursor no final
            }
        }, speed);
    }

    // Pega os elementos pelo ID que criamos no HTML
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    // Inicia o efeito (primeiro o título, depois o subtítulo)
    if (heroTitle) {
        const originalTitle = heroTitle.innerHTML;
        heroTitle.innerHTML = ''; // Limpa o texto original para não dar um "flash"

        setTimeout(function(){
            heroTitle.innerHTML = originalTitle; // Coloca o texto de volta para a função ler
            typeEffect(heroTitle, 100); // 100ms de velocidade para o título
        }, 500); // Espera 500ms para começar
    }
    
    if (heroSubtitle) {
        const originalSubtitle = heroSubtitle.innerHTML;
        heroSubtitle.innerHTML = '';

        // O subtítulo começa a digitar depois que o título termina
        // Duração do Título = (comprimento do texto * velocidade)
        const titleDuration = (heroTitle.innerHTML.length * 100) + 1000; // Adiciona 1s de pausa

        setTimeout(function(){
            heroSubtitle.innerHTML = originalSubtitle;
            typeEffect(heroSubtitle, 50); // 50ms de velocidade para o subtítulo
        }, titleDuration);
    }
});