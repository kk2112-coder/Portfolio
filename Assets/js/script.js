// Typing effect for role
const roles = ["Web Developer.", "Frontend Designer.", "Freelancer."];
let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {
    if (index >= roles.length) index = 0;
    currentRole = roles[index];
    
    let displayed = isDeleting 
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);
    
    document.getElementById("role").innerHTML = displayed + '<span class="cursor">|</span>';
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    type();
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navlist = document.getElementById('navlist');
const socialIcons = document.getElementById('socialIcons');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Responsive social icons positioning
function handleResize() {
    const isMobile = window.innerWidth < 1024;
    const desktopIcons = document.getElementById('socialIcons');
    const mobileIcons = document.querySelector('.mobile-social');
    
    if (isMobile) {
        desktopIcons.style.display = 'none';
        if (mobileIcons) {
            mobileIcons.style.display = 'flex';
        }
    } else {
        desktopIcons.style.display = 'flex';
        if (mobileIcons) {
            mobileIcons.style.display = 'none';
        }
    }
}

// Check screen size on load and resize
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const hireBtn = document.getElementById('hireBtn');
    const projectBtn = document.getElementById('projectBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    
    hireBtn.addEventListener('click', function() {
        alert('Thanks for your interest! Please contact me via email or LinkedIn.');
    });
    
    projectBtn.addEventListener('click', function() {
        window.open('https://nowfloat.netlify.app/', '_blank');
    });
    
    resumeBtn.addEventListener('click', function() {
        // Create a link element to download/open the resume
        const resumeLink = document.createElement('a');
        resumeLink.href = 'resume.pdf'; // Path to your resume file
        resumeLink.target = '_blank'; // Open in new tab
        resumeLink.download = 'Krishan_Kant_Resume.pdf'; // Optional: force download with custom name
        
        // Trigger the click
        document.body.appendChild(resumeLink);
        resumeLink.click();
        document.body.removeChild(resumeLink);
        
        // Optional: Show a brief loading message
        const originalText = resumeBtn.textContent;
        resumeBtn.textContent = 'Opening Resume...';
        resumeBtn.disabled = true;
        
        setTimeout(() => {
            resumeBtn.textContent = originalText;
            resumeBtn.disabled = false;
        }, 1500);
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.content, .icons, .design');
    animateElements.forEach(el => observer.observe(el));
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Dynamic Shapes Mouse Interaction
document.addEventListener('DOMContentLoaded', function() {
    const shapes = document.querySelectorAll('.shape');
    const dots = document.querySelectorAll('.dot');
    
    // Mouse move effect for shapes
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        dots.forEach((dot, index) => {
            const speed = (index + 1) * 0.3;
            const x = (mouseX - 0.5) * speed * 15;
            const y = (mouseY - 0.5) * speed * 15;
            
            dot.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add random movement to shapes
    function addRandomMovement() {
        shapes.forEach((shape, index) => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 10;
            const currentTransform = shape.style.transform || 'translate(0px, 0px)';
            
            setTimeout(() => {
                shape.style.transition = 'transform 2s ease-out';
                shape.style.transform = currentTransform + ` translate(${randomX}px, ${randomY}px)`;
            }, index * 500);
        });
    }
    
    // Call random movement every 5 seconds
    setInterval(addRandomMovement, 5000);
    
    // Scroll-based animation for shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
});

// Add particle trail effect on mouse move
document.addEventListener('DOMContentLoaded', function() {
    let particles = [];
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(93, 190, 229, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            animation: particleFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            particles = particles.filter(p => p !== particle);
        }, 1000);
    }
    
    // Add particle fade animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
    
    let mouseTrail = false;
    document.addEventListener('mousemove', function(e) {
        if (mouseTrail && Math.random() > 0.8) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    // Enable mouse trail on hover over interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .icons a');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => mouseTrail = true);
        element.addEventListener('mouseleave', () => mouseTrail = false);
    });
});
