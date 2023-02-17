function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if ((typeof salaries[key]) === "number") {
      if (!(Number.isNaN(salaries[key]) || salaries[key] === Infinity || salaries[key] === -Infinity)) {
        sum += salaries[key];
      }
    }
  }
  return sum;
}
