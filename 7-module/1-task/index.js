/* eslint-disable indent */
import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
    this.addEventListener();
  }

  render() {
    this.nav = createElement(`  <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>
  
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
     `);

     this.nav.addEventListener('click', function(event) { 
       event.preventDefault();
      if (event.target.closest('.ribbon__item')) { 
        let customEvent = new CustomEvent("ribbon-select", { 
          detail: event.target.closest('.ribbon__item').dataset.id,
          bubbles: true
        });
        event.target.closest('.ribbon__inner').dispatchEvent(customEvent);
      }
    });

    return this.nav;
  }

  addEventListener() {
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.arrowLeft = this.elem.querySelector(".ribbon__arrow_left");
    this.arrowRight = this.elem.querySelector(".ribbon__arrow_right");
    this.arrowRight.classList.add('ribbon__arrow_visible');
    this.arrowLeft.classList.remove('ribbon__arrow_visible');

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.ribbon__arrow_left')) {
          this.scroll();
          this.ribbonInner.scrollBy(-350, 0);
       } else
      if (event.target.closest('.ribbon__arrow_right')) {
        this.scroll();
        this.ribbonInner.scrollBy(350, 0);
    }
  });
  }

  scroll() {
    this.scrollRight = this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth;
    this.scrollLeft = this.ribbonInner.scrollLeft;
    if (this.scrollRight < 1) {
      this.arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      this.arrowRight.classList.add('ribbon__arrow_visible');
    }
    if (this.scrollLeft === 0) {
      this.arrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
      this.arrowLeft.classList.add('ribbon__arrow_visible');
    }
  }
}
