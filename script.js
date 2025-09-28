// Animation des cartes au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationFillMode = 'both';
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Effet de typing sur le titre
const title = document.querySelector('.header h1');
const text = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 500);

// Compteur animé pour les stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

// Démarrer les animations après un délai
setTimeout(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers[1].textContent = '0';
    animateCounter(statNumbers[1], 5);
}, 2000);

// Effet parallax sur le header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const rate = scrolled * -0.5;
    header.style.transform = `translateY(${rate}px)`;
});

// Animation des skill items au hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'translateY(-5px) scale(1.05)';
        skill.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'translateY(0) scale(1)';
        skill.style.boxShadow = 'none';
    });
});

// Animation des project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02) rotate(0.5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
        card.style.boxShadow = 'none';
    });
});

// Smooth scroll pour les liens ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet de particules flottantes
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255,255,255,0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;
    
    particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)`, opacity: 1 }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.remove();
    };
}

// Créer des particules périodiquement
setInterval(createParticle, 300);

// Easter egg : Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activé !
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        
        // Créer explosion de particules
        for (let i = 0; i < 50; i++) {
            setTimeout(() => createParticle(), i * 50);
        }
        
        konamiCode = [];
    }
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}ms`);
    });
});

if ('PerformanceObserver' in window) {
    performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });
}

// Theme toggle (mode sombre)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
}

// Charger le thème sauvegardé
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-theme');
}

// Ajouter un bouton de toggle theme
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.background = 'rgba(255,255,255,0.2)';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '50px';
themeToggle.style.height = '50px';
themeToggle.style.fontSize = '20px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.zIndex = '1000';
themeToggle.style.backdropFilter = 'blur(10px)';
themeToggle.onclick = toggleTheme;
document.body.appendChild(themeToggle);

console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Try the Konami code: ↑↑↓↓←→←→BA');
