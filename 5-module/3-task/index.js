function initCarousel() {
  let currentPos = 0;
  let carousel = document.querySelector('.carousel');
  let inner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  arrowLeft.style.display = 'none'; 

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      currentPos++;
      inner.style.transform = `translateX(-${currentPos * inner.clientWidth}px)`;
    }
    if (event.target.closest('.carousel__arrow_left')) {
      currentPos--;
      inner.style.transform = `translateX(-${currentPos * inner.clientWidth}px)`;
    }

    if (currentPos === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (currentPos === 3) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  });
}