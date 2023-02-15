function ucFirst(str) {
  if (str.length == 1) {
    return str.toUpperCase();
  }
  if (str.trim() == "") {
    return str;
  } else {
    return str[0].toUpperCase() + str.substring(1); 
  }
}