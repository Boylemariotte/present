document.addEventListener('DOMContentLoaded', () => {
    const petalsContainer = document.getElementById('petals-container');
    const loveBtn = document.getElementById('love-btn');
    const modal = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

    const fullLetterText = `Mi querida Valerie,

Prometo cuidarte y amarte como se cuida a la flor más preciada. Eres mi sol en los días grises y mi calma en la tormenta.

Cada día a tu lado es un regalo que atesoro en mi corazón. Nunca olvides que mi amor por ti crece más y más con cada segundo.

Eres única y especial.

Con todo mi amor,
Tu novio`;

    // Create falling petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Randomize
        const startLeft = Math.random() * 100; // Position 0-100%
        const animationDuration = Math.random() * 5 + 5; // 5-10s
        const size = Math.random() * 30 + 10; // 10-40px
        
        petal.style.left = startLeft + 'vw';
        petal.style.animationDuration = animationDuration + 's';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        petalsContainer.appendChild(petal);

        // Remove after animation
        setTimeout(() => {
            petal.remove();
        }, animationDuration * 1000);
    }

    // Spawn petals periodically
    setInterval(createPetal, 300);

    // Initial burst
    for(let i=0; i<20; i++) {
        setTimeout(createPetal, Math.random() * 1000);
    }

    // Modal interaction
    loveBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            modal.classList.add('visible');
        });
        
        // Confetti effect
        spawnHearts();

        // Start typewriter
        typeWriter();
    });

    // Typewriter Effect
    let i = 0;
    const speed = 40; // typing speed in ms
    let hasTyped = false;
    
    function typeWriter() {
        if (hasTyped) return;
        
        const typeContainer = document.getElementById('typewriter-text');
        
        // Simple typing logic
        function type() {
            if (i < fullLetterText.length) {
                // Handle line breaks
                if (fullLetterText.charAt(i) === '\n') {
                     typeContainer.innerHTML += '<br>';
                } else {
                     typeContainer.innerHTML += fullLetterText.charAt(i);
                }
                i++;
                setTimeout(type, speed);
            } else {
                hasTyped = true;
                // Remove cursor after typing
                document.querySelector('.cursor').style.display = 'none';
            }
        }
        
        type();
    }

    closeModal.addEventListener('click', () => {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    });

    function spawnHearts() {
        const heartContainer = document.querySelector('.hearts-container');
        // Simple console log for now, or expand this for more visual flair
        console.log('Spreading love for Valerie! ❤️');
    }
    // Interactive Hearts
    let lastHeartTime = 0;
    
    function createInteractiveHeart(x, y) {
        const now = Date.now();
        if (now - lastHeartTime < 50) return; // Throttle
        lastHeartTime = now;

        const heart = document.createElement('div');
        heart.classList.add('interactive-heart');
        heart.innerText = '❤️';
        heart.style.left = (x - 10) + 'px';
        heart.style.top = (y - 10) + 'px';
        
        // Random slight variation
        heart.style.setProperty('--tx', (Math.random() * 20 - 10) + 'px');
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }

    // Touch support
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        createInteractiveHeart(touch.clientX, touch.clientY);
    });

    // Mouse support
    document.addEventListener('mousemove', (e) => {
        createInteractiveHeart(e.clientX, e.clientY);
    });
});
