function toggleText() {
  let elem = document.querySelector(".toggle-text-button");
  let text = document.querySelector('#text');
  elem.addEventListener('click', () => {
    if (text.hidden === true) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
