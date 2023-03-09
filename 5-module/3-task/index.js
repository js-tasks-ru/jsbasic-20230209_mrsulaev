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
      move(inner);
    }
    if (event.target.closest('.carousel__arrow_left')) {
      currentPos--;
      move(inner);
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

  function move(elem) {
    elem.style.transform = `translateX(-${currentPos * elem.clientWidth}px)`;
  }
}