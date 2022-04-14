let number = [0];
let evens = [];
let odds = [];

let arrayOdds = function (nbr) {
  for (let i = 0; i < nbr.length; i++) {
      number += nbr[i]
    if ((number[i] % 2) != 1) {
        evens.push(number[i]);
        // console.log(number);
    }
    else {
        odds.push(number[i]);
        // console.log(odds);
    }
  }
  return number;
};
console.log(arrayOdds([4, 7, 2, 5, 9]));
