function interval(min, max, nb) {
  return min <= nb && nb <= max;
}

console.log(interval(10, 200, 35));
console.log(interval(444, 555, 1200));
console.log(interval(-100, 0, -50));
