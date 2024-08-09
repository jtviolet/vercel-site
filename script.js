let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeSlide(direction) {
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;

    images[currentIndex].classList.add('active');
}

// Optional: Automatic slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
