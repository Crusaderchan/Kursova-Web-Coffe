const track = document.querySelector('.ourMenu-list');
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

// Початок свайпу
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  track.style.transition = 'none'; // Вимикаємо анімацію при свайпі
});

// Під час свайпу
track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const movement = currentX - startX;
  currentTranslate = prevTranslate + movement;

  track.style.transform = `translateX(${currentTranslate}px)`; 
});

// Завершення свайпу
track.addEventListener('touchend', () => {
  isDragging = false;

  
  track.style.transition = 'transform 0.5s ease';


  const maxTranslate = 398; 
  const minTranslate = -track.scrollWidth + track.clientWidth; 

  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate; 
  } else if (currentTranslate < minTranslate) {
    currentTranslate = minTranslate; 
  }

  prevTranslate = currentTranslate; 
  track.style.transform = `translateX(${currentTranslate}px)`; 
});