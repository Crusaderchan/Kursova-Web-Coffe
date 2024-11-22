var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n, n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, idx) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active", "from-left", "from-right");
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    if (idx === undefined) {
      idx = 1;
    }
  
    if (idx < 1) {
      slides[slideIndex - 1].classList.add("from-left");
    } else {
      slides[slideIndex - 1].classList.add("from-right");
    }
  
    // Додаємо активний слайд
    slides[slideIndex - 1].classList.add("active");
  
    
    
  
    dots[slideIndex - 1].className += " active";
  }
  