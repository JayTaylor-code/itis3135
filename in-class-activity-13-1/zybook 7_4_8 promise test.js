
// In-class activities for testing Promise objects (adapted from zyBook 7.4.8)

/**
* First a function to simulate a delay for a number of milliseconds.
* This is a blocking function that will block the current thread.
*/
function sleep(delay) {
   var start = new Date().getTime();
   while (new Date().getTime() < start + delay);
}

/* 
 * Promise needs three functions
*/

let filename = "Hello.txt"; 
//let filename = "OtherFile.txt";

// 1. The async function to be executed by the Promise constructor.
function async_simulation(resolve, reject) {
    if (filename === "Hello.txt") {
      // Simulate some operation that takes 2 seconds
      sleep(2000);
      resolve({ last: "Smith", first: "John", age: 21 });
    }
    else {
      // Simulate some operation that takes 3 seconds and then fails with an error
      sleep(3000);
      reject(new Error("Async processing caused an error!"));
    }
 }

// 2. The function to be executed when the async action is successful.
// That is, the success handler.
function dataLoaded(value) {
   console.log("Full Name: " + value.first + " " + value.last);
   console.log("Age: " + value.age);
}
 
// 3. The function to be excuted when the async action fails.
 function loadFailed(reason) {
    console.error(reason.toString());
 }

/* Now we can create a new Promise object by using the Promise constructor.
*/
// let promise = new Promise(async_simulation);
/* Note that the asynchronous function (async_simulation) has been started at this point.
*/

/* Now we can use the returned promise object to register the success and failure handlers.
*/
// promise.then(dataLoaded, loadFailed);

/* In a separate thread, the async_simulation function is now running.
* When it succeeds, the dataLoaded function will be called. If it fails, the loadFailed function will be called. 
*/

/* If you don't use Promise to start ascyncronous processing, you can use the following code 
 * to run the async_simulation function synchronously.
 * Comment out Line 47 and 53, uncomment Line 63. Observe what happens.
*/
async_simulation(dataLoaded, loadFailed);



/* Now the current thread continues here. 
*/
console.log("Current thread continues to run...");
sleep(2000);
console.log("Current thread continues to run after some sleep...");

/* Note that setTimeout also starts a function asynchronously,
 * after some delay specified in milliseconds. Observe what happens.
*/
setTimeout(() => {
    console.log("After a brief timeout..................");
}, 1);
setTimeout(() => {
   console.log("After some more timeout..................");
}, 10);
setTimeout(() => {
   console.log("After a really long timeout..................");
}, 3000);
