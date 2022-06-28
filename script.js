////////////////////////pirma uzduotis///////////////////


let firstName = "Mantas";
let lastName = "Santockis";
let birthYear = 1992;
let thisYear = 2022;

document.write(
  `Sveiki aš esu ${firstName} ${lastName} ir man yra ${
    thisYear - birthYear
  } metų `
);

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



////////////////////antraa uzduotis/////////////////////////



// let firstNumber = getRandomNumberBetween(1000, 9999);
// let secNumber = getRandomNumberBetween(1000, 9999);
// let thirdNumber = getRandomNumberBetween(1000, 9999);
// let forthNumber = getRandomNumberBetween(1000, 9999);
// let fithNumber = getRandomNumberBetween(1000, 9999);
// let sixNumber = getRandomNumberBetween(1000, 9999);

// if (
//   firstNumber > secNumber &&
//   firstNumber > thirdNumber &&
//   firstNumber > forthNumber &&
//   firstNumber > fithNumber &&
//   firstNumber > sixNumber
// ) {
//   console.log(FirstNumber);
// } else if (
//   secNumber > firstNumber &&
//   secNumber > thirdNumber &&
//   secNumber > forthNumber &&
//   secNumber > fithNumber &&
//   secNumber > sixNumber
// ) {
//   console.log(secNumber);
// }

// let firstString = firstNumber.toString();
// let secString = secNumber.toString();
// let thirdString = thirdNumber.toString();
// let forthString = forthNumber.toString();
// let fithString = fithNumber.toString();
// let sixString = sixNumber.toString();

// let oneString = `${firstString} ${secString} ${thirdString} ${forthString} `;

// console.log(firstString);
// console.log(secString);
// console.log(thirdNumber);
// console.log(forthNumber);
// console.log(fithNumber);
// console.log(sixNumber);

// function myFunction(str) {
//   var tst = str.split(" ");
//   return tst.max();
// }

// console.log(oneString);


/////////////////////////trecia uzduotis////////////////////////////


function randomLetters(exclude, length) {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   if (!exclude.includes(possible)) {
  //     exclude = text;
  //   }

  return text;
}

document.write(randomLetters(14, 12));


//////////////////////////////////ketvirta uzduotis//////////////////////////////////




let leter = ["A", "B", "C", "D"];
for (let i = 0; i < 200; i++) {
  let rand = Math.floor(Math.random() *);

  console.log(rand);
}
