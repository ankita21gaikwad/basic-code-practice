// ***********Creating an Interface***********
// Interface : An interface is a syntactical contract that an entity should conform to. 
// In other words, an interface defines the syntax that any entity must adhere to.
// Interfaces define properties, methods, and events, which are the members of the interface. 
// Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.
interface Ipl {
    teamName: string;
    city: string;
    teamPosition: number;
    result(): string;
}

var rcb: Ipl = {
    teamName: 'Royal Challengers Bangalore',
    city: 'Bangalore',
    teamPosition: 6,
    result(): string {
        return 'To play semifinals';
    }
}

var rr: Ipl = {
    teamName: 'Rajasthan Royals',
    city: 'Jaipur',
    teamPosition: 2,
    result(): string {
        return 'To play finals';
    }
}

var mi: Ipl = {
    teamName: 'Mumbai Indians',
    city: 'Mumbai',
    teamPosition: 10,
    result(): string {
        return 'Unable to qualify for semifinals';
    }
}

console.log(mi.result());
console.log(mi.teamPosition);
console.log(rcb.teamName);
console.log(rcb.city);
console.log(rr.result());
console.log(rr.teamPosition);