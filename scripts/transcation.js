function createCover() {
    const cover = document.createElement('div');
    cover.className = 'cover';
    document.body.appendChild(cover);
    return cover;
}

function slideCoverInAndOut(cover, targetHref) {
    cover.style.left = '0';
    setTimeout(() => {
        cover.style.left = '150%';
        setTimeout(() => {
            window.location.href = targetHref;
            cover.style.left = '-150%';
        }, 500);
    }, 500);
}


document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-links a');
    const cover = createCover();

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            slideCoverInAndOut(cover, button.href);
        });
    });
});
