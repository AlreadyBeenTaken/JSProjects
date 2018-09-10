//1,2.functional programming

const prepareCoffee = () => "coffee";
const prepareTea = () => "tea";

console.log(prepareTea);//function prepare Tea

const getBeverage = (prepareBeverage, numOfBev) => {
	const bevPortions = [];

	for(let portion=1;portion<numOfBev;portion++) {
		const bevPortion = prepareBeverage();
		bevPortions.push(bevPortion);
	}

	return bevPortions;
};

const teas = 21;
const coffees = 11;

console.log(
	getBeverage(prepareTea, teas),
	getBeverage(prepareCoffee, coffees)
	);


//3.4.Splice
const numbers = [33, 45, 12, 34, 2, 0, 111];
const getNumb = function(arr, index) {
	//easily changeable array!!
	var numbAfterIndex = arr.splice(index);
	var numbBeforeIndex = arr.splice(0, index);
	return [numbBeforeIndex, numbAfterIndex];
};

console.log(getNumb(numbers, 2));

//arrow functions
const summing = (num1, num2) => {return num1 + num2};

console.log(summing(2,4));

//new code ----------------------
var bookList = ["The Hound of the Baskervilles",
"On The Electrodynamics of Moving Bodies",
"Philosophiæ Naturalis Principia Mathematica",
"Disquisitiones Arithmeticae"];

function add (books, bookName) {
	let newBooks = [...books];
  newBooks.push(bookName);
  return newBooks;
};

function remove (books, bookName) {
	//earlier newBooks = books!!!!!! HUGE MISTAKE! POINTING THE
	//VERY SAME THING!!!!!
	let newBooks = [...books];
  if (newBooks.indexOf(bookName) >= 0) {
    
    newBooks.splice(newBooks.indexOf(bookName), 1);
    }
    return newBooks;
};

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

//7.Using map!
//----------------------------------------------
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line
/*
var rating = watchList.map(function(watchList)
	{return [{"title":watchList['Title'],
	"rating": watchList['imdbRating']}];});
*/
var rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );

// Add your code above this line

console.log(rating); 

//8.implement map on a prototype
//---------------------------------------------------
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(function(item) {
  	newArray.push(callback(item))
  });
  // OR LIKE THIS
 /*
 for (let x = 0; x<this.length;x++) {
    newArray.push(callback(this[x]));
  }
  */
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);

//9.use the filter method


function findRatedTitles(arr) {
	let filteredList = arr.filter(function(item) {
		if(Number(item.imdbRating) >= 8) {
			return Number(item.imdbRating);
		}
	}).map(function(item) {
		let title = item.Title;
		let rating = item.imdbRating;
		let obj = {title, rating};
		return obj;
	});
	return filteredList;
}

console.log(findRatedTitles(watchList));

//second solution
let filteredList2 = watchList.filter((elem) =>
	Number(elem.imdbRating) >= 8).map((elem) => ({title: elem.Title,
		rating: elem.imdbRating}));
console.log(filteredList2);

//9.implement your own Array.prototype.filter()
let something = [23,65,98,5];
Array.prototype.myFilter = function(callback) {
	let newArray = [];
	for(let i = 0; i<this.length; i++) {
		if(callback(this[i]) === true) {
			newArray.push(this[i]);
		}
	}
	return newArray;
}

let new_something = something.myFilter(function(item) {
	return item%5===0;
});
console.log(new_something);

//second solution
Array.prototype.filter2 = function(callback) {
	let newArray = [];
	this.forEach((item) => callback(item) ? newArray.push(item) :
		'');
	return newArray;
};
let new_something2 = something.filter2(function(item) {
	return item%5===0;
});
console.log(new_something2);

//11.return part of an array using the slice()
function sliceArray(arr, beginSlice, endSlice) {
	let newArray = [];
	newArray = arr.slice(beginSlice, endSlice);
	return newArray;
}

let inputThings = ['chair', 'door', 'fridge', 'bicycle'];
console.log(sliceArray(inputThings, 1, 3));
console.log(inputThings.slice(1));

//12.remove elements with slice()
//13.combine two arrays using concat method - does NOT mutate
function nonMutatingConcat(original, attach) {
	return original.concat(attach);
}

let first = [1,4,6,'aaaaa'];
let second = [false, 34, 'haha'];
console.log(nonMutatingConcat(first, second));
console.log(first);

//14.add elements to the end of an array using concat instead
//of push - same as before(? XD)
function nonMutatingPush(original, newItem) {
	return original.concat(newItem);
}

//15.use the reduce method to analyze data
let averageRating = watchList.filter((item) => item.Director
	=== "Christopher Nolan" ? item.imdbRating : "").map((item) =>
	Number(item.imdbRating));
let count = averageRating.length;
let averageRatingProceed = (averageRating.reduce((a,b) => a+b))/count;
console.log(averageRatingProceed);

//16.sort an array with sort()
let letters = ["a", "d", "c", "a", "z", "g"];
function alphabeticalOrder(arr) {
  return arr.sort();
}
function reversedOrder(arr) {
	return arr.sort(function(a,b) { return a < b;});
}
function ascendingOrder(arr) {
	return arr.sort((a,b) => a-b);
}
console.log(alphabeticalOrder(letters));
console.log(reversedOrder(letters));
console.log(ascendingOrder([4,7,1,2,9]));

//17.sort array without changing the original one - use empty concat,
//then sort

let oneArray = [4,67,1,22,7];
function nonMutatingSort(arr) {
	return arr.concat([]).sort(function(a,b) {return a-b});
}
console.log(nonMutatingSort(oneArray));

//18.split a string into an array using the split method
function splitify(str) {
	return str.split(/\s|,|-|\./);
	//OR ->  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));

//19.combine an array into a string using join()
function sentensify(str) {
	let toArray = str.split(/\W/);
	return toArray.join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

//20.apply functional programming to convert strings to url slugs
let someTitle = " Winter Is   Coming";
function urlSlug(title) {
	let newTitle = title.toLowerCase();
	return newTitle.split(/\s+/).filter((obj)=>{
		return obj!=='';}).join("-");
}

let winterComing = urlSlug(someTitle);
console.log(winterComing);

//21.use of every()
function checkPositive(arr){
	return arr.every(function(item) {
		return item > 0;
	});
}
console.log(checkPositive([1,-4,6,7]));

function checkAnyPositive(arr) {
	return arr.some((item)=>item>0);
}
console.log(checkAnyPositive([-1,-4,-6,-7]));

//22.introduction to curying and partial application
function addCurry(x,y,z) {
	return x+y+z;
}

function addCurry(x) {
	return function(y) {
		return function(z) {
			return x+y+z;
		};
	};
}

console.log(addCurry(10)(20)(30));

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10)); // Returns 13