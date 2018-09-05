const fizzBuzz = () => {
  console.log("fizzbuzz");
  let word = "";
  for (var i = 1; i < 100; i++) {
    word = i;
    if (i % 3 === 0 && i % 5 === 0) {
      word = "fizzbuzz";
    } else if (i % 3 === 0) {
      word = "fizz";
    } else if (i % 5 === 0) {
      word = "buzz";
    }
    console.log(word);
  }
};
const seven = () => {
  for (var i = 1; i < 100; i++) {
    if (i % 7 !== 0 && !i.toString().includes("7")) {
      console.log(i);
    }
  }
};
const nab = (n, a, b) => {
  let word = "";
  var first = "Keith";
  var last = "Dang";
  for (var i = 0; i < n; i++) {
    if (i % a === 0 && i % b === 0) {
      word = first + last;
    } else if (i % a === 0) {
      word = first;
    } else if (i % b === 0) {
      word = last;
    } else {
      word = i;
    }
    console.log(word);
  }
};
const start = () => {
  //fizzBuzz();
  //seven();
  nab(100, 3, 5);
};
module.exports = {
  start: start
};
