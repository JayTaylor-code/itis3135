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

# In-Class Activity 13-2 Questions

## Instructions

* Download "weather fetch.zip" from Canvas.

    * Run the app and make sure it works correctly.

        * Click Compare without cities, with one city, with a non-existent city (just an "a" and "b").

        * Click Compare with Boston and Charlotte.

<mark><strong>Important Note</strong>:The api link is "https://api.openweathermap.org/data/2.5/forecast?appid=e7fc3690c8bec39e29816fc3588886e2&q=wilmington,nc,us&units=imperial"</mark>.

## Examine the Code

1. **JS Line 58**: Why is "async" needed?

> The <span class="code">async</span> keyword is needed because the function uses <span class="code">await</span> to handle the <span class="code">fetch()</span> request. Without <span class="code">async</span>, the <span class="code">await</span> keyword would cause an error. It allows the function to run asynchronously and wait for the API response without blocking the rest of the program.

2. **JS Line 73**: When will "response.ok" be false?

> The <span class="code">response.ok</span> is false when the HTTP request fails, such as:
>
> * "The city does not exist (e.g., "a" or "b")"
>
> * "The URL is incorrect"
>
> * "The API endpoint is wrong"
>
> * "There is a server error (e.g., 404 or 500 status code)"

<div style="page-break-after: always"></div>

3. Use Developer tools:

    <ol type="a">
        <li>Put a breakpoint at Line 75. Examine the value of jsonResult? What is the value of "id" and "name"?</li><br>
        <li>Put a breakpoint at Line 119 and step twice. What is the value of the first "date" and "temp"?</li>
    </ol>

> After examing the <span class="code">jsonResult</span>, the value of <span class="code">id</span> is "**4460243**" and the value of <span class="code">name</span> is "**Charlotte**".
>
> After placing a breakpoint at line 119 and stepping twice, the value of the first <span class="code">date</span> is "**2026-04-09**" and the value of the first <span class="code">temp</span> is "**50.34**".

## Revise the Code

1. At Line 61, change "api" to "apii" in the URL. Run the app again and observe what happens.

    <ul style="list-style-type: disc">
        <li>Add try-catch block to fix the issue.</li>
    </ul>

> After changing "**api**" to "**apii**" in the URL, the JavaScript infinitely tries to load any data from the URL but to no avail.

2. Replace the "await fetch()" on Line 67 with "fetch().then().catch()" and restructure the following code appropriately.

    <ul style="list-style-type: disc">
        <li>Test again after changing "api" to "apii" in the URL. Also test by turning off the WIFI on your computer.</li>
    </ul>

> Code has been fully revised to include:
>
> * With <span class="code">apii</span> &rarr; error message appears (**caught properly**)
>
> * With WiFi OFF &rarr; <span class="code">.catch()</span> runs (**network failure**)
>
> * With bad cities &rarr; <span class="code">response.ok</span> is false (**handled correctly**)
