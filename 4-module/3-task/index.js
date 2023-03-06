function highlight(table) {
  table.querySelectorAll('[data-available=true]').forEach(elem => elem.parentNode.classList.add('available'));
  table.querySelectorAll('[data-available=false]').forEach(elem => elem.parentNode.classList.add('unavailable'));
  table.tBodies[0].querySelectorAll('tr').forEach(elem => {
    if (!elem.innerHTML.includes('data-available')) {
      elem.hidden = true;
    }
  });
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[2].textContent === 'm') {
      table.rows[i].cells[2].parentNode.classList.add('male');
    } else {
      table.rows[i].cells[2].parentNode.classList.add('female');
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    if (+table.rows[i].cells[1].textContent < 18) {
      table.rows[i].cells[2].parentNode.style = "text-decoration: line-through"; 
    }
  }
}
