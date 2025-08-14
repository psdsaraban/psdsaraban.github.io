// Toggle mobile menu
document.getElementById('mobileMenuButton').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});

// Chart.js Donut Chart
const ctx = document.getElementById('riskChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['ต่ำ', 'ปานกลาง', 'สูง'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#10b981', '#fbbf24', '#ef4444']
        }]
    }
});
