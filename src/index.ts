let sale = 123_456_789;
let course = "TypeScript";
let is_published = true;

//avoid "any" type as many as you can !!
let level: any;
function render(doc: any) {
  //explicitly annotate the type
  console.log(doc);
}

//array
const array: string[] = ["a", "b", "c"];
const array1: number[] = [1, 2, 3];

const arrayObj: {}[] = [{}];

//code completion or intellisense
let numbers: number[] = [];
// numbers.forEach(n => n.)

// tuple - is a fixed length array where each element has a particular type
let user: [number, string] = [1, "Sadim"]; //restrict the tuples to two values such as key value pairs
const lowerCaseUser = user[1].toLowerCase(); //code completion or intellisense on period sign

// enum - a list of related constant
const enum Size {
  Small = 2,
  Medium,
  Large,
}

let MySize: Size = Size.Medium;
console.log(MySize);

//function -subroutine properly annotate fn
//--three compiler options :
//noUnusedParameter , noImplicitReturns, noUnusedLocals

function calculateTax(incomeTax: number, taxYear?: number) {
  //noUnusedParameter : true; incase of parameter defined and notUsed
  // let x; //noUnusedLocals : true;
  if ((taxYear || 2022) < 2022) return incomeTax * 1.2; //js implictly return undefined and undefined is not a number
  return incomeTax * 1.3; //noImplicitReturns : true;
}
calculateTax(10_000);

// or Incase of passing one argument having two parameter, taxYear uses default value in case of no 2nd parameter &
//overrides the parameter value if the argument is passed
// function calculateTax(incomeTax: number, taxYear = 2022) {  //noUnusedParameter : true; incase of
//     // let x; //noUnusedLocals : true;
//     if ( (taxYear) < 2022)
//         return incomeTax * 1.2; //js implictly return undefined and undefined is not a number
//     return incomeTax * 1.3; //noImplicitReturns : true;
// calculateTax(10_000);
// }

// function calculateTax(incomeTax: number, taxYear?: number)
//compilation - exactly same parameter as arguement

//objects

//explicitly apply type annotation

//code your write make conceptually makes sense ?optional properties to name instead of fax machine **wrong**
let employee: {
  readonly id: number; //prevents accidently modifying value of this property 'readOnly'
  name: string;
  retire: (date: Date) => void;
  //the signature of this method we need to specify how many parameters it ganna have & type of parameter, type of return value
} = {
  id: 1,
  name: "",
  retire: (date) => {
    console.log(date);
  },
};
employee.name = "Sadim";
// employee.id = 0; // compilation error

console.log(employee.name);


//Type aliases
 
type Creator = {

  readonly id: number; //prevents accidently modifying value of this property 'readOnly'
  name: string;
  retire: (date: Date) => void;
}

let creator: Creator {
  //the signature of this method we need to specify how many parameters it ganna have & type of parameter, type of return value
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};