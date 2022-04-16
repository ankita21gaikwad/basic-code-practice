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
// Inheritance is the ability to create new classes from an existing class 
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

// ***************************************************************************************************************************** //


// ***********Method Overriding***********
// Method Overriding is a mechanism by which the child class redefines the superclass’s method
class Phone {
    doCall(): void {
        console.log('doCall() method includes audio call');
    }
}

class SmartPhone extends Phone {
    doCall(): void {
        console.log('doCall() method includes audio and video call');
    }
}

var smartphone = new SmartPhone();
smartphone.doCall();

// ***************************************************************************************************************************** //


// ***********Static members***********
// The static keyword can be applied to the data members of a class. 
// A static variable retains its values till the program finishes execution.
// Static members are referenced by the class name.
class Human {
    static speak(): void {
        console.log('Human speaks a language');
    }
}

Human.speak();

// ***************************************************************************************************************************** //


// ***********The 'instanceof' operator***********
// The instanceof operator returns true if the object belongs to the specified type.
class Person { }
var person = new Person();
var isPerson: boolean = person instanceof Person;
console.log('Is person an instance of Person? : ' + isPerson);

// ***************************************************************************************************************************** //


// ***********Data Hiding***********
// A class can control the visibility of its data members to members of other classes. This capability is termed as Data Hiding.
// Object Orientation uses the concept of access modifiers or access specifiers to implement the concept of Encapsulation. 
// The access specifiers/modifiers define the visibility of a class’s data members outside its defining class.
// public : A public data member has universal accessibility. Data members in a class are public by default.
// private : Private data members are accessible only within the class that defines these members. 
// If an external class member tries to access a private member, the compiler throws an error.
// protected : A protected data member is accessible by the members within the same class as that of the former and also by the members of the child classes.
class Bank {
    bankName: string = 'Bank Of America';
    private bankAccountNumber: number = 9087656789;
}

var bank = new Bank();
console.log(bank.bankName); // accessible
// console.log(bank.bankAccountNumber); Error :  Property bankAccountNumber is private and only accessible within class Bank
