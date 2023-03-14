function toggleText() {
  let elem = document.querySelector(".toggle-text-button");
  let text = document.querySelector('#text');
  elem.addEventListener('click', () => {
    text.hidden = !text.hidden;
  });
}
