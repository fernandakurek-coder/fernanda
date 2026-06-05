document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });

    // Formulário
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Mensagem enviada com sucesso! Obrigado pelo interesse na nanotecnologia agrícola.');
        form.reset();
    });

    // Gráfico simples
    const chartContainer = document.getElementById('marketChart');
    if (chartContainer) {
        chartContainer.innerHTML = `
            <canvas id="growthChart" width="420" height="180"></canvas>
        `;
        const ctx = document.getElementById('growthChart').getContext('2d');
        ctx.strokeStyle = '#2e8b57';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(40, 130);
        ctx.quadraticCurveTo(140, 100, 240, 55);
        ctx.quadraticCurveTo(340, 30, 390, 25);
        ctx.stroke();
        
        ctx.fillStyle = '#2e8b57';
        ctx.font = 'bold 15px Arial';
        ctx.fillText('2024', 50, 165);
        ctx.fillText('2029', 200, 165);
        ctx.fillText('2034', 320, 165);
        ctx.fillText('US$ 12,4 bi', 280, 45);
    }
});