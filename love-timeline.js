// Particle System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        // Random animation duration
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Music Control
function initMusic() {
    const musicControl = document.getElementById('musicControl');
    const audio = document.getElementById('backgroundMusic');
    const musicText = document.querySelector('.music-text');
    let isPlaying = false;

    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicControl.classList.remove('playing');
            musicText.textContent = 'Play Music';
        } else {
            audio.play().catch(err => {
                console.log('Audio play failed:', err);
            });
            musicControl.classList.add('playing');
            musicText.textContent = 'Playing...';
        }
        isPlaying = !isPlaying;
    });

    // Handle audio events
    audio.addEventListener('ended', () => {
        musicControl.classList.remove('playing');
        musicText.textContent = 'Play Music';
        isPlaying = false;
    });
}

// Scroll Reveal Animation
function revealOnScroll() {
    const elements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const timelineSection = document.getElementById('timeline');
            timelineSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Parallax Effect on Hero
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (hero) {
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });
}

// Dynamic Timeline Marker Animation
function animateTimelineMarkers() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    setTimeout(() => {
                        marker.style.animation = 'markerPulse 0.6s ease-out';
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add marker pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes markerPulse {
        0% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 0 4px var(--color-glow);
        }
        50% {
            transform: translateX(-50%) scale(1.5);
            box-shadow: 0 0 0 12px var(--color-glow);
        }
        100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 0 4px var(--color-glow);
        }
    }
`;
document.head.appendChild(style);

// Letter Card Hover Effects
function initLetterEffects() {
    const letterCards = document.querySelectorAll('.letter-card');
    
    letterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

// Reason Items Sequential Reveal
function sequentialReveal() {
    const reasonItems = document.querySelectorAll('.reason-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });

    reasonItems.forEach(item => {
        observer.observe(item);
    });
}

// Cursor Trail Effect (subtle)
function initCursorTrail() {
    let timeout;
    
    document.addEventListener('mousemove', (e) => {
        clearTimeout(timeout);
        
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '8px';
        trail.style.height = '8px';
        trail.style.background = 'var(--color-primary)';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.opacity = '0.3';
        trail.style.zIndex = '9999';
        trail.style.transition = 'all 0.5s ease';
        
        document.body.appendChild(trail);
        
        timeout = setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(2)';
            setTimeout(() => trail.remove(), 500);
        }, 50);
    });
}

// Add floating animation to hero content
function animateHeroContent() {
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        });
        
        function animate() {
            heroContent.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

// Loading Animation
function initLoadingAnimation() {
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Enhanced Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, var(--color-primary), var(--color-accent))';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.1s ease';
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Easter Egg: Secret Message on Konami Code
function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                showSecretMessage();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function showSecretMessage() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'rgba(139, 58, 58, 0.95)';
    message.style.color = 'white';
    message.style.padding = '40px';
    message.style.borderRadius = '12px';
    message.style.zIndex = '10001';
    message.style.textAlign = 'center';
    message.style.fontFamily = 'var(--font-script)';
    message.style.fontSize = '1.5rem';
    message.style.boxShadow = '0 10px 50px rgba(0,0,0,0.3)';
    message.innerHTML = `
        <p style="margin-bottom: 20px;">You found the secret! ✨</p>
        <p style="font-size: 1rem; opacity: 0.9;">This website was made with infinite love, countless hours, and one heart that beats only for you.</p>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transition = 'opacity 0.5s ease';
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 500);
    }, 4000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initLoadingAnimation();
    createParticles();
    initMusic();
    revealOnScroll();
    initSmoothScroll();
    initParallax();
    animateTimelineMarkers();
    initLetterEffects();
    sequentialReveal();
    createScrollProgress();
    initEasterEgg();
    
    // Optional: Uncomment for cursor trail effect (can be distracting)
    // initCursorTrail();
    
    // Optional: Uncomment for hero parallax mouse effect
    // animateHeroContent();
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', () => {
        document.body.classList.add('touch-device');
    });
}

// Prevent context menu on long press for immersive experience
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.timeline-content, .letter-card')) {
        e.preventDefault();
    }
});
