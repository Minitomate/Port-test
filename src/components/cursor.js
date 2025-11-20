import './cursor.css';

export function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('custom-cursor-active');

    const updateCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursor);

    // Add pointer state for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .hero-cta, .submit-btn, input, textarea');

    const addPointer = () => cursor.classList.add('pointer');
    const removePointer = () => cursor.classList.remove('pointer');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addPointer);
        el.addEventListener('mouseleave', removePointer);
    });

    // Observe DOM changes to attach listeners to new elements (like roadmap nodes if they become interactive)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                const newInteractive = document.querySelectorAll('a, button, .project-card, .hero-cta, .submit-btn, input, textarea');
                newInteractive.forEach(el => {
                    el.removeEventListener('mouseenter', addPointer); // Avoid duplicates
                    el.removeEventListener('mouseleave', removePointer);
                    el.addEventListener('mouseenter', addPointer);
                    el.addEventListener('mouseleave', removePointer);
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
