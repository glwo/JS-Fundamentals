# JS-FundamentalsEnable desktop notifications for Gmail.
# Software Runtime Engineer Roadmap
*A roadmap toward becoming a systems-focused JavaScript/C++ engineer.*

---

# Overall Goal

Become an engineer capable of building and maintaining:

- JavaScript runtimes
- Developer platforms
- Infrastructure libraries
- Browser/runtime tooling
- High-performance applications
- Native JS/C++ integrations

---

# Phase 1 — Master JavaScript

Estimated Time:
6-8 weeks

## Objectives

Become an expert JavaScript engineer—not just someone who writes React.

## Learn

- Closures
- Lexical scope
- Execution Context
- Event Loop
- Promises
- Async/Await
- Generators
- Iterators
- Symbols
- Proxy
- Reflect
- WeakMap
- WeakSet
- Modules
- ESNext

## Books

- [ ] You Don't Know JS Yet
- [ ] Effective TypeScript
- [ ] Programming TypeScript
- [ ] JavaScript: The Definitive Guide

## Build

- [ ] Promise implementation
- [ ] EventEmitter
- [ ] LRU Cache
- [ ] Deep Clone
- [ ] Observable
- [ ] debounce()
- [ ] throttle()

## Deliverable

A GitHub repository called

```
js-fundamentals
```

containing all implementations.

---

# Phase 2 — Node.js Internals

Estimated Time:
6 weeks

## Learn

- libuv
- Event Loop Phases
- Worker Threads
- Streams
- Buffers
- child_process
- process lifecycle
- Cluster
- Async Hooks

## Books

- [ ] Node.js Design Patterns

## Build

- [ ] CLI framework
- [ ] Mini shell
- [ ] File watcher
- [ ] Parallel task runner
- [ ] Static file server

## Stretch Goal

Read portions of Node's source code.

## Deliverable

```
node-internals
```

---

# Phase 3 — Modern C++

Estimated Time:
10 weeks

## Learn

Language

- pointers
- references
- move semantics
- RAII
- templates
- inheritance
- polymorphism
- virtual dispatch

STL

- vector
- map
- unordered_map
- unique_ptr
- shared_ptr

Memory

- heap
- stack
- alignment
- cache friendliness

## Books

- [ ] A Tour of C++
- [ ] Effective Modern C++
- [ ] Programming Principles and Practice Using C++

## Build

- [ ] Vector
- [ ] String
- [ ] HashMap
- [ ] Thread Pool
- [ ] Memory Arena

## Deliverable

```
cpp-foundations
```

---

# Phase 4 — Computer Systems

Estimated Time:
8 weeks

## Book

- [ ] Computer Systems: A Programmer's Perspective

## Learn

- Memory layout
- Cache
- Stack vs Heap
- Linking
- Assembly
- ELF
- Object Files
- ABI

## Build

- [ ] Simple assembler
- [ ] Binary parser

---

# Phase 5 — Operating Systems

Estimated Time:
8 weeks

## Book

- [ ] Operating Systems: Three Easy Pieces

## Learn

- Processes
- Threads
- Scheduling
- Virtual Memory
- Paging
- Mutexes
- Semaphores
- File Systems

## Build

- [ ] Mini Scheduler
- [ ] Virtual Memory Simulator

---

# Phase 6 — Networking

Estimated Time:
5 weeks

## Learn

- TCP
- UDP
- HTTP
- HTTPS
- TLS
- DNS
- WebSockets

## Build

- [ ] HTTP server
- [ ] Chat server
- [ ] TCP client/server

---

# Phase 7 — Build an Interpreter

Estimated Time:
10 weeks

## Book

- [ ] Crafting Interpreters

## Learn

- Lexing
- Parsing
- ASTs
- Bytecode
- Virtual Machines

## Build

A programming language.

Features

- Variables
- Functions
- Loops
- Objects
- Closures

## Stretch

Rewrite in C++.

---

# Phase 8 — JavaScript Runtime Internals

Estimated Time:
6 weeks

## Learn

V8

- Hidden Classes
- Inline Caches
- Garbage Collection
- Isolates
- Snapshots

Chromium

- Blink
- Renderer
- Browser Process
- IPC

## Build

- [ ] Compile Chromium
- [ ] Build V8
- [ ] Modify a tiny feature

---

# Phase 9 — Native Addons

Estimated Time:
4 weeks

## Learn

- N-API
- Node Addons
- V8 bindings

## Build

Native modules

Examples

- Compression
- Hashing
- Image processing
- CSV parser

Expose through TypeScript.

---

# Phase 10 — Distributed Systems

Estimated Time:
6 weeks

## Book

- [ ] Designing Data Intensive Applications

## Learn

- RPC
- Serialization
- Protobuf
- Shared Memory
- IPC
- Queues

## Build

Tiny RPC framework.

---

# Phase 11 — Performance Engineering

Estimated Time:
5 weeks

## Learn

Profiling

- perf
- flame graphs
- heap snapshots

Benchmarking

Optimization

Cache locality

Memory allocation

## Build

Optimize one previous project by at least 5x.

---

# Phase 12 — Open Source

Never stop.

## Contribute

- [ ] Node.js
- [ ] TypeScript
- [ ] Chromium
- [ ] Electron
- [ ] libuv
- [ ] V8

Documentation counts.

Bug fixes count.

Tests count.

---

# Data Structures & Algorithms

Do continuously.

Books

- [ ] Grokking Algorithms
- [ ] Algorithm Design Manual

Practice

- 2-3 LeetCode/week

Focus

- Arrays
- Hash Maps
- Trees
- Graphs
- Dynamic Programming
- BFS
- DFS
- Heaps

---

# System Design

