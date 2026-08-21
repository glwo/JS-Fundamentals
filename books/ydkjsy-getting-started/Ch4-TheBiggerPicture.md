Pillar 1: Scope and Closure

- Organization of variables into units of scope (functions, blocks) is a foundational behavior of any language
- Scope is like a bucket, vars are like marbles you put into the bucket
- Scopes nest inside one another
  - Only vars at that level of scope or in higher/outer scopes are accessible, vars in lower/inner scopes are not
- The above concept is known as "lexical" scope, which is how JS operates.
- People argue JS is not lexically scoped because of hoisting and var declared variables
  - Hoisting: when all vars declared anywhere are treated as if they're decleared at the beginning of the scope
  - var declarations: var-declared variables are function scoped, even if they appear inside a block.
- "All of these are just unique parts of the language that should be learned by all JS devs" LMAOOOOO
- Closure is a natural part of lexical scope
  - When a function makes reference to variables of an outer scope, and is then passed around as a value and executed
    in other scopes, it maintains access to the original scope variables; this is a closure.
- Closure super meta, drives all of the most important patterns in JS

Pillar 2: Prototypes

- JS is one of the very few languages you can declare objects prior to defining their structure.
- Prototype system: 2 objects connecting with each other and cooperating dynamically, through sharing a `this` context
- Behavior delegation: Forget classes, embrace objects are objects and let them cooperate through the prototype chain.

Pillar 3: Types and Coercion

- Type aware tooling (TS or Flow) only helps devs if they've learned how types operate in JS first.
