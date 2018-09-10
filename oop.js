//1.simple object
let dolphin = {
	name: "Sophia",
	age: 3,
	rescued: true
};

//2. access properties
console.log(dolphin.name, dolphin['rescued']);

//3.method
dolphin.sayName = function() {return "Hi, my name is " + this.name};
console.log(dolphin.sayName());

//4. this keyword -> better than dolphin.name (just changed the
//above code)

//5.constructor -----------------------------
function Student() {
	this.name = "Sabrina Malone";
	this.age = 19;
	this.major = "Engineering";
	this.suspended = false;
};

//6.create object using a constructor
let sabra = new Student();
console.log(sabra);

//7.extend constructors to receive args
function Cat(name, color) {
	this.name = name;
	this.color = color;
	this.legs = 4;
}

let noname = new Cat('Brida', 'biscuit-like');
console.log(noname);

//8.verify an object created with the constructor - instanceof
console.log(noname instanceof Cat);
console.log(dolphin instanceof Cat);

//9.understand own properties

//10.prototype properties to reduce duplicate values
function Bird(name) {
	this.name = name;
	Bird.prototype.numLegs = 2;
}

let sparrow = new Bird('Billy');
console.log(sparrow); //doesnt print prototype to console! :O

//11.iterate over all properties

//12.constructor property
console.log("constructor property:",noname.constructor === Student);

//13.change the prototype to a new object
function Book(title) {
	this.title = title;
}

Book.prototype = {
	//IMPORTANT----------
	constructor: Book,
	//IMPORTANT----------
	cover: "pretty",
	describe: function() {
		console.log("This book's title is:", this.title);
	}
}

let goodBook = new Book("Lolita");
console.log(goodBook);
goodBook.describe();
console.log(goodBook.constructor);
//14.set the constructor property when changing the prototype (above!!)

//15. like people inherit genes from parents, objects inherit
//their prototypes from their constructor function!
let isProt = Book.prototype.isPrototypeOf(noname);
console.log(isProt);

//16.prototype chain
let protChain = Object.prototype.isPrototypeOf(Book.prototype);
let protChain2 = Book.prototype.isPrototypeOf(goodBook);

console.log(protChain, protChain2);