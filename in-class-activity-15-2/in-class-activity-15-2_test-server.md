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

# In-Class Activity 15-2 Test-Server

## Instructions

<ul>
    <li>Simple static servers - http-server</li>
    <ul>
        <li>Listen to HTTP connections (from a web browser)</li>
        <li>Serve files in a specific folder (by default the current folder where you start the server program)</li>
        <li>URL is "localhost" or "127.0.0.1" with a specific port (e.g. localhost:8081)</li>
        <li>Many options to start the server (e.g. a different port, or folder)</li>
        <li>Crtl-C to stop the server program</li>
    </ul>
    <li>Review the server options (<a src="www.npmjs.com">www.npmjs.com</a>) - Test with Activity13</li>
    <ul>
        <li>Start the http-server with</li>
        <ul>
            <li>A different port (e.g. 8888)</li>
            <li>And disabling caching</li>
        </ul>
        <li>Change the folder to the parent folder of Activity13 and restart the server</li>
        <li>What URLs do you specify to run Activity13?</li>
    </ul>
    <li>Examine and test live-server</li>
</ul>

## Questions

1. What URLs do you specify to run Activity13?

> Two URLs were used to run the "Activity13.html" file.
>
> The first URL is: http://localhost:8888/in-class-activity-15-2/Activity13-json.html
>
> The second URL is: http://127.0.0.1:8888/in-class-activity-15-2/Activity13-json.html

2. What observations did you make/find?

> After installing the required modules using <span class="code">npm install express morgan</span>, I ran the "team_server.js" file with <span class="code">node team_server.js</span>. Then I entered "http://localhost:3000/" into three freshly opened tabs in my web-browser and entered "hello", "teaminfo", and "goodbye" to the end of each URL in the opened tabs and pressed enter. This displayed the following outputs.
>
> From "http://localhost:3000/hello": **Hello, Express from app.get!**
>
> From "http://localhost:3000/teaminfo": **{"a":1,"b":2}**
>
> From "http://localhost:3000/goodbye": **Goodbye, Express!**
