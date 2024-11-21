let currentSlide = 0; 
const slides = document.querySelectorAll('.slideshow-container'); 


function changeSlide(n) {
    slides[currentSlide].classList.remove('active'); 
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}


slides[currentSlide].classList.add('active');


