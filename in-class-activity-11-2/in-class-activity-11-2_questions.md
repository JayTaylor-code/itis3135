<style>
    body {
        font-family: "Helvetica Neue", "Times New Roman", serif;
        font-size: 12pt;
        line-height: 1;
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

# In-Class Activity 11-2 Questions

## Instructions

1. Install node.js from [nodejs.org](https://nodejs.org/en).

2. Examine and revise the script to answer the following questions.

## Questions

1. What are the properties of the following objects?

    * The "hello" function object

    * The associated prototype of the "hello" function object
    
    * The "hello.prototype" object
    
    * The associated prototype of the "hello.prototype" object
    
    * The x object
    
    * The associated prototype of the x object

    * The associated prototype of the associated prototype of x

    * The "x.prototype" object

> The properties of the "hello" function object include <span class="code">length</span>, <span class="code">name</span>, and <span class="code">prototype</span>, as shown by <span class="code">Object.getOwnPropertyNames(hello)</span>. The associated prototype of the "hello" function object is <span class="code">Function.prototype</span>, verified using <span class="code">Object.getPrototypeOf(hello)</span>. The <span class="code">hello.prototype</span> object contains the properties <span class="code">constructor</span> and <span class="code">name2</span>, since the script assigns <span class="code">hello.prototype.name2 = "Hello_name"</span>. Its prototype is <span class="code">Object.prototype</span>. The <span class="code">x</span> object has no own properties, so <span class="code">Object.getOwnPropertyNames(x)</span> returns an empty array. Its prototype is <span class="code">hello.prototype</span>, and the next prototype up the chain is <span class="code">Object.prototype</span>. The <span class="code">x.prototype</span> object is <span class="code">undefined</span> because only functions have a <span class="code">prototype</span> property.

2. Add a property "name1" to the "hello" function with value "Better name". What is the value of x.name1 and x.name2? Why?

> If <span class="code">hello.name1 = "Better name"</span> is added, then <span class="code">x.name1</span> is <span class="code">undefined</span> and <span class="code">x.name2</span> is <span class="code">"Hello_name"</span>, because instances like <span class="code">x</span> only inherit from <span class="code">hello.prototype</span>, not from the function object itself.

3. Change the property name from "name1" to "name2". What is the value of x.name1 and x.name2? Why?

> If <span class="code">hello.name2 = "Better name"</span> is used, then <span class="code">x.name1</span> is <span class="code">undefined</span> and <span class="code">x.name2</span> is still <span class="code">"Hello_name"</span>, because <span class="code">x</span> gets <span class="code">name2</span> from <span class="code">hello.prototype</span>, not from the <span class="code">hello</span> function itself.

## Image

![Debug console for test_prot.js](images/debug_console.png)