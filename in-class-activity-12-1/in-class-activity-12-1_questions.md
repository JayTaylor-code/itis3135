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

# In-Class Activity 12-1 Questions

## Instructions

* Download "lab6_16_move heart image.zip" from Canvas

    * Ensure the code works correctly

## Review the Code

1. What does the parameter "e" represent in line 7?

> The parameter <span class="code">e</span> represents the event object created when the user clicks on the page. It contains information about the click event, such as the mouse position, the element clicked, and other event-related data.

2. What do Lines 10-11 do? What other properties are in the object "e"? (Use DevTools and/or look up online, e.g. w3schools.com)

> Lines 10–11 extract the x and y coordinates of the mouse click from the event object using <span class="code">e.clientX</span> and <span class="code">e.clientY</span>. These values represent the position of the click relative to the browser window. 
>
> Other common properties in the <span class="code">e</span> object include:
>
> * <span class="code">e.pageX</span> and <span class="code">e.pageY</span> &rarr; position relative to the full page
> 
> * <span class="code">e.screenX</span> and <span class="code">e.screenY</span> &rarr; position relative to the screen
>
> * <span class="code">e.target</span> &rarr; the element that was clicked
>
> * <span class="code">e.type</span> &rarr; the type of event
>
> * <span class="code">e.button</span> &rarr; which mouse button was pressed

3. Why are there two calls to "clearInterval" (lines 15 and 38) in the code?

> The first <span class="code">clearInterval</span> (line 15) stops any previous animation before starting a new one, preventing multiple timers from running at once.
>
> The second <span class="code">clearInterval</span> (line 38) stops the animation once the image reaches its destination, ensuring the movement ends correctly.

<div style="page-break-after: always"></div>

## Revise the Code

* Make the heart move slower

> Increase the interval time in <span class="code">setInterval</span>

* Make the heart move faster

> Decrease the interval time in <span class="code">setInterval</span>

* Make the tip of the heart stop at the click point

> Instead of centering the image, adjust the target position so the tip (bottom point) aligns with the click:
>
> <span class="code">const centerX = Math.round(x - (img.width / 2));</span>
>
> <span class="code">const centerY = Math.round(y - (img.height - 20));</span>

### Questions

1. For making the heart move faster, is there a limit? If so, how do you pass that limit?

> There does exist a pratical limit. The interval delay cannot go below 1-4 miliseconds, depending on the browser, due to timing restrictions. Even if you set it lower, the browser won't execute it faster.
>
> To go beyond this limit and achieve a smoother/faster animations, you would need to use:
>
> <span class="code">requestAnimationFrame()</span>
>
> This method is optimized by the browser and runs at the screen's refresh rate, making animations smoother and more efficient than <span class="code">setInterval</span>.
