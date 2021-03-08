
exports.min = function min (array = null) {
  if (array === null || array.length === 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array = null) {
  if (array === null || array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg(array = null) {
  if (array === null || array.length === 0) return 0;
  const sum = array.reduce((acc, item) => acc + item);
  const avg = sum / array.length;
  return avg.toFixed(2);
}
