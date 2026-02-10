// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Add to Cart Interaction
function addToCart(productName) {
    // Create a toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-bounce-in';
    toast.innerHTML = `<i class="fas fa-check-circle text-brand-gold mr-2"></i> ${productName} added to cart!`;
    
    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.add('bg-white/95');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('bg-white/95');
    }
});

// Add fade-in animation to elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition', 'duration-1000', 'ease-out'); 
    // We initiate them slightly visible for better UX if JS fails or slow
    // But for animation, let's just keep it simple without hiding them aggressively
});
