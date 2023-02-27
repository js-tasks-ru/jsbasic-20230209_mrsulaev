function getMinMax(str) {
  let arr = str.split(" ").map(item => item = +item).filter(item => !Number.isNaN(item));
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}