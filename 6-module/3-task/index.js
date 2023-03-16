import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentPos = 0;
    this.elem = this.render();
    this.move();
    this.addCustomEvent();
  }

  render() {
    this.main = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
    </div>
    <div class="carousel__inner"></div>
  </div>
  `);

    for (let i = 0; i < this.slides.length; i++) {
      this.product = createElement(`
      <div class="carousel__slide" data-id="${this.slides[i].id}">
      <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
        <div class="carousel__title">${this.slides[i].name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
     `);
      this.main.querySelector('.carousel__inner').append(this.product);
    }
    return this.main;
  }

  move() {
    this.elem.querySelector(".carousel__arrow_left").style.display = 'none';

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__arrow_right')) {
        this.currentPos++;
        this.elem.querySelector('.carousel__inner').style.transform = `translateX(-${this.currentPos * this.elem.querySelector('.carousel__inner').clientWidth}px)`;
      }
      if (event.target.closest('.carousel__arrow_left')) {
        this.currentPos--;
        this.elem.querySelector('.carousel__inner').style.transform = `translateX(-${this.currentPos * this.elem.querySelector('.carousel__inner').clientWidth}px)`;
      }
  
      if (this.currentPos === 0) {
        this.elem.querySelector(".carousel__arrow_left").style.display = 'none';
      } else {
        this.elem.querySelector(".carousel__arrow_left").style.display = '';
      }
  
      if (this.currentPos === this.slides.length - 1) {
        this.elem.querySelector(".carousel__arrow_right").style.display = 'none';
      } else {
        this.elem.querySelector(".carousel__arrow_right").style.display = '';
      }
    });
  }

  addCustomEvent() {
    this.elem.addEventListener('click', function({target}) { 
      if (target.closest('.carousel__button')) { 
        let event = new CustomEvent("product-add", { 
          detail: target.closest('.carousel__slide').dataset.id,
          bubbles: true
        });
        target.closest('.carousel').dispatchEvent(event);
      }
    });
  }
}
