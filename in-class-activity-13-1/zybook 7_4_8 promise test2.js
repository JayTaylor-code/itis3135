// In-class activities for testing Promise objects

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

// 1. The async function to be executed by the Promise constructor
// 2. The function to be executed when the async action is successful
// 3. The function to be excuted when the async action fails

// The async function is typically defined as inner functions of the function
// that creates the Promise object. 
function create_promise(filename) {
    //In order to enable access of the parameter (filename) locally,
    // we move the async function here as an inner function.
    
    // 1. The async function to be executed by the Promise constructor.
    function async_simulation(resolve, reject) {
        if (filename === "Hello.txt") {
           // Simulate loading taking 2 seconds
           let outval = {last: "Smith", first: "John", age: 25};
           sleep(2000);
           resolve(outval);
        }
        else {
           sleep(3000);
           reject(new Error("Async processing caused an error!"));
        }
     }

     return new Promise(async_simulation);
 } 

function test_promise(filename) {
 // 2. The function to be executed when the async action is successful.
     function dataLoaded(value) {
        console.log("Asynchronous processing succeeded! Name is: " + value.first + " " + value.last);
        console.log("Asynchronous processing succeeded! Age is: " + value.age);
     }
 
    // 3. The function to be excuted when the async action fails.
    function loadFailed(reason) {
        console.error(reason.toString());
     }

    let promise = create_promise(filename);
    // Note that, at this point, the async function is already started.
    // Now we can use the returned promise object to register the success and failure handlers.
    promise.then(dataLoaded, loadFailed);
}

test_promise("Hello.txt");
//test_promise("OtherFile.txt");

// The current thread continues here. 
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
