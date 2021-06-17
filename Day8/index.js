const toggleButtons = document.querySelectorAll('.faq-toggle');
console.log(toggleButtons);
toggleButtons.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})