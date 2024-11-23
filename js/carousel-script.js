const track = document.querySelector('.ourMenu-list');
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0; // Збереження останньої позиції
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX; // Записуємо стартову позицію
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  
  const currentX = e.touches[0].clientX;
  const movement = currentX - startX;
  
  // Обчислюємо нову позицію
  currentTranslate = prevTranslate + movement;
  track.style.transform = `translateX(${currentTranslate}px)`; // Застосовуємо зсув
});

track.addEventListener('touchend', () => {
  isDragging = false;

  // Обмежуємо рух каруселі, щоб вона не виходила за межі
  const maxTranslate = -1;
  const minTranslate = -track.scrollWidth + track.clientWidth;

  // Обмежуємо карусель в межах допустимого зсуву
  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  } else if (currentTranslate < minTranslate) {
    currentTranslate = minTranslate;
  }

  // Записуємо поточний зсув як попередній
  prevTranslate = currentTranslate;
  track.style.transform = `translateX(${currentTranslate}px)`; // Оновлюємо карусель
});