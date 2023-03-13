/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
    this.users = rows;
    this.elem = this.createTable();
  }

  createTable() {
    this.table = document.createElement("table");
    this.tblBody = document.createElement("tbody");
    for (let i = 0; i < this.users.length; i++) {
      this.tblBody.insertAdjacentHTML('beforeEnd', `<tr><td>${this.users[i].name}</td><td>${this.users[i].age}</td><td>${this.users[i].salary}</td><td>${this.users[i].city}</td><td><button>X</button></td></tr>`); 
    }
    console.log(this.tblBody);
    this.table.append(this.tblBody);
    this.table.addEventListener('click', (event) => { 
      if (event.target.closest('button')) {
        let element = event.target;
        event.target.parentElement.parentElement.remove(element);
      }
    });
    return this.table;
  }
}