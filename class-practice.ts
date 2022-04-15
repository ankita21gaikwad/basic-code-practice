// Creating a class
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