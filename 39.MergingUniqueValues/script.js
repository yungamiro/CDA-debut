function merging(...arg) {
  console.log(...arg);
  // const myNewArr = Array.from(arguments) ;
  // console.log(myNewArr);
  const myFlatArr = arg.flat();
  console.log(myFlatArr);
  const uniqueFlatValues = [];

  [myFlatArr].forEach((subArr) =>
    subArr.forEach(
      (ind) =>
        uniqueFlatValues.indexOf(ind) === -1 && uniqueFlatValues.push(ind)
    )
  );
  return uniqueFlatValues;
}
console.log(merging([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(merging(["z", "a", "z"], ["a", "z", "z"])); // [ 'z', 'a' ]
console.log(merging([65, 45, 78, 95], [65, 45, 78, 95])); // [ 65, 45, 78, 95 ]
