let str = 'list-style-image';
function camelize(str) {
  let arr = str.split('-');
  arr.map((item, index) => {
    if (index != 0) {
      arr[arr.indexOf(item)] = item.charAt(0).toUpperCase() + item.slice(1); }  
  });
  return arr.join('');
}

let result = camelize(str);
console.log(result);
