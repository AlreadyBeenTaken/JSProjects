console.log('Hello!');
//classes
class Veganic {
    constructor(name, category, tasty) {
        this.name = name;

        const category = { "vegetable": 1, "fruit": 2, "dish": 3 };
        Object.freeze(category);
        this.category = category;
    }

    this.tasty = Object.freeze({ "YES!": 1, "NO": 2 });
};

var avocado = new Veganic("avocado", 1, 1);
console.log(avocado);