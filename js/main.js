// main.js

document.addEventListener('DOMContentLoaded', () => {
    const mainTimeline = gsap.timeline();
    const transitionOverlay = document.getElementById('transition-overlay');

    // --- Page Transition Animations ---
    const pageLoadAnimation = () => {
        const tl = gsap.timeline();
        // No longer need to set body opacity as it's visible by default now
        tl.to(transitionOverlay, {
            duration: 1.2,
            scaleY: 0,
            transformOrigin: 'bottom',
            ease: 'power3.inOut'
        });
        return tl;
    };

    const pageExitAnimation = (href) => {
        gsap.to(transitionOverlay, {
            duration: 1.2,
            scaleY: 1,
            transformOrigin: 'bottom',
            ease: 'power3.inOut',
            onComplete: () => {
                window.location.href = href;
            }
        });
    };

    // --- Simplified Animation Logic ---
    const isHomePage = document.querySelector('.split-text');
    const isChatPage = document.querySelector('#chatbot');

    mainTimeline.add(pageLoadAnimation())
        .add(() => {
            // Animate content as the page reveals
            if (isHomePage) {
                gsap.from(".split-text h1", {
                    duration: 1,
                    y: 60,
                    opacity: 0,
                    stagger: 0.15,
                    ease: "power3.out"
                });
                gsap.from(".animate-fade-in", {
                    duration: 1, opacity: 0, y: 30, ease: "power3.out", delay: 0.5
                });
            } else if (isChatPage) {
                gsap.from('#chatbot', { duration: 1.2, scale: 0.95, opacity: 0, ease: 'power3.out' });
            }
        }, "-=0.8"); // Start content animation during page transition

    // --- Intercept Link Clicks for Page Exit Animation ---
    const links = document.querySelectorAll('a[href]:not([target="_blank"])');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');
            if (destination && (destination.startsWith('/') || destination.includes('.html'))) {
                e.preventDefault();
                pageExitAnimation(destination);
            }
        });
    });
});