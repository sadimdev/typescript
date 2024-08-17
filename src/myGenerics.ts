//Generics
// data types to-be-specified-later that are then instantiated when needed for specific types provided as parameters

const score: Array<number> = [1, 2, 4];
const names: Array<string> = ["sadim"];

const scores = [20, 2, 132];
const things = ["a", "b", "c"];
const voters = [{ name: "Ram" }, { name: "Shyam" }];

//Input and return needs to be of same type
function identity<Type>(array: Type[]): Type {
  return array[array.length - 1];
}

let output = identity(voters);

//<Array>

type Bottle = {
  brand: string;
  type: number;
};

function identityOne<T>(val: T): T {
  return val;
}

const result = identityOne<Bottle>({
  brand: "Sadim",
  type: 2343,
});

function getSearchProducts<T>(products: T[]): T {
    return products[products.length - 1];
  }
  
  const getMoreSearchProduct = <T,>(products: T[]): T => { // , states that it's not a jsx syntax but a syntax for generics
    return products[products.length - 1]; //return last item of array
  };
  
  
  // using Type parameters in Generic constants
  interface Database {
    connection: string,
    username: string,
    password: string,
  }
  
  function twoParameterFunction<T, U extends Database>(valOne: T, valTwo: U): object{
    return {
      valOne,
      valTwo
    }
  }
  
  let res = twoParameterFunction(3, {
    connection: "23423",
    username: "root",
    password: "root"
  });