Values vs References:

- In ch2 we introduced 2 main types of values: Primitives and Objects
- We have yet to discuss one key difference between the 2: How they are passed around.
- In many languages the developer gets to choose between assigning/passing a value as the value itself, or as a reference to the value.
- In JS this is entirely determined by the type of the value. ("surprising a lot of devs")
- If you assign/pass a value itself, the value is copied. Ex:
  - `var myName = "Kyle";`
  - `var yourName = myName;`
  - `myName = "Frank";`
  - `console.log(myName) // Frank`
  - `console.log(yourName) // Kyle`
- In the above example the yourName var has a separate copy of the string "Kyle". That is because strings are primitives
- Primitive values are ALWAYS assigned/passed as value copies.
- References are the idea that 2 or more vars are pointing to the same value. Modifying this shared value affects all refs
- In JS, only object values (arrays, objects, functions, etc.) are treated as references.
- Primitives are held by value, objects are held by reference. There is no way to override this in either direction.

So Many Function Forms:

- Anonymous function
  - var awesomeFunction = function(something) { return amazingStuff };
  - Anonymous functions sometimes receive inferred names, but dev console will usually report "anonymous function"
  - Even if the name is inferred, it is still an anonymous function.
- Named function
  - var awesomeFunction = function someName(something) { return amazingStuff };
  - name ("someName") is directly associated with the function at compile time.
- Arrow functions
  - f = () => 42;
  - Keep in mind that arrow function expressions are syntactically anonymous. No direct name identifier for the function.
  - "Not a fan of anon functions, for that reason I don't think u should use arrow functions frequently"
  - "This kind of function has a specific purpose (ie: handling the `this` keyword)"
- No easy way out, you have to build familiarity with all function forms and their use cases.

Coercive Conditional Comparison

- Conditional expressions often have to make coercion-oriented comparisons to make their decisions
- `if` and `? :` ternary statemets as well as branches in for/while loops, all perform implicit value comparison
- Both strict and coercive comparisons occur, coerce the input value to the expected usually.
- Can't escpare coercions, buckle down and learn them.

Protypal Classes:

- Not often used in code but very often asked during interviews.
- Predecessor to ES6 Class system, another way of wiring up prototypal linkages.
- Ex:
  `
  function Classroom() {
  ...
  }

Classroom.prototype.welcome = function hello() {
console.log("Welcome, students!")
};

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!
`

- All functions by default reference an empty object at a property named `prototype`
  - this is NOT the function's prototype (where the function is prototype linked to)
  - This is instead the prototype object to link to when other objects are created by calling the function with `new`
