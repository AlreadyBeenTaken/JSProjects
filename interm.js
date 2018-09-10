//1.sum all numbers in a range
function sumAll(arr) {
	let begin = arr[0];
	let sum = 0;
	let end = arr[arr.length-1];
	for(let i = begin; i<=end; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumAll([1,6]));

//1. second solution
function sumAll2(arr) {
	if (arr[0]>arr[1]) {
		let arrTemp = arr[0];
		arr[0] = arr[1];
		arr[1] = arrTemp;
	};
	let diff = arr[1] - arr[0];
	let sum = 0;
	for(let i = arr[0]; i<=arr[1]; i++) {
		sum +=i;
	}
	return sum;
}

console.log(sumAll2([2,10]));
console.log(sumAll2([10,2]));
console.log("");

//2.diff two arrays
function diffArray(arr1, arr2) {
	let newArray = [];
	function onlyInFirst(first, second){
		for (let i = 0; i<first.length;i++) {
			if(second.indexOf(first[i]) === -1) {
				newArray.push(first[i]);
			}
		}
	}
	onlyInFirst(arr1, arr2);
	onlyInFirst(arr2, arr1);
	return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//intermediate code solution
function diffArray2(arr1, arr2) {
	return arr1.concat(arr2).filter((item)=> !arr1.includes(item) ||
	!arr2.includes(item) )
}

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//advanced
function diffArray3(arr1, arr2) {
	return arr1.filter(el => !arr2.includes(el)).concat(arr2.filter(
		el => !arr1.includes(el)))
}

let one = [1,2,3,5]
console.log(diffArray3([1,2,3,5], [1, 2, 3, 4, 5]));
console.log(one);
console.log("");
//3.seek and destroy
/*You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all elements
from the initial array that are of the same value as these arguments*/
function destroyer(arr) {
	let newArray = [...arr];
	for(let i=0;i<newArray.length;i++) {
		for(let j=1;j<arguments.length;j++) {
			if (arr[i] === arguments[j]) {
				delete newArray[i]
			}
		}
	}
	//IMPORTANT!!
	return newArray.filter(Boolean);

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//second solution
function destroyer2(arr) {
	let args = Array.from(arguments).slice(1);
	return arr.filter((val)=> !args.includes(val));
}
console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));
console.log("");
//4. wherefore art thou
/*Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching name and value pairs
(second argument). Each name and value pair of the source object has to be
present in the object from the collection if it is to be included in the
returned array.*/
function whatIsInAName(collection, source) {
	let srcKeys = Object.keys(source);

	return collection.filter(function(el) {
		for(let i = 0; i<srcKeys.length;i++) {
			if(!el.hasOwnProperty(srcKeys[i]) || el[srcKeys[i]] !==
				source[srcKeys[i]]) {
				return false;
			} 
		}
		return true;
	});
}

function whatIsInAName2(collection, source) {
	let srcKeys = Object.keys(source);

	return collection.filter(function(obj) {
		return srcKeys.every( function(key) {
			return (obj.hasOwnProperty(key) && obj[key] === source[key]);
		});
	});
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
	{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" }],
	{ last: "Capulet" }));
console.log(whatIsInAName2([{ first: "Romeo", last: "Montague" },
	{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" }],
	{ last: "Capulet" }));
console.log("");

//5.spinal tap case
/*convert a string to a spinal case, spinal case is all-lowercse-words-joined-by
-dashes*/
function spinalCase(str) {
	let newStr = str.match(/[A-Za-z][a-z]*/g);
	return newStr.join("-").toLowerCase();
}

console.log(spinalCase("ThisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log("");
//6.pig latin
/*pig latin takes the first consonant (or consonant cluster) of English 
word, moves it to the end of the word and suffiex an "ay". If a word
beigns with a vowel you just add "way" to the end.*/
function translatePigLatin(str) {
	let regex = /^[aeiuo]/i;
	if(regex.test(str)) {
		return str+"way";
	} else {
		let firstConsonants = str.match(/^[^aeiou]+/);
		let len = firstConsonants[0].length;
		let newStr = str.slice(len)
		+ str.substr(0,len) + "ay";
		return newStr;
	}
}

console.log(translatePigLatin("clrifornia"));
console.log(translatePigLatin("alrifornia"));
console.log(translatePigLatin("glove"));
console.log("");
//7.search and replace
/*perform a search and replace on the sentece using the arguments
provided and return the new sentece. First argument is the sentence
to perform the search and replace on. Second argument is the word
that you will be replacing (before). Third argument is what you will
be replacing the second argument with (after)*/
function myReplace(str, before, after) {
	let begin = str.toLowerCase().indexOf(before.toLowerCase());
	//console.log(begin);
	let substr = str.substring(begin, begin + before.length);
	//console.log(substr);
	if (/[A-Z]/.test(substr[0])) {
		after = after[0].toUpperCase() + after.substr(1);
	}
	//console.log(str.replace(substr, after).length);
	return str.replace(substr, after);
}

console.log(myReplace("Let us go to the Store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
console.log("");
//8.DNA Pairing
/*The DNA strand is missing the pairing element. Take each character, get
its pair and return the results as a 2D array. Base pairs are a pair of AT
and CD. Match the missing element to the provided character. Return the
provided character as the first element in each array.*/
function pairElement(str) {
	let arrayOfChars = str.split("");
	console.log(arrayOfChars);
	return arrayOfChars.map(function(char) {
		switch(char) {
			case "A":
			return ['A', 'T'];
			break;
			case "T":
			return ['T', 'A'];
			break;
			case "C":
			return ['C', 'G'];
			break;
			case "G":
			return ['G','C'];
			break;
		}
	});
}

console.log(pairElement("ATCGA"));

//intermediate
function pairElement2(str) {
	let map = {"A": "T", "T":"A", "C":"G", "G":"C"};
	let strArr = str.split("");
	for (let i=0;i<strArr.length;i++) {
		strArr[i] = [strArr[i], map[strArr[i]]];
	}
	return strArr;
}

console.log(pairElement2("ATCGA"));
console.log("");
//9.Missing letters
/*find the missing letter in the passed letter range and return it. If
letters are present in the range, return undefined.*/
function fearNoLetter(str) {
	let i, j = 0, m = 122;
	//j - letter in str
	if(str) {
		str = str.toLowerCase();
		i=str.charCodeAt(0);
		while(i<=m && j < str.length) {
			if(String.fromCharCode(i) !== str.charAt(j)) {
				return String.fromCharCode(i);
			}
			i++;j++;
		}
	}
	return undefined;
}

console.log(fearNoLetter("abcdeghh"));
console.log("");

//10.Sorted union
/*write a function that takes two or more arrays and returns a new array
of unique values in the order of the original provided arrays*/

function uniteUnique(...arr) {
	let newArr = [];
	for(let i=0;i<arr.length;i++) {
		for(let j = 0;j<arr[i].length;j++) {
			if(newArr.indexOf(arr[i][j]) === -1) {
				newArr.push(arr[i][j]);
			}
		}
	}
	return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

//another solution
function uniteUnique2(arr) {
	let concatArr = [];
	let i = 0;
	//GREAT!!!
	while(arguments[i]) {
		concatArr = concatArr.concat(arguments[i]);
		i++;
	}
	//----
	let uniqueArr = concatArr.filter(function(item, pos) {
		return concatArr.indexOf(item) == pos;
	});
	return uniqueArr;
}

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique2([1, 2, 3], [5, 2, 1]));

//11.convert HTML entities
/*convert the characters &,<,>,",' in a string to their corresponding
HTML enitites*/
function convertHTML(str) {
	let charArr = str.split("");
	return charArr.map(function(item) {
		switch(item) {
			case "&":
			return "&amp;";
			break;
			case "<":
			return "&lt;";
			break;
			case ">":
			return "&gt;";
			break;
			case "\"":
			return "&quot;";
			break;
			case "\'":
			return "&apos;";
			break;
			default:
			return item;
		}
	}).join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//intermediate - use replace!
function convertHTML2(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g,
		"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}

console.log(convertHTML2("Dolce & Gabbana"));
console.log(convertHTML2("Hamburgers < Pizza < Tacos"));

//advanced - use object lookup!
function convertHTML3(str) {
	let htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
    };
    return str.split('').map(entity=> htmlEntities[entity] || entity)
    .join('');
}

console.log(convertHTML3("Dolce & Gabbana"));
console.log(convertHTML3("Hamburgers < Pizza < Tacos"));

//12.sum all odd fibonacci numbers
/*given a positive integer num, return the sum of all odd fibonacci numbers
that are less than or equal to num*/
function sumFibs(num) {
	let first = 1; let second = 1;
	let temp = 0;
	let numbs = [1, 1];
	if (num>2) {
		for (let i =2; i<=num; i= i+second) {
			console.log(i);
			temp = first;
			first += second;
			second = temp;
			numbs.push(first);
		}
	}
	else if (num==2) {
		return 2;
	}
	else {
		return 1;
	}
	console.log(numbs);
	return numbs.filter(item=>item%2!=0).reduce((a,b)=>a+b);
}
console.log(sumFibs(75025));

//another basic solution
function sumFibs2(num) {
	let current = 1;
	let previous = 0;
	let result = 0;
	while(current<=num) {
		if(current%2!=0) {
			result+=current;
		}
		current += previous;
		previous = current -previous;
	}
	return result;
}
console.log(sumFibs2(1000));
console.log("");
//13.sum all primes
/*sum all the prime nums up to and including the provided number*/
function sumPrimes(num) {
	function isPrime(n) {
		if(n<2) return false;
		let q = Math.floor(Math.sqrt(n));
		for(let i = 2;i<=q;i++) {
			if(n%i==0) {
				return false;
			}
		}
		return true;
	}
	let numbs = [];
	for(let i = 2; i<=num;i++) {
		numbs.push(i);
	}
	let allPrimes = numbs.filter(isPrime);
	return allPrimes.reduce((a,b)=>a+b);
}
console.log(sumPrimes(19));
console.log("");
//14.smallest common multiple
/*find the smallest common multiple of the provided parameters that
can be evenly divided by both, as well as by all sequential numbers
in the range between these parameters*/
function smallestCommons(arr) {
	//get into ascending order
	if(arr[0]-arr[1]>0) {
		let temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
	}
	let divisors = []; i = 1;
	while(i<=arr[1] - arr[0] + 1) {
		divisors[i] = [i];
		i++;
	}
	divisors.shift();

	for(let i = 0; i<divisors.length;i++) {
		for(let j = 1;j<divisors[i];j++) {
			console.log(j);
			console.log(divisors[i]);
			divisors[i] = divisors[i].concat([j]);
			//console.log(divisors);
		}
	}
	return divisors;
}
console.log(smallestCommons([1, 5]));