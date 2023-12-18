function regexTime(str) {
  const regex = /[^0-9/%-]/g;
  const matches = str.match(regex);
  return matches ? matches.join("") : "Y a rien qui va";
}

console.log(regexTime("I4l est te-mp///s de %sav/oir u845til85iser 6les re%gex !"));
console.log(regexTime("1234548633554HelloWorld"));
console.log(regexTime("Mo%n c48ha1t m--ar15che sur mon clavier"));
