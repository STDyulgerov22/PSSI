document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('main-header');
    const navLinks = document.getElementById('nav-links');
    const mainPageText = document.getElementById('main-page-text');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            navLinks.style.display = 'none';
            mainPageText.style.display = 'block';
        } else {
            header.classList.remove('scrolled');
            navLinks.style.display = 'flex';
            mainPageText.style.display = 'none';
        }
    });
});
