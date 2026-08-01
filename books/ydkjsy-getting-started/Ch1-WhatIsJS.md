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
-
