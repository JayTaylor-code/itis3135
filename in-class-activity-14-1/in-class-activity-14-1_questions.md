<style>
    body {
        font-family: "Helvetica Neue", "Times New Roman", serif;
        font-size: 12pt;
        line-height: 1.15;
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
        padding-top: 1px;
        padding-bottom: 1px;
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

    a:link {
        color: blue;
    }

    a:visited {
        color : purple;
    }

    a:active {
        color: red;
    }
</style>

# In-Class Activities 14-1 Questions

## Instructions

* Download testiife.js and testiife1.js from Canvas.

    * Use Run and Debug in VScode to run the small scripts.

* Download jquery-3.7.1.js from Canvas and examine the code.

## Questions

### For testiife.js and testiife1.js:

1. In testiife.js, why are the outputs different when you run the same function multiple
times?

> The outputs are different because of closure + persistent state. The IIFE runs once and creates a private variable <span class="code">let greetCount = 0;</span>, which returns an inner function that remembers <span class="code">greetCount</span>. Every time <span class="code">friendlyFunction()</span> is called, it prints the current value and then increments it (<span class="code">greetCount++</span>).

2. In testiife1.js, how do you print out "The value is true"?

> To print "<strong>The value is true</strong>" you must pass <span class="code">true</span> instead of <span class="code">false</span> as the first argument in <strong>line 12</strong> so that the condition <span class="code">obj === true</span> becomes true.

### For jquery-3.7.1.js:

3. Lines 11-37: Find the line with the matching brackets on Line 37. What does 1-37 do?

> <strong>Lines 11-37</strong> form an IIFE that creates a private scope and initializes jQuery while detecting whether it is running in a browser or a Node.js environment.

4. Scan the code until Line 160: How is jQuery defined? What do these lines do?

> jQuery is defined as a function that returns a new object created by <span class="code">jQuery.fn.ini</span>, allowing users to call it like <span class="code">$("selector")</span> to create jQuery objects.

<div style="page-break-after: always"></div>

5. Scan the code until Line 253: What is jQuery.fn? What do Lines 162-253 do?

> <span class="code">jQuery.fn</span> is the prototype for all jQuery objects, and <strong>lines 162–253</strong> define core methods (like <span class="code">each</span>, <span class="code">map</span>, and <span class="code">slice</span>) that all jQuery objects can use.

6. Line 10709: Why is this line important?

> This line is important because it assigns jQuery to the global variables <span class="code">$</span> and <span class="code">jQuery</span>, making the library accessible for use in browser scripts.

7. In DevTools, set breakpoints in jquery-3.7.1.js to examine:

    <ul style="list-style-type: disc">
        <li>How the the jQuery library is structured as IIFE</li>
        <li>What's in jQuery when the library is loaded (give some examples)</li>
    </ul>

> The jQuery library is structured as an IIFE that wraps all its code in a private scope, and when loaded, the <span class="code">jQuery</span> object contains properties and methods such as <span class="code">fn</span>, <span class="code">extend</span>, <span class="code">each</span>, <span class="code">map</span>, and version information.

8. When you make a call such as "$("#someElementID")", what gets returned? Which line in the library specifies this?

> A call like <span class="code">$("#someElementID")</span> returns a new jQuery object created by <span class="code">new jQuery.fn.init(...)</span>, which is specified in the line where <span class="code">jQuery</span> returns <span class="code">new jQuery.fn.init(selector, context)</span>.
