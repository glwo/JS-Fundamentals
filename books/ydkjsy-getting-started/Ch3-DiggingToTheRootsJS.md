Iterables:

- "Value that can be iterated over" (lol)
- The protocol creates an interator instance from an interable and consumes just that iterator instance to completion
- ES6 defined the basic data structure/colletion types in JS as iterables (strings, arrays, maps, etc)
- Remember .values for values only and .entries if we need index and values

Closure:

- Every JS programmer has used Closure whether they know it or not, one of the most pervasive programming concepts.
- Closure: When a function remembers and continues to access to variables, even when it is called in a different scope.
- Objects don't get closures, functions do.

this Keyword:

- Two common misconceptions:
  - this refers to the function itself
  - this points to the instance that a method belongs to.
- You can invoke a function using .call, ex "assignment.call(otherHomework)"

Prototypes:

- Where this is a characteristic of a function execution, a prototype is a characteristic of an object
- Prototyes are specifically resolution of an object property's access.
- Can think of it as a linkage of two objects, which is hidden behind the scenes.
- This linkage is created when an object is created, and links to an object that already exists.
- This exists so that accesses against Object B that B does not have are relegated to Object A.

Object Linkage:

- To define a linkage, you can use the Object.create(...) utility.
- Can use Object.create(null) to create an object with no linkages.

this Revisited:

- this is actually useful when we are working with protyped powered function calls
- this supports dynamic context so when this is called on objects in the prototype chain the methods return the expected results.
