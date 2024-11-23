const track = document.querySelector('.ourMenu-list');
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

// Початок свайпу
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX; // Початкова координата свайпу
});

// Під час свайпу
track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX; // Поточна координата свайпу
  const movement = currentX - startX; // Різниця для зсуву
  currentTranslate = prevTranslate + movement; // Оновлюємо зсув
  track.style.transform = `translateX(${currentTranslate}px)`;
});

// Завершення свайпу
track.addEventListener('touchend', () => {
  isDragging = false;

  // Обмежуємо вихід за межі каруселі
  const maxTranslate = 0;
  const minTranslate = -track.scrollWidth + track.clientWidth;

  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  } else if (currentTranslate < minTranslate) {
    currentTranslate = minTranslate;
  }

  prevTranslate = currentTranslate; // Запам'ятовуємо останній зсув
  track.style.transform = `translateX(${currentTranslate}px)`;
});