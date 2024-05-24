// Immediately Invoked Function Expressions (IIFE)

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created. This pattern is often used to create a new scope, thereby avoiding polluting the global scope and creating closures.

// When we talk about "polluting the global scope," we mean adding too many variables or functions directly to the global namespace.

// Imagine the global scope as a shared space where all your JavaScript code lives. Every variable and function you define without any specific container (like an object or a function) becomes part of this shared space. This includes variables and functions that are not contained within any other function or object.

// When you add too many things directly to this global space, it can lead to conflicts and unintended consequences. Here's why:

// 1)Naming conflicts
// 2)Dependency issues

// Using an IIFE is one way to achieve this. By wrapping code inside an IIFE, you create a private scope where variables and functions are not visible outside of the function. This helps prevent them from interfering with other parts of your code or with external libraries. It's like putting your code in a sandbox where it can play safely without affecting anything else.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

