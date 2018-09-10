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