#  TypeScript
- Typescript is the strongly typed programming language that builds on JavaScript, that allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

### Primitive types
- Boolean
	`const isAlive: boolean = false;` 
- number
	`const age: number = 21;`
- string
	`const name: string = 'Sadim';`
- void
	- `void` represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any `return` statements, or doesn’t return any explicit value from those return statements:
	
*JavaScript has two primitive values used to signal absent or uninitialized*
- undefined
- null
### Non Primitive datatype
#### Tuples

- Tuple is a fixed length array where each element has a particular type
```
let user: [number, string] = [6, "Sadim"];
```

#### Enums : A list of related constant`
```
const enum Size {
	small = 1,
	medium = 2,
	large = 3,
}
```

#### Array 

	// array of strings
	const cars: string[] = ["Sop", "Mop"] 
	// array of numbers
	const number: number[] = [1,2,3]

#### Object

	const user: {username: string, password: string} = {
		username: "Sadim",
		password: "hello"
	}
	//instead of this
	type User = {
		username : string;
		password : string;
	}
	const user: User = {
		username: "Sadim",
		password: "Sadim123"
	}

	Array of objects

	const data: {}[] = [{}]


### **TYPES VS INTERFACE**

***1. Syntax:***

```
 type Person = {
	 name : string;
	 age: number
 }

interface Person {
	name: string;
	age: number
}
```

***2. Extending and Implementing***

-  When you **extend** an interface, you are creating a new interface that inherits the properties of the existing interface and can add new properties or methods.
-  When you **implement** an interface in a class, you are ensuring that the class adheres to the structure defined by the interface. The class must include all the properties and methods specified in the interface.

```
For interface
//Extending
interface Employee extends Person {
	employeeId: number
}

```
- **`Person` Interface**: This interface defines the shape of an object with `name` and `age` properties.
- **`Employee` Interface**: By using `extends Person`, the `Employee` interface inherits all the properties from the `Person` interface (i.e., `name` and `age`). Additionally, it introduces a new property, `employeeId`.

```
//Implementing
interface Person {
	name: string;
	age: string;
}

class Developer implements Person {
	name: string;
	age: number;
}

For type
type Employee = Person & {
	employee:number;
}
```

- **`Person` Interface**: As before, this interface requires `name` and `age` properties.
- **`Developer` Class**: By using `implements Person`, the `Developer` class is required to define `name` and `age` properties, ensuring it matches the structure of the `Person` interface.

***3. Declaration merging***

```
interface Person {
name: string;
}

interface Person {
age: number;
}

// This results in an interface Person with both properties 'name' & 'person'
```

`Note: Type cannot be merged. If you define a 'type' with the same name multiple time, Typescript will throw an error 

***4. Use cases***
- **Interface:**
    - Generally preferred for defining the shape of objects and is more often used when working with classes or when you expect your type to be extended.
- **Type:**
    - More versatile, allowing for union and intersection types, and can be used for more complex type definitions like defining primitives, unions, tuples, or function signatures.

***5. Function Signatures and Other types***

 -  Can define a broader range of types including function signatures, tuples, unions, etc.
 
`type MyFunction = (a: number, b: number) => number;`

 - Can be used to define function signatures, but it’s primarily object-based.
 
`interface MyFunction { (a: number, b: number): number; }`

***6. Complex Type Definitions:***

- More suitable for creating complex types or unions.

```
type MyType = string | number | boolean;

```

### Summary:

- **Use `interface`** when you want to define a structure that will be used with classes or when you need to leverage declaration merging.
- **Use `type`** when you need to define more complex types, such as unions or intersections, or when working with primitives or other non-object types.



### Type aliases


```
 type Creator = {
  readonly id: number; //prevents accidently modifying value of this property 'readOnly'
  name: string;
  retire: (date: Date) => void;
};

//the signature of this method we need to specify how many parameters it ganna have & type of parameter, type of return value
let creator: Creator = {
  id: 1,
  name: "",
  retire: (date) => {
    console.log(date);
  },
};
```

### Union

```
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight == "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// Literal type - limits the values (exact / specific)

type Face = "King" | "Queen" | "Jacks";
let face: Face = "Jacks";
```

### Interface

```
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string | number;
  // startTrial : ()=> string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

//Reopening the interface
interface User{
  githubToken: string
}

//interface allows to inherit properties of extended interface
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const sadim: Admin = {
  dbId: 3,
  email: "sad@s.com",
  userId: 2965,
  githubToken: "gittoken",
  startTrial: () => {
    return "Hello World";
  },
  role: "admin",
  getCoupon : (name : "sadim", off = 20) => {
    return off
  } 
};
```