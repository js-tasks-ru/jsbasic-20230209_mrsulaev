function initCarousel() {
  let currentPos = 0;
  let carousel = document.querySelector('.carousel');
  let inner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let dist = document.querySelector('.carousel__inner');
  arrowLeft.style.display = 'none'; 

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      currentPos++;
      move(inner, dist.clientWidth);
    }
    if (event.target.closest('.carousel__arrow_left')) {
      currentPos--;
      move(inner, dist.clientWidth);

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

  function move(elem, range) {
    range *= currentPos;
    elem.style.transform = `translateX(-${range}px)`;
  }
}