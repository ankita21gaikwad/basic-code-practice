// Method Overloading is same method name with different number of parameters or different datatype of parameters

function methodOverloading(): boolean {
  console.log('The sum of two numbers is ' + add(1, 2));
  console.log('The sum of two strings is ' + add('a', 'b'));
  return true;
}

// add method with two parameters with string datatype
function add(a: string, b: string): string;

// add method with two parameters with number datatype
function add(a: number, b: number): number;

// method definition of add
function add(a: any, b: any): any {
  return a + b;
}

methodOverloading();



