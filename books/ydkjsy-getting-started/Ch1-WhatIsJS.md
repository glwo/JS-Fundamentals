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
-
