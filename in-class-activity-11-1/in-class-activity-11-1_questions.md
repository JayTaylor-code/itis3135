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

# In-Class Activity 11-1 Questions

## Questions

1. What does the following methods do?

    * Obiect.getOwnPropertyNames

    * Obiect.getPrototypeOf

> The <span class="code">Object.getOwnPropertyNames(obj)</span> returns all the properties belonging directly to the object, including non-enumerable. However, it does **not** include properties from the prototype chain. While the <span class="code">Object.getPrototypeOf(obj)</span> returns the object's **internal prototype**. That is, the object it inherits from.

2. What are the properties of the following objects? (Examine and revise the script to answer the
following questions)

    * The "hello" function object

    * The prototype of the "hello" function object

    * The "hello.prototype" object

    * The prototype of the "hello.prototype" object

    * The x object

    * The prototype of x object

    * The prototype of the prototype of x

> The hello function object has the properties <span class="code">"length"</span>, <span class="code">"name"</span>, and <span class="code">"prototype"</span>. The prototype of the <span class="code">hello</span> function object is <span class="code">Function.prototype</span>, which contains built-in function methods such as <span class="code">call</span> and <span class="code">apply</span>. The <span class="code">hello.prototype</span> object initially contains the <span class="code">"constructor"</span> property, and after modification in the code, it also includes the <span class="code">"name2"</span> property. The prototype of <span class="code">hello.prototype</span> is <span class="code">Object.prototype</span>, which provides standard object methods like <span class="code">toString</span>. The object <span class="code">x</span>, created using <span class="code">new hello()</span>, has no own properties. The prototype of <span class="code">x</span> is <span class="code">hello.prototype</span>, which means <span class="code">x</span> can access <span class="code">"constructor"</span> and <span class="code">"name2"</span>. The prototype of the prototype of <span class="code">x</span> is <span class="code">Object.prototype</span>.

3. Is "constructor" a direct (own) property of x? Where is this property defined?

> The <span class="code">constructor</span> property is not a direct property of <span class="code">x</span>; instead, it is inherited from <span class="code">hello.prototype</span>, where it is originally defined.

4. Add a property "name1" to the "hello" function with value "Better name". What is the value of
x.name1 and x.name2? Why?

> When the property <span class="code">name1</span> is added to the <span class="code">hello</span> function with the value <span class="code">"Better name"</span>, the value of <span class="code">x.name1</span> is **undefined**, while the value of <span class="code">x.name2</span> remains <span class="code">"Hello_name"</span>. This occurs because <span class="code">x</span> only inherits properties from <span class="code">hello.prototype</span>, not from the <span class="code">hello</span> function itself.

5. Change the property name from "name1" to "name2". What is the value of x.name1 and x.name2? Why?

> When the property is changed so that <span class="code">name2</span> is added to the <span class="code">hello</span> function instead of <span class="code">name1</span>, the value of <span class="code">x.name1</span> remains **undefined**, and the value of <span class="code">x.name2</span> is still <span class="code">"Hello_name"</span>. This is because <span class="code">x.name2</span> comes from <span class="code">hello.prototype.name2</span>, and properties added directly to the <span class="code">hello</span> function are not inherited by objects created with <span class="code">new hello()</span>.

## Images

![Node.js zyBooks Sandbox](images/frm_sandbox.png)

![Node.js PowerShell Terminal](images/frm_terminal.png)