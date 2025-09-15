document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.getElementById('hamburger-icon');
    const sideMenu = document.getElementById('side-menu');

    if (hamburger && sideMenu) {
        hamburger.addEventListener('click', function() {
            sideMenu.classList.toggle('open');
        });
    }

    function typeEffect(element, speed) {
        const text = element.innerHTML;
        element.innerHTML = "";
        element.classList.add('typing-cursor');
        
        let i = 0;
        const timer = setInterval(function() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.remove('typing-cursor'); 
            }
        }, speed);
    }


    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroTitle) {
        const originalTitle = heroTitle.innerHTML;
        heroTitle.innerHTML = ''; 

        setTimeout(function(){
            heroTitle.innerHTML = originalTitle; 
            typeEffect(heroTitle, 100);
        }, 500); 
    }
    
    if (heroSubtitle) {
        const originalSubtitle = heroSubtitle.innerHTML;
        heroSubtitle.innerHTML = '';
        const titleDuration = (heroTitle.innerHTML.length * 100) + 1000; 

        setTimeout(function(){
            heroSubtitle.innerHTML = originalSubtitle;
            typeEffect(heroSubtitle, 50); 
        }, titleDuration);
    }
});