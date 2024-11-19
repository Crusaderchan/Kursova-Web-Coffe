let currentSlide = 0; // Змінна для поточного слайду
const slides = document.querySelectorAll('.slideshow-container'); // Всі слайди

// Функція для зміни слайду
function changeSlide(n) {
    slides[currentSlide].classList.remove('active'); // Прибираємо клас active з поточного слайду
    currentSlide = (currentSlide + n + slides.length) % slides.length; // Обчислюємо індекс нового слайду
    slides[currentSlide].classList.add('active'); // Додаємо клас active новому слайду
}

// Початкове відображення першого слайду
slides[currentSlide].classList.add('active');


