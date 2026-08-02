JS has three main pillars - Scope/Closures - Prototypes/Objects - Types/Coercion

TC39 Committee is comprised of 50 diff devs from large companies, meeting bimonthly to discuss changes members have made.

V8 Engine = Chrome's JS Engine
SpiderMonkey Engine = Mozilla's JS Engine

Various JS environments (node, browser engines, etc) add apis to the global scope of your program

Console.log is not defined by JS, but by every js environment you have ever used.

JS is multiparadigm, you can easily write class-oriented. procedural, or functional programming style code.

Class/Object oriented: organize code by collecting logic and data together into classes

Procedural: organize code in a top down, linear progression through a pre-determined set of operations,
usually collected together in related units called procedures.

Functional Programming: Organize code into functions (pure computation as opposed to procedures), and the adaptations of
those functions as values.

JS is backwards compatible. Once code is determined to be valid JS, it will be valid for all eternity.

Transpile: convert source code from one form to another.
Most common transpiler is Babel, converts newer Js syntax to an equivalent older syntax.

Polyfill/shim: Forwards compaitibility causes issue due to missing API, provide definition for missing api method in the
older environment. (As you can imagine this is some of the most insane slop nonsense of all time, but JS will never stop improving, hopefully I don't have to ever work with it).

Is JS an Interpreted or Compiled language?:

- Majority believe its a interpreted (scripting) language, but it's more complicated than that.
- It is important to have a solid grasp on if JS is interpreted or compiled so you understand errors (and can handle them correctly)
- Historically, scripted/interpreted languages were executed top down, causing syntax errors to fail entire programs during execution
- Parsed languages go through a processing step (parsing) prior to execution, catching syntax errors and preventing partial execution
- JS source code is parsed prior to execution.

JS is a parsed language. Is it Compiled?

- Answer is closer to yes than no (COPE!)
- Parsed JS -> Binary -> execution (by JS virtual machine).
- Real world ex:
  - Leaves dev editor -> tranpiled by Babel -> packed by Webpack (and other build processes) -> delivered to JS engine
  - JS engine parses the code to an AST (abstract syntax tree)
  - Engine converts AST to byte code -> refined/converted even further by the optimizing JIT(Just In Time) compiler
  - JS VM executes the program
- That's the entire argument: "In spirit, if not in practice, JS is a compiled language".
- "Since JS is compiled, we are informed of static errors before our code is executed"

WASM (Web Assembly):

- JS performance is constantly under scrutiny, when it comes to how quickly JS can be parsed/compiled and executed
- In 2013 mozilla devs were able to port unreal engine from c to js, running 60 fps, using a subset of js: ASM.js
- ASM was introduced as a way to combat the decreasing runtime performance of JS, but never intended to be touched by devs
- ASM was intended to be a representation of a program which was transpiled from another language eg C, including type annotations
- ASM began the trend/belief that tooling-created versions of programs could be processed more efficiently by the JS engine
- WASM came a few years later, with the same intent of converting non JS programs to run on the JS engine
- Unlike ASM, WASM gets arouynd the delays of JS parsing/compilation by representing the program entirely different than JS
- WASM is a representation format (like assembly) that allows the JS engine to skip the parsing/compilation step.
- Other than performance, WASM also supports more parity for non-JS languages to the web. Supports/converts unsupported features in JS to run on the JS engine.
- WASM relieves pressure to support features in JS that are mainly intended to be used by transpiled programs in other languages.
- JS feature development can stay impartial to the opinions of other languages/communities, thanks to WASM.
- WASM is evolving to become a cross platform virtual machine. (programs compiled once, run many places).`
- "WASM won't replace JS, it simply augments what the web (+ JS) can accomplish".

Strict Mode:

- Released in 2009, opt in mechanism to encourage better js progams
- Better to be thought of as a guide to encourage the best code for the JS engine to efficiently run, rather than a set of restrictions
- Mostly controls early errors, which are non syntax errors that are still thrown at compile time, eg naming two function parameters identically
- Should treat strict mode like a linter, listen to it for the best chance of quality + performance
- If you feel handcuffed by strict mode, your approach probably sucks, reconsider.
- Can turn it on per file or per function with "use strict";, can't use both, pick file or function
- Only use per function when you are converting a previous non strict mode file
- Strict mode will never be the default due to JS backwards compatibility

Summary:

- JS is an implementation of ECMA script, guided by the TC39 committee and hosted by ECMA. Runs in browsers and envs (eg node)
- JS is a multiparagigm language, devs can use syntax and capabilities of procedural, OO/classes, and functional programming
- Js is a compiled language (yea for sure br0), meaning the tools process and verify a program prior to execution
