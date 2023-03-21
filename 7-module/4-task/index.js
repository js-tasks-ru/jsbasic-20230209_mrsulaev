import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
    this.thumb = this.elem.querySelector('.slider__thumb');
    this.progress = this.elem.querySelector('.slider__progress');
    this.sliderValue = this.elem.querySelector('.slider__value');
    this.addEventListenerDrag();
    this.addEventListenerClick();
  }

  render() {
    this.slider = createElement(`
    <div class="slider">

  <div class="slider__thumb">
    <span class="slider__value">${this.value}</span>
  </div>

  <div class="slider__progress"></div>

  <div class="slider__steps">
    <span class="slider__step-active"></span>
  </div>
</div>
    `);
    for (let i = 0; i < this.steps - 1; i++) {
      this.slider.querySelector(".slider__step-active").insertAdjacentElement('afterend', document.createElement('span'));
    }

    let thumb = this.slider.querySelector('.slider__thumb');
    let progress = this.slider.querySelector('.slider__progress');
    let defaultValue = (this.value / this.steps) * 100;
    thumb.style.left = `${defaultValue}%`;
    progress.style.width = `${defaultValue}%`;

    return this.slider;
  }

  addEventListenerDrag() {
    let value;
    this.thumb.ondragstart = () => false;

    this.thumb.addEventListener('pointerdown', (event) => {
      const pointerDown = (event) => {
        this.elem.classList.add('slider_dragging');

        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;
        let segments = this.steps - 1;
    
        if (leftRelative < 0) {
          leftRelative = 0;
        }
    
        if (leftRelative > 1) {
          leftRelative = 1;
        }

        let leftPercents = leftRelative * 100;
        let approximateValue = leftRelative * segments;
        value = Math.round(approximateValue);
        this.sliderValue.textContent = value;
        this.elem.querySelector(".slider__step-active").classList.remove('slider__step-active');
        this.elem.querySelectorAll("span")[value + 1].classList.add('slider__step-active');
        this.thumb.style.left = `${leftPercents}%`;
        this.progress.style.width = `${leftPercents}%`;
      };

      const pointerUp = (event) => {
        this.elem.removeEventListener('pointermove', pointerDown);
        this.elem.removeEventListener('pointerup', pointerUp);
        this.addCustomEvent(value, this.thumb);
      };

      this.elem.addEventListener('pointermove', pointerDown);
      this.elem.addEventListener('pointerup', pointerUp);
    });
  }

  addEventListenerClick() {
    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let leftPercents = value / segments * 100;
      let sliderStepWidth = this.elem.querySelector('.slider__steps').offsetWidth / segments;
      this.sliderValue.textContent = Math.round((event.clientX - this.elem.querySelector('.slider__steps').getBoundingClientRect().left) / sliderStepWidth);
      this.thumb.style.left = `${leftPercents}%`;
      this.progress.style.width = `${leftPercents}%`;
      this.addCustomEvent(value, this.thumb);
    });
  }

  addCustomEvent(value, elem) {
    const custom = new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    });
    elem.dispatchEvent(custom);
  }
}
