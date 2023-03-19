import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.render();
    this.closeModalOnEscape = this.closeModalOnEscape.bind(this);
  }

  render() {
    this.modal = createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
        </h3>
      </div>

      <div class="modal__body">
      </div>
    </div>
    `);
    return this.modal;
  }

  open() {   
    document.body.classList.add('is-modal-open');
    this.modal.addEventListener('click', ({target}) => {
      if (target.closest('button')) {
        this.close();
      }
    });
    document.body.append(this.modal);
    document.addEventListener('keydown', this.closeModalOnEscape);

  }
  
  setTitle(title) {
    this.modal.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    this.modal.querySelector('.modal__body').append(node);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.modal.remove('.modal');
  }

  closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      this.close();
      document.removeEventListener('keydown', this.closeModalOnEscape);
    }
  }
}
