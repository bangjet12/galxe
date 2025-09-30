// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click handlers for buy buttons
    const buyButtons = document.querySelectorAll('.buy-button, .buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your buy functionality here
            alert('Buy functionality would be implemented here!');
        });
    });

    // Add click handlers for community buttons
    const communityButtons = document.querySelectorAll('.community-btn');
    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your community link functionality here
            alert('Community link would be implemented here!');
        });
    });

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Add loading animation completion
    setTimeout(() => {
        const loadingItems = document.querySelectorAll('.loading-item');
        loadingItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0.7';
                const spinner = item.querySelector('.loading-spinner');
                if (spinner) {
                    spinner.style.animationDuration = '2s';
                }
            }, index * 500);
        });
    }, 2000);

    // Add scroll effect for header
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = window.scrollY;
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #d4af37 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);
