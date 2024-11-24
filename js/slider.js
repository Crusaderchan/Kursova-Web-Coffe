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
    
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active", "from-left", "from-right");
    }
  
  
    if (idx === undefined) {
      idx = 1;
    }
  
    if (idx < 1) {
      slides[slideIndex - 1].classList.add("from-left");
    } else {
      slides[slideIndex - 1].classList.add("from-right");
    }
  
    
    slides[slideIndex - 1].classList.add("active");
  
  }
  


var touchStartX = 0;
var touchEndX = 0;

// Слухаємо події для каруселі
document.querySelector('.slider-container').addEventListener('touchstart', function(event) {
  touchStartX = event.changedTouches[0].screenX; // Отримуємо початкову позицію свайпу
}, false);

document.querySelector('.slider-container').addEventListener('touchend', function(event) {
  touchEndX = event.changedTouches[0].screenX; // Отримуємо кінцеву позицію свайпу
  
  if (touchEndX < touchStartX) {
    // Свайп вліво
    plusSlides(1);
  }
  if (touchEndX > touchStartX) {
    // Свайп вправо
    plusSlides(-1);
  }
}, false);