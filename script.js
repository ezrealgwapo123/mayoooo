const revealBtn = document.getElementById('revealBtn');
const introStage = document.getElementById('introStage');
const giftStage = document.getElementById('giftStage');
const audio = document.getElementById('bgAudio');

// Main reveal button interaction with spectacular effects
revealBtn.addEventListener('click', () => {
    // Add dramatic button animation
    revealBtn.style.animation = 'none';
    revealBtn.style.transform = 'scale(0.85)';
    
    setTimeout(() => {
        revealBtn.style.transform = 'scale(1.15) rotate(5deg)';
    }, 100);
    
    setTimeout(() => {
        revealBtn.style.transform = 'scale(0.9) rotate(-5deg)';
    }, 200);
    
    setTimeout(() => {
        revealBtn.style.transform = 'scale(1)';
    }, 300);
    
    // Create particle explosion effect
    createParticleExplosion();
    
    // Attempt to play background music
    audio.play().catch(() => {
        console.log("Audio playback blocked by browser policy. User interaction required.");
    });
    
    // Transition between stages with enhanced effects
    introStage.classList.remove('active');
    setTimeout(() => {
        giftStage.classList.add('active');
    }, 1200);
});

// Create particle explosion on button click
function createParticleExplosion() {
    const button = document.querySelector('.bloom-trigger');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const angle = (i / 15) * Math.PI * 2;
        const velocity = 8 + Math.random() * 6;
        
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = '#d4af37';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '100';
        particle.style.boxShadow = '0 0 15px #d4af37';
        particle.style.filter = 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.8))';
        
        document.body.appendChild(particle);
        
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)', 
                opacity: 1 
            },
            { 
                transform: `translate(${vx * 100}px, ${vy * 100}px) scale(0.5)`, 
                opacity: 0 
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// Enhanced ambient floating sparkles with spectacular effects
function initSparkles() {
    const container = document.getElementById('sparkle-canvas');
    
    for (let i = 0; i < 120; i++) {
        const sparkle = document.createElement('div');
        
        // Random positioning
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.random() * 5 + 0.5;
        const randomDuration = Math.random() * 5000 + 5000;
        const randomDelay = Math.random() * 10000;
        const randomHue = Math.random() * 80 + 250; // Purple to pink hue range
        const brightness = 70 + Math.random() * 30;
        
        sparkle.style.position = 'fixed';
        sparkle.style.left = randomX + 'vw';
        sparkle.style.top = randomY + 'vh';
        sparkle.style.width = randomSize + 'px';
        sparkle.style.height = randomSize + 'px';
        sparkle.style.background = `hsl(${randomHue}, 100%, ${brightness}%)`;
        sparkle.style.borderRadius = '50%';
        sparkle.style.filter = `blur(0.5px) drop-shadow(0 0 ${randomSize * 3}px hsl(${randomHue}, 100%, ${brightness}%))`;
        sparkle.style.opacity = '0';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '5';
        
        // Animate sparkles with dramatic floating effects
        sparkle.animate([
            { 
                opacity: 0, 
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                offset: 0
            },
            { 
                opacity: 0.9, 
                transform: `translate(${Math.random() * 120 - 60}px, -120px) scale(1) rotate(180deg)`,
                offset: 0.35
            },
            { 
                opacity: 0.7,
                transform: `translate(${Math.random() * 200 - 100}px, -180px) scale(0.9) rotate(360deg)`,
                offset: 0.65
            },
            { 
                opacity: 0, 
                transform: `translate(${Math.random() * 280 - 140}px, -250px) scale(0) rotate(540deg)`,
                offset: 1
            }
        ], {
            duration: randomDuration,
            iterations: Infinity,
            delay: randomDelay,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        container.appendChild(sparkle);
    }
}

// Enhanced mouse tracking effect for spotlight
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        const moveX = (mouseX - window.innerWidth / 2) * 0.2;
        const moveY = (mouseY - window.innerHeight / 2) * 0.2;
        spotlight.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Create floating rose petals effect occasionally
function createFloatingPetals() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const petal = document.createElement('div');
            const randomX = Math.random() * window.innerWidth;
            const randomDelay = Math.random() * 2000;
            
            petal.style.position = 'fixed';
            petal.style.left = randomX + 'px';
            petal.style.top = '-20px';
            petal.style.width = '15px';
            petal.style.height = '15px';
            petal.style.background = `hsl(${320 + Math.random() * 20}, 100%, ${60 + Math.random() * 20}%)`;
            petal.style.borderRadius = '50% 0%';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '4';
            petal.style.opacity = '0.7';
            petal.style.boxShadow = '0 0 10px rgba(255, 192, 203, 0.5)';
            
            document.body.appendChild(petal);
            
            petal.animate([
                { 
                    transform: 'translateY(0) rotateZ(0deg)', 
                    opacity: 0.7 
                },
                { 
                    transform: `translateY(${window.innerHeight + 20}px) rotateZ(360deg)`, 
                    opacity: 0 
                }
            ], {
                duration: 8000 + Math.random() * 4000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                delay: randomDelay
            }).onfinish = () => petal.remove();
        }
    }, 500);
}

// Add enhanced button glow on hover
revealBtn.addEventListener('mouseenter', () => {
    revealBtn.style.animation = 'none';
    revealBtn.style.boxShadow = '0 0 80px rgba(212, 175, 55, 0.9), 0 0 40px rgba(212, 175, 55, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.3)';
});

revealBtn.addEventListener('mouseleave', () => {
    revealBtn.style.animation = 'buttonPulse 2s ease-in-out infinite';
});

// Initialize everything on page load
window.addEventListener('DOMContentLoaded', () => {
    initSparkles();
    createFloatingPetals();
    
    // Animate intro text with stagger
    const titles = document.querySelectorAll('.main-title, .sub-title');
    titles.forEach((title, index) => {
        title.style.animation = `fadeInScale 1s ease-out ${0.9 + index * 0.3}s forwards`;
        title.style.opacity = '0';
    });
});

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initSparkles();
        createFloatingPetals();
    });
} else {
    initSparkles();
    createFloatingPetals();
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes buttonPulse {
        0%, 100% {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.1);
            transform: scale(1);
        }
        50% {
            box-shadow: 0 0 50px rgba(212, 175, 55, 0.7), inset 0 0 30px rgba(212, 175, 55, 0.2);
            transform: scale(1.02);
        }
    }
    
    @keyframes cardEntrance {
        from {
            opacity: 0;
            transform: scale(0.8) translateY(50px) rotateY(30deg);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0) rotateY(0deg);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes glitterPop {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
