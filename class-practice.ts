// ***********Creating a Class***********
// Class : A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object
class Car {
    // 1. field : A field is any variable declared in a class. Fields represent data pertaining to objects
    model: string;

    // 2. constructor : Responsible for allocating memory for the objects of the class.
    constructor(model: string) {
        this.model = model;
    }

    // 3. method/function : Functions represent actions an object can take. They are also at times referred to as methods
    displayModelName(): void {
        console.log('Model of the Car is : ' + this.model);
    }

}

// Create an object of a class
var obj = new Car('AUDI');

// Access the field
console.log('Reading attribute value Model as : ' + obj.model);

// Access the method/function
obj.displayModelName();

// ***************************************************************************************************************************** //


// ***********Class Inheritance***********
// Inheritance is the ability to create newclasses from an existing class 
// The class that is extended to create newer classes is called the parent class/super class. 
// The newly created classes are called the child/sub classes.
// A class inherits from another class using the ‘extends’ keyword. 
// Child classes inherit all properties and methods except private members and constructors from the parent class.
class AutoMobile {
    Price: string;

    constructor(price: string) {
        this.Price = price;
    }
}

class Audi extends AutoMobile {
    displayPrice(): void {
        console.log('Price of AUDI is :' + this.Price);
    }
}

var audi = new Audi('$41,800');
audi.displayPrice();