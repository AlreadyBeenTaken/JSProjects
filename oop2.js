//17&18.use inheritance!, create a parent(supertype), new (better)
//way to create an instance of a class (eg.Animal)

function Animal() {}
Animal.prototype.eat = function() {
	console.log("yum yum yum");
};

let animal = Object.create(Animal.prototype);
console.log(animal instanceof Animal);
animal.eat();

//19.set child's prototype to an instance of the parent
function Mammal() {};

Mammal.prototype = Object.create(Animal.prototype);
let horse = new Mammal();

//20.reset an inherited constructor property
console.log(horse.constructor);//func Animal!!!
Mammal.prototype.constructor = Mammal;
console.log(horse.constructor);

//21.add methods after inheritance
Mammal.prototype.parentThing = function() {
	console.log('Breastfeeding is fine!');
};

horse.parentThing();

//22.override inherited methods
Mammal.prototype.move = function() {
	console.log("I'm walking as I'm talking!");
};

function Dolphin() {}
Dolphin.prototype = Object.create(Mammal.prototype);
Dolphin.prototype.constructor = Dolphin;
let dolphin = new Dolphin();
dolphin.move();//oh no, dolphin cant walk so why is it walking? xd
Dolphin.prototype.move = function() {
	console.log("I'm swimming like a mermaid :3");
};
dolphin.move();//now is fine!

//--------------------------------------------
//23.use mixin to add common behavior to unrelated objects
function Person(name) {
	this.name = name;
}

Person.prototype.legs = 2;
let mixinSing = function(obj) {
	obj.sing = function () {
		console.log('lalalalala');
	}
}

mother = new Person('Sabina');
console.log(mother.name, mother.legs);
mixinSing(Person);
mixinSing(mother);
mixinSing(Dolphin);
Person.sing();//works both on instances and sort-of-classes(?)
mother.sing();

//24.use closure to protect properties within an object from
//being modified externally

function Customer() {
	let rentedFilms = 15; //private property

	this.getRentedFilmsCount = function() {
		//publicly available method that customer object can use
		return rentedFilms;
	};
}

let newCustomer = new Customer();
let countFilms = newCustomer.getRentedFilmsCount();
console.log(newCustomer.rentedFilms); //undefined -> no access
console.log("",newCustomer,"\n", countFilms);

//25.Immediately Invoked Function Expression - IIFE 
//this beginning bracket is needed, checked!!
(function () {
	console.log("I love myself!");
})();

//26.use IIFE to create a module
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked