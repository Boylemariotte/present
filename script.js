document.addEventListener('DOMContentLoaded', () => {
    const petalsContainer = document.getElementById('petals-container');
    const loveBtn = document.getElementById('love-btn');
    const modal = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-btn');

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
        
        // Confetti effect or more hearts could go here
        spawnHearts();
    });

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
});
