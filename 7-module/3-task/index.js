import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
    this.addEventListener();
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

  addEventListener() {
    this.elem.addEventListener('click', (event) => {
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let sliderValue = this.elem.querySelector('.slider__value');

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let sliderStepWidth = this.elem.querySelector('.slider__steps').offsetWidth / segments;
      sliderValue.textContent = Math.round((event.clientX - this.elem.querySelector('.slider__steps').getBoundingClientRect().left) / sliderStepWidth);
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      const custom = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      });
      this.elem.dispatchEvent(custom);
    });
  }
}
