Each file is a progam:

- This matters mainly because of error handling
- One file may fail, and that will not necessarily halt the next file from being processed
- The only way multiple js files at as a single program is by sharing their state via "global ,scope"
- ES6 introduced a module format, which is also file based, loaded via an import statement or <script type=module>
- Though it might not be intuitive, modules are also treated separately by JS

Values:

- Values come in 2 forms in JS: primitives and objects
- Primitives in JS consist of strings, booleans, numbers, null, undefined, and Symbols (usually used in low level code)

Arrays and Objects:

- Other type of value in JS (not primitive) is objects
- Arrays are types of objects which contain a list of values.
- JS arrays can hold any value type (primitive or object).
- Objects are more general: an unordered, keyed collection of any various values.
- Can use the typeof operator to check the type of a value, tho typeof null incorrectly returns object.
- let has a more limited access to the variable than var. This is called "Block scoping" rather than regular/function scoping
- "Instead of avoiding var in favor of let or const, you should learn where to use var properly and apply it there instead"
- const must be given a value when it is declared, and it cannot be reassigned later
- You shouldn't use const with object values, bc object values can still be changed, despite the var not being reassigned.
- Best and safest way to use const is to only use it with primitive values.

Functions

- In JS we consider "function" to take the broader meaning of a related term "procedure"
- A procedure is a collection of statements that can be invoked one or more times, may be given multiple inputs, and provide multiple outputs.
- Association of the identifier (myFunction) and the function value (code in function) happens during compilation, prior to execution
- IMPORTANT: In JS functions are values that can be assigned and passed around.
- JS functions are a special object value type.
- Since functions are values they can be assigned as properties on objects (does literally anyone do this?)

Comparisons

- JS has several mechanisms to enable value comparison
- We must be aware of the equality comparison vs the equivalence comparison
- "===" often known as "strict equality" operator. Or described "checking both the value and the type"
- "===" lies in two instances
  - NaN === Nan // false
  - 0 === -0 // true
- To work around these lies use Number.isNaN() or Object.is()
- JS does not use === for structural equality for objects, instead === uses identity equality for object values.
- JS does not provide a way to check structural equality of object values. If you want to do it, you'll need to build the checks urself.

Coercive comparisons:

- Coercion: A value of one type being converted to its respective representation of another type.
- Coercion is a core principal of JS (slop), not some optional feature that can reasonably be avoided.
- Coercion + comparison is slop central, with many normies complaining about it, esp around ==
- Most discourse around "==" comes from a short list of corner cases.
- "==" coerces types prior to checking for equality, should be described as "coercive equality" rather than "loose"
- This gets tricky when using number operators (<, >, etc). Since these also coerce types similar to ==

How We Orgnanize JS:

- JS is organized by two paradigms: Classes and modules. It is imperative you know both of them.

Classes:

- We will use a very traditional definition of class. Similar to what you would expect in OOP langs like C++ or Java.
- A class in a program is a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data.
- Classes themselves are not concrete, if you want a concrete value, you need to instantiate a class with the "new" keyword.

Class Inheritance:

- Common to "class-oriented" design, not super common in JS is "Inheritance" and "polymorphism"
- Can use the "extends" keyword to create a child class with additional behavior.
- Both inherited and overridden methods can have the same name and coexist: concept known as polymorphism.
-
