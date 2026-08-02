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
