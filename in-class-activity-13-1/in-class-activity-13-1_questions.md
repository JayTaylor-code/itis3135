<style>
    body {
        font-family: "Helvetica Neue", "Times New Roman", serif;
        font-size: 12pt;
        line-height: 1;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Helvetica, Arial, sans-serif;
        font-size: default;
        line-height: default;
    }

    blockquote {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 11pt;
        line-height: 1.5;
    }

    ul li {
        line-height: 1;
    }

    .code {
        font-family: "Consolas", "Lucida Console", monospace;
        font-size: 10pt;
        margin-left: 2px;
        margin-right: 2px;
        padding-top: 0.5px;
        padding-bottom: 0.5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 0.5px solid;
        border-radius: 8px;
    }

    img {
        width: 400px;
        height: 250px;
    }
</style>

# In-Class Activities 13-1 &ndash; Promise Test

## Instructions

* Download "zybook 7_4_8 promise test.js" from Canvas.

    * Run the script using Run and Debug (node.js).

    * What do you observe? Uncomment Line 18 and run again. What do you observe?

> During the first run the <span class="code">"Current thread continues to run ..."</span> prints before the async result. After about 2 seconds, the <span class="code">"Asynchronous processing succeeded: Hello World!"</span> appears. Then the rest of the logs (<span class="code">sleep</span>, <span class="code">setTimeout</span>) appear. When uncommenting <strong>line 18</strong>, the terminal throws a <span class="code">SyntaxError</span> because now there exists two <span class="code">filename</span> declarations. However, after uncommenting <strong>line 18</strong> and then commenting out <strong>line 17</strong>, all is printed the same as before except for the third output where it prints out <span class="code">"Error: Async processing caused an error!"</span> instead of printing <span class="code">"Asynchronous processing succeeded: Hello World!"</span> like it did before.

## Review The Code

1. Line 21: What does this function do? If you change "resolve" to "fulfil" in the parameter, what else do you need to change in the function?

> This functions simulates an async task where it calls either <span class="code">resolve(value)</span> if the process is successful, or it calls <span class="code">reject(error)</span> if it fails. If we were to rename <span class="code">resolve</span> to <span class="code">fulfil</span>, then we would have to change <span class="code">resolve("Hello World!");</span> to <span class="code">fulfil("Hello World!");</span>. Otherwise it breaks because <span class="code">resolve</span> no longer exists.

2. Line 47: Note: There are two parameters in the async_simulate function. But no arguments are supplied in this statement. Where will the arguments be supplied?

> The <span class="code">Promise</span> constructor automatically passes <span class="code">resolve</span> and <span class="code">reject</span>. So even though we don't see the arguments, they are provided internally by <strong>JavaScript</strong>.

3. Line 47, 53: Can you combine these two lines into one statement?

> Yes, <strong>lines 47</strong> and <strong>53</strong> can be combined. 
>
> <strong>Original</strong>:<br><span class="code">let promise = new Promise(async_simulation);</span><br><span class="code">promise.then(dataLoaded, loadFailed);</span>
>
> <strong>Combined version</strong>:<br><span class="code">new Promise(async_simulation).then(dataLoaded, loadFailed);</span>

<div style="page-break-after: always"></div>

## Revise The Code

1. The current async function returns a string value "Hello World!". Revise the code so the returned value is an object: {last: "Smith", first: "John", age: 21}. Display the Full Name and Age when the function is successful.

> <strong>Original</strong>:<br><span class="code">resolve("Hello World!");</span>
>
> <strong>To</strong>:<br><span class="code">resolve({ last: "Smith", first: "John", age: 21 });</span>
>
> <strong>Update success handler</strong>:<br><span class="code">function dataLoaded(value) {</span><br><span class="code">|    console.log("Full Name: " + value.first + " " + value.last);</span><br><span class="code">|    console.log("Age: " + value.age);</span><br><span class="code">}</span>

2. Follow the instructions on Line 59-62 and run code again. What do you observe?

> The program <strong>blocks immediately</strong>, there is no async behavior, and everything now runs in order. Essentially, <span class="code">Promise = non-blocking</span>, <span class="code">resolve() &rarr; success</span>, <span class="code">reject() &rarr; failure</span>, <span class="code">.then(success, failure)</span> handles both, and without <span class="code">Promise</span> &rarr; everything becomes blocking.
