let currentPos = 0;

function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let inner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let dist = document.querySelector('.carousel__inner').clientWidth;
  arrowLeft.style.display = 'none'; 

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      move(inner, -dist);
    }
    if (event.target.closest('.carousel__arrow_left')) {
      move(inner, dist);
    }
    if (currentPos < 0) {
      arrowLeft.style.display = '';
    } else {
      arrowLeft.style.display = 'none';
    }

    if (currentPos <= -(3 * dist)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  });
}

function move(elem, range) {
  currentPos += range;
  elem.style.transform = `translateX(${currentPos}px)`;
}