Read continuously.

Books

- [ ] Designing Data Intensive Applications
- [ ] System Design Interview Vol. 1
- [ ] System Design Interview Vol. 2

Practice

- URL Shortener
- Dropbox
- Slack
- Discord
- YouTube
- GitHub

---

# Reading List

JavaScript

- [ ] You Don't Know JS Yet
- [ ] Effective TypeScript
- [ ] Programming TypeScript

Node

- [ ] Node.js Design Patterns

C++

- [ ] A Tour of C++
- [ ] Effective Modern C++
- [ ] Programming Principles and Practice Using C++

Systems

- [ ] Computer Systems: A Programmer's Perspective
- [ ] Operating Systems: Three Easy Pieces

Compilers

- [ ] Crafting Interpreters

Architecture

- [ ] Designing Data Intensive Applications

General Engineering

- [ ] Code Complete
- [ ] Clean Architecture

---

# Resume Projects

Aim to have all of these completed.

- [ ] Tiny Programming Language
- [ ] JavaScript Runtime
- [ ] Native Node Addon
- [ ] Thread Pool
- [ ] Memory Allocator
- [ ] RPC Framework
- [ ] HTTP Server
- [ ] File Watcher
- [ ] Task Runner
- [ ] Performance Benchmark Suite

---

# End Goal

By the end of this roadmap, you should be comfortable:

✅ Reading C++

✅ Reading Chromium code

✅ Reading Node.js source

✅ Reading V8 source

✅ Building native Node modules

✅ Understanding operating systems

✅ Writing high-performance code

✅ Designing runtime APIs

✅ Debugging memory/performance issues

✅ Contributing to systems software

At this point, you won't just be a stronger JavaScript engineer—you'll be a systems engineer who happens to specialize in JavaScript runtimes.

# Final Capstone Project — Build a JavaScript Runtime Platform

Estimated Time:
3-6 months

## Goal

Build a miniature JavaScript runtime and developer platform that demonstrates mastery of:

* JavaScript internals
* Compilers
* C++
* Memory management
* Virtual machines
* Developer tooling
* TypeScript API design
* Performance engineering

The goal is not to recreate V8. The goal is to demonstrate that you understand the architecture behind systems like V8, Node.js, Electron.

---

# Project Name

Example:

```
GlenJS Runtime
```

---

# Architecture

```
              JavaScript Source
                     |
                     v
              Lexer / Parser
                     |
                     v
                   AST
                     |
                     v
             Bytecode Compiler
                     |
                     v
             Virtual Machine
                     |
        -------------------------
        |                       |
        v                       v
 Garbage Collector        Standard Library
        |
        v
   Runtime Engine


              |
              v

       TypeScript SDK/API Layer

              |

       Developer Tooling

       - CLI
       - Debugger
       - Profiler
       - REPL
```

---

# Milestone 1 — Language Frontend

Implement:

* Tokenizer
* Parser
* AST representation
* Error reporting

Support:

* Variables
* Functions
* Expressions
* Conditionals
* Loops

Deliverable:

```
glenjs parse program.js
```

Outputs an AST.

---

# Milestone 2 — Interpreter

Build:

* Tree-walk interpreter
* Environment model
* Function calls
* Closures
* Scope handling

Demonstrates understanding of:

* Lexical scope
* Execution contexts
* Runtime environments

---

# Milestone 3 — Bytecode Virtual Machine

Replace the interpreter with bytecode execution.

Implement:

* Bytecode format
* Stack machine
* Instruction set
* Call frames
* Registers

Example:

```
LOAD_CONSTANT
ADD
CALL_FUNCTION
RETURN
```

---

# Milestone 4 — C++ Runtime Engine

Rewrite core runtime components in C++.

Implement:

* Object representation
* Memory management
* Runtime values
* Native functions

Learn:

* RAII
* Memory layout
* Performance tradeoffs

---

# Milestone 5 — Garbage Collector

Implement a simple GC.

Start with:

* Reference counting

Then:

* Mark and sweep

Eventually:

* Generational collection concepts

Understand:

* Heap organization
* Object lifetimes
* Memory pressure

---

# Milestone 6 — TypeScript Developer Experience

Build a TypeScript API.

Example:

```typescript
import { Runtime } from "glenjs";

const runtime = new Runtime();

runtime.execute(`
  console.log("hello world")
`);
```

Create:

* Type definitions
* Documentation
* Examples
* Package publishing

---

# Milestone 7 — Developer Tooling

Build:

## REPL

```
glenjs repl
```

## Debugger

Features:

* Breakpoints
* Stack traces
* Variable inspection

## Profiler

Show:

* Function execution time
* Memory allocation
* Heap usage

---

# Milestone 8 — Performance Engineering

Benchmark against:

* Node.js
* Other interpreters

Measure:

* Execution speed
* Memory usage
* Startup time

Use:

* Profilers
* Flame graphs
* Benchmarks

Optimize:

* Hot paths
* Memory layout
* Allocation patterns

---

# Milestone 9 — Documentation

Write engineering documents:

## Architecture Overview

Explain:

* Runtime design
* Memory model
* Execution pipeline

## Design Decisions

Explain:

* Why stack VM?
* Why this GC?
* Why this object model?

## Performance Report

Document:

* Benchmarks
* Bottlenecks
* Optimizations

---

# Final Deliverable

A GitHub repository containing:

```
glenjs/

├── runtime/
│   ├── vm/
│   ├── memory/
│   ├── objects/
│   └── gc/

├── compiler/
│   ├── lexer/
│   ├── parser/
│   └── bytecode/

├── sdk/
│   └── typescript/

├── debugger/

├── profiler/

├── benchmarks/

└── docs/
```

