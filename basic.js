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

//arrays and loops - filtering with splice
function filteredArray(arr, elem) {
	newArray = [...arr];
	for(let i = 0; i<newArray.length; i++) {
		for(let j=0;j<newArray[i].length; j++) {
			if (newArray[i][j] == elem) {
				newArray.splice(i, 1);
				i--;
				break;
			}
		}
	}
	return newArray;
}
//arrays, loops - filtering with indexOf
function filtered2(arr, elem) {
	newArr = [];
	for(let i =0; i<arr.length; i++) {
		if(arr[i].indexOf(elem) === -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

console.log(filtered2([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

//create key-value pairs to js objects
let celebrity = {
	name: 'Taylor Swift',
	socialmedia: ['instagram', 'fb', 'twitter'],
	occupation: 'singer',
	dateOfBirth: 1990
};

//add new key-value pair
celebrity.partner = 'dunno';
console.log(celebrity);

//objects nested within objects - change easily
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;

//delete xD
delete celebrity.partner;
console.log(celebrity);

//does object have a specific property? - hasOwnProperty, in keyword
console.log('socialmedia' in celebrity);

//iterate through the keys of an object with FOR...IN statement
for(let prop in userActivity) {
	console.log(prop);
};

//
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let count = 0;
  for(let user in obj) {
    if (obj[user].online === true) {//important af!!, obj refers to the same thing throughout the whole code here!!!
      count++;
    }
  }
  return count;
}


console.log(countOnline(users));

//object.keys - generate an array of all object keys

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));