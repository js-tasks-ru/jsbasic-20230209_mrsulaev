function namify(users) {
  let arr = [];
  users.forEach(function(item) {
    arr.push(item.name);
  });
  return arr;
}
