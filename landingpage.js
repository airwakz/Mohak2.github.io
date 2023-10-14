let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds 
}

showSlides(); // Start the slideshow
