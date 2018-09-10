//creatign simple array
let simpleArray = [12, "hey there!", null, undefined];
let second = simpleArray[1];
console.log(second);
simpleArray[4] = "new one";
console.log(simpleArray);

//add items to an array with push and unshift
//unshift - BEGINNING
//push - END
simpleArray.push(12, 34, 'mommy');
let beginning = ['mother', 'is', 'great', undefined];
simpleArray.unshift(beginning);
console.log("Uploaded array after push and unshift:", simpleArray);

//remove AN ITEM from an array with pop and shift
//KEY DIFFERENCE - removing only SINGLE ELEMENT, adding single or
//multiple elements
simpleArray.shift();
simpleArray.pop();
console.log("Array after removing:", simpleArray);

//using splice - remove any number of consecutive elements
//from anywhere in an array
let words = ["today", "I", "didn't", "see", "any", "k-drama"];
let removed = words.splice(2,3); //start from index 2, remove 3 elements
console.log(words, "removed:", removed);

//add items using splice - 3rd parameter

function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
} 

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//copy/extract array items using slice
let colors = ['purple', 'black', 'blue', 'green', 'red'];
let favouriteColors = colors.slice(0,2);
console.log("Colors:", colors,"\nFav ones:", favouriteColors);
//copy with ... -> spread operator (ES6 new feature)
let sameColors = [...colors];
let sameFavColors = [...favouriteColors];
console.log("Same colors:", sameColors, "\nSame fav colors:", sameFavColors);

//function - copying all array num times
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.splice(0, 0, [...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, true, null], 3));

//spread operator - combine arrays
let clothes = ['skirt', 'jacket', 'bra'];
let allClothes = ['sweater', 'pajamas', ...clothes, 'cap', 'hat'];
console.log("",clothes, "\n", allClothes);

//indexOf() - checks if element is in the array, return -1 if not
//or index if it is
console.log("Index of:",allClothes.indexOf('as'));

//arrays and loops
let numbArray = [[1, 2, 3],[4, 5, 12]];
let newArray = [];
for (let i = 0; i<numbArray.length; i++) {
	for(let j=0; j<numbArray[i].length; j++) {
		newArray.push(numbArray[i][j]);
	}
}
console.log(newArray);