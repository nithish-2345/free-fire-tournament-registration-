document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => observer.observe(el));

    // Form Submission Handling
    const form = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic Validation
        const teamName = document.getElementById('teamName').value.trim();
        const leaderName = document.getElementById('leaderName').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const paymentProof = document.getElementById('paymentProof').files[0];
        
        if (!teamName || !leaderName || !contact || !paymentProof) {
            showMessage('error', 'Please fill all required fields and upload payment proof.');
            return;
        }
        
        // Simulate API call or form processing
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showMessage('success', 'Squad registered successfully! We will contact you via WhatsApp.');
            form.reset();
            submitBtn.textContent = 'Register Squad';
            submitBtn.disabled = false;
        }, 1500);
    });

    function showMessage(type, text) {
        formMessage.textContent = text;
        formMessage.className = `message ${type}`;
        formMessage.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});
