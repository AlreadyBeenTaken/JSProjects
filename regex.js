function sayHello(name) {
	console.log("Hello " + name);
}

sayHello("Kamila");

class Vegans {
	constructor(name, surname, age){
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
}

const baby = new Vegans("Kamila", "Dobija", 22);
console.log(baby);

//Regular expressions
let quote = "In simplicity there is truth";
let regexEx = /simpLicity/i;
let result = regexEx.test(quote);
console.log(result);

//extract matches - match()
let bigRiver = "Wisla is a big, big river";
let regex = /biG/i;
console.log(bigRiver.match(regex));

//extract more than one match - g flag
let regexG = /Big/gi;
console.log(bigRiver.match(regexG));

//extract ANYTHING with wildcard period "."
// (cool for misspelling)
let hvariations = "ham is hem is him";
let regexWild = /h.m/g;
console.log(hvariations.match(regexWild));

//character class
let vowels = "I am not sure how the outpul will look like";
let regexCharClass = /[aeiou]/gi;
console.log(vowels.match(regexCharClass));

//letters through - [a-z]
let sentence = "Ala ma kota";
let regHyphen = /[a-z]/ig;
console.log(sentence.match(regHyphen));

/*
//letters AND numbers - all!
let tel = "My number is 123567023";
let regexHyphen2 = /[a-z0-9]/ig;
console.log(tel.match(regexHyphen2));

//DO NOT MATCH - negated character sets, caret: ^
let sentence2 = "Dunno what i'm doing !@#123";
let regexNot = /[^0-9aeiou]/ig;
console.log(sentence2.match(regexNot));
*/

//+ - one or more time in a row
let referee = "referee";
let regexPlus = /e+/ig;
console.log(referee.match(regexPlus));

//asterisk/* - match zero or more times !!!!!!!!!
let call = "Aaaaaaaaargh!";
let regexAster = /A[a]*/;
console.log(call.match(regexAster));

//lazy matches (unlike defautl greedy) - ?
let name = "Warszawska";
let regexGreedy = /W.*s/;
let regexLazy = /W.*?s/;
console.log(name.match(regexGreedy), name.match(regexLazy));

//^ (caret) outside a character set -> to find pattern AT THE
//BEGINNING of string and END of string -> $ (dollar sign)
let winner = "Tommy is a winner, Mark is not";
let winner2 = "Mark is a winner, Tommy is a loser";
let regexFirst = /^Tommy/;
let regexEnd = /loser$/;
console.log("Match beginning:", regexFirst.test(winner), regexFirst.test(winner2));
console.log("Match end:", regexEnd.test(winner), regexEnd.test(winner2));

//shorthand for all letters, numbers and _ -> \w
let longhand = /[a-zA-Z0-9_]+/;
let shorthand = /\w+/;
let sentence3 = "Idsadasdjasopdasj2121ASAS_";
console.log("\\w:", shorthand.test(sentence3));

//match everything BUT letters and numbers -> \W
//match all digits/numbers -> \d
let price = "Your doughnut costs 5.00 $";
//let regexNumb = /\d/g;
let regexNumb = /\d.* /;
console.log(price.match(regexNumb));

//match all non-numbers -> \D
console.log(price.match(/\D/));

//username
let username = "Jack 2131";
let userCheck = /^[a-zA-Z]{2,}[0-9]*$/;
console.log(username.match(userCheck));
console.log(userCheck.test(username));

//match whitespace -> \s, non-whitespace -> \S
let whiteSpace = "Hey hey hey";
let regexSpace = /\s/g;
console.log(whiteSpace.match(regexSpace));


//specified number of occurrences { } - quantity specifiers
let yawn = "Yaaaaah";
let regexSpec = /a{1,5}/;
console.log(regexSpec.test(yawn));

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
console.log(ohRegex.test(ohStr));

//{3,} -> no upper limit!
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
console.log(haRegex.test(haStr));

//{4} -> exactly 4!
let fun = "fuuun";
let regexFun = /fu{2}n/;
console.log(regexFun.test(fun));

//check for zero or one of the preceding el -> ?
let am = "color";
let br = "colour";
let regColor = /colou?r/;
console.log("American:", regColor.test(am), "British:", regColor.test(br));

//lookaheads
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
console.log(pwRegex.test(sampleWord));

//capture groups
let someNumbers = "113 23 113 113";
let someNumbers2 = "11 11 11 11";
let someNumbers3 = "11 11 11"
let regGroups = /^(\d+)\s\1\s\1$/;
console.log(someNumbers+" :", someNumbers.match(regGroups));
console.log(someNumbers2+" :", someNumbers2.match(regGroups));
console.log(someNumbers3+" :", someNumbers3.match(regGroups));


//use capture groups to search and replace
let sentence4 = "Everyone needs a friend";
let regexReverseWords = /(\w+)\s(\w+)\s(\w+)\s(\w+)/;
let reversed = sentence4.replace(regexReverseWords, '$4 $3 $2 $1');
console.log(sentence4 +" :", reversed);

//remove whitespace
let hello = "   Hello, World!  ";
let wsRegex = /^\s*\w+,\s\w+!\s*/;
let newHello = hello.replace(wsRegex, 'Hello, World!');
console.log(newHello);