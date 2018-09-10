//1)convert celsius to fahrenheit

function convertToF(celsius) {
	let fahrenheit;
	fahrenheit = celsius * 9 / 5 + 32;
	console.log("Given", celsius, "equals in Fahrenheit:");
	return fahrenheit;
}

console.log(convertToF(36));

//2)reverse a string

function reverseString(str) {
	let stringArr = str.split("");
	let newString = "";
	for(let i =stringArr.length-1; i>=0; i--) {
		newString += stringArr[i];
	}
	return newString;
}

console.log("Reversed string:", reverseString("matkoboska"));

//3)factorialize a number
function factorialize(num) {
	let result = 1;
	while(num >0) {
		result *= num;
		num--;
	}
	return result;
}

console.log("Factorial of 10:", factorialize(10));

//second solution (recursion xD)
function factorialize2(num) {
	if(num === 0) {return 1;}
	return num*factorialize2(num-1);
}

console.log("Factorial of 10 (recursion style):", factorialize2(10));

//4)find the longest word in a string
function findLongestWord(str) {
	let words = str.split(" ");
	let longestWord = "";
	for(let i=0;i<words.length;i++) {
		if(words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return [longestWord, longestWord.length];
}

console.log(findLongestWord("In matka simplicity there is truth"));

//5)return largest numbers in arrays - from each provided sub-array
function largestNumbersInSubarrays(arr) {
	let maxArr = [];
	let maxInside;
	for(let i = 0; i<arr.length; i++) {
		maxInside = arr[i][0];
		for (let j = 0; j <arr[i].length; j++) {
			if (arr[i][j] > maxInside) {
				maxInside = arr[i][j];
			}
		}
		maxArr.push(maxInside);
	}
	return maxArr;
}

console.log(largestNumbersInSubarrays([[1,2222], [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumbersInSubarrays([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

//6)confirm the ending
function confirmEnding(str, target) {
	let words = str.split(" ");
	if (words[words.length-1] === target) {
		return true;
	} else {
		return false;
	}
}

console.log(confirmEnding("Moja mama jest cudowna", "cudowna"));
console.log(confirmEnding("Nie znosze", "robic"));

//second

function confirmEnding2(str, target) {
	let targetLength = target.length;
	let strLength = str.length;
	if(str.substring(strLength-targetLength, strLength) == target) {
		return [target, true];
	} else {
		return false;
	}
}

console.log(confirmEnding2("Matylda jesta", 'sta'));

//7)repeat a string repeat a string
function repeatStringNumTimes(str, num) {
	if(num<=0) {
		return "";
	} else {
		newStr = ""
		for(let i=0; i<num;i++) {

			newStr += str;
		}
		return newStr;
	}
}

console.log(repeatStringNumTimes("Kocham go.", 4));

//ADVANCED SOLUTION :3

function repeatStrungNumTimes2(str, num) {
	return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStrungNumTimes2("HASasdsadsada! ", 3));

function repeatStringNumTimes3(str, num) {
  // repeat after me
  if (num <= 0 ) {
    return "";
  } else if (num === 1) {
    return str;
  }
  return str + repeatStringNumTimes(str, num-1);
}

//8)truncate a string
function truncateString(str, num) {
	if (str.length > num) {
		return str.substring(0,num) + "..."
	} else {
		return str;
	}
}

console.log(truncateString("Be my guest!", 15));

//9)finders keepers
function findElement(arr, func) {
	for(let i = 0; i<arr.length; i++) {
		if (func(arr[i])) {
			return arr[i];
		}
	}
	return undefined;
}

console.log(findElement([1, 4, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

//10)boo who - check if value is classified as a bool primitive
function booWho(bool) {
	if (typeof bool === "boolean") {
		return true;
	} else {
		return false;
	}
}

console.log(booWho(1));

//11)title case a sentence
function titleCase(str) {
	let words = str.split(" ");
	let proper = "";
	for(let i = 0; i<words.length; i++) {
		words[i][0].toUpperCase();
		proper += words[i][0].toUpperCase();
		proper += words[i].substring(1,words[i].length).toLowerCase();
		proper += " ";
	}
		proper = proper.substring(0,proper.length-1);
	return proper;
}

console.log(titleCase("OHHHH Myyyy GoodNess! I'm COOL"));
console.log(titleCase("I'm a little tea pot"));

//second (intermediate) solution
function titleCase2(str) {
	let convertToArray = str.toLowerCase().split(" ");
	let result = convertToArray.map(function(val) {
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});
	return result.join(" ");
}

console.log(titleCase2("Dear LORD WheN I GET TO HeaVen"));

//12)slice and splice

//this function modifies an array!
/*function frankenSplice(arr1, arr2, n) {
	arr2.splice(n,0,...arr1);
	return arr2;
}
*/
function frankenSplice(arr1, arr2, n) {
	let newArray = arr2.slice(0,arr2.length);
	newArray.splice(n,0,...arr1);
	return newArray;
}

let firstArray = [1,4,6,7,89];
let secondArray = [33,33,66,77,88,1,1];
console.log(frankenSplice(firstArray,secondArray,3));
console.log(secondArray);

//13)falsy bouncer
function bouncer(arr) {
	let newArray = [];
	for(let i = 0; i<arr.length; i++) {
		if(arr[i]) {
			newArray.push(arr[i]);
		}
	}
	arr = newArray;
	return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));

//second solution
function bouncer2(arr) {
	return arr.filter(Boolean);
}

console.log(bouncer2([false, null, 34, "mama", 0]));

//14)where do i belong
function getIndexToIns(arr, num) {
	let newArray = [...arr, num];
	newArray = newArray.sort(function(a,b) {return a > b ? 1:-1});
	let index = newArray.indexOf(num);
	return [newArray, index];
}

console.log(getIndexToIns([34, -2, 5, 3, 67, 111, 0], 3));

//15)mutations - return true if the string in the first element of
//the array contains all of the letters of the string in the second
//element of an array

function mutationArr(arr) {
	//let firstArr = arr[0].toLowerCase().split();//cant call split on arr el
	let firstArr = arr[0].toLowerCase();
	let secondArr = arr[1].toLowerCase();
	for(let letter = 0;letter<secondArr.length;letter++) {
		if(firstArr.indexOf(secondArr[letter]) === -1) {
			return false;
		}
	}
	return true;
}
console.log(mutationArr(["hello", "hey"]));
console.log(mutationArr(["hello", "Hello"]));
console.log(mutationArr(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

//16.chunky monkey - funct that splits an array into groups the length
//of size and returns them as 2D array
function chunkArrayInGroups(arr, size){
	let newArray = [];
	let sliced = [];
	for(let i=0;i<arr.length;i+=size){
		sliced = arr.slice(i,i+size);
		newArray.push(sliced);
	}
	return newArray;	
}
   function chunkArrayInGroups2(arr, size) {
      // Break it up.
      var arr2 = [];
      for (var i = 0; i < arr.length; i+=size) {
    	arr2.push(arr.slice(i , i+size));
      }
      return arr2;
    }

console.log(chunkArrayInGroups([2, 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));