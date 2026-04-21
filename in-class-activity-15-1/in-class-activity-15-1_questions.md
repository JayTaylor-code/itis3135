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
</style>

# In-Class Activity 15-1 Questions

## Instructions
<ul>
    <li>Download "Activity13 In-class Activities.zip" and make sure the app works</li>
    <ul>
        <li>In Vscode, use "Open in Default Browser". What do you observe? Why doesn't it work?</li>
        <li>In vscode, use "Open with live server" (install live server first). What do you observe? What is the URL in the browser?</li>
    </ul>
    <li>Download the image "calculator original.png" from Canvas</li>
    <li>Start a new Workspace</li>
    <li>Give a prompt to start an agent for web-based calculator development</li>
    <ul>
        <li>The interface should look like that downloaded image</li>
        <li>Use only the basic web languages &ndash; HTML, CSS, and JavaScript</li>
        <li>Make sure to start with an implementation plan</li>
    </ul>
    <li>Ask Antigravity to perform verification</li>
    <li>Check the codes in vscode editor</li>
    <ul>
        <li>Assess the quality of design</li>
    </ul>
    <li>Submit a screenshot of the calculator and all generated files</li>
</ul>

## Questions

* The two questions from above are repeated below, answer the questions underneath the repeated questions.

1. What do you observe? Why doesn't it work?

> When using "Open in Default Browser", an error message occurs and no team data is displayed. This happens because the browser is opening the file using the <span class="code">file://</span>protocol, and the AJAX request is blcoked due to browser security (CORS) restrictions.

2. What do you observe? What is the URL in the browser?

> When using "Open with Live Server", the page loads correctly and the team data is displayed on the screen. The JSON file is successfully fetched and rendered.This works because Live Server runs a local web server, allowing AJAX requests to function properly. Here is the URL: [http://127.0.0.1:5500/Activity13-json.html](http://127.0.0.1:5500/Activity13-json.html).

<div style="page-break-after: always"></div>

### Examine Activity13.js

3. Line 5: Change the file to "team1.json", what do you observe?

> The app fails to load the data, and an error alert appears (e.g., 404 Not Found). This happens because <span class="code">team1.json</span> does not exist, so the AJAX request cannot find the file.

4. Line 6: What does the property "beforeSend" do? Does fetch() allow the same?

> The <span class="code">beforeSend</span> property runs a function before the AJAX request is sent. In this case, it displays "Loading..." inside the <span class="code">#team</span> div to indicate that data is being fetched. Also, yes, <span class="code">fetch()</span> can achieve similar behavior, but not with a built-in option like <span class="code">beforeSend</span>. Instead, you manually run code before calling <span class="code">fetch()</span> (e.g., updating the DOM before the request starts).

5. Line 13: What is the data type of "data"? In Developer Tools, set a breakpoint at Line 14 and examine the variable "data".

> The variable <span class="code">data</span> is a JavaScript object. Since <span class="code">dataType: "json"</span> is specified, jQuery automatically parses the JSON file into an object. It contains a property like <span class="code">teammembers</span>, which is an array of objects.

6. Line 16: Change "append" to "html" and reload the app. What do you observe? Why?

> Only the last team member is displayed instead of all members. This happens because <span class="code">.html()</span> replaces the existing content each time it runs, while <span class="code">.append()</span> adds new content without removing the previous content.

<div style="page-break-after: always"></div>

## Antigravity for Calculator App

<figure>
    <img src="calculator/all_files.png" alt="All Files">
    <figcaption>A screenshot of all the files created in the implementation of the web-based calculator.</figcaption>
</figure>
<br>
<figure>
    <img src="calculator/final_product.png" alt="Final Product">
    <figcaption>A screenshot of the final result when opening the web-based calculator.</figcaption>
</figure>
