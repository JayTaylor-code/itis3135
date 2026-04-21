// IIFE (Immediately Invoked Function Expression) example
// This is a self-invoking function that runs immediately
// and creates a private scope for variables

const friendlyFunction = (function () {
    let greetCount = 0;
    return function () {
      console.log(`Hello ${greetCount}x`);
      return greetCount++;
    };
  })();
  
  friendlyFunction();
  friendlyFunction();
  friendlyFunction();
  friendlyFunction();
  friendlyFunction();
  friendlyFunction();