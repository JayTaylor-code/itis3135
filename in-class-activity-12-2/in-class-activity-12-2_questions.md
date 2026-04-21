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

# In-Class Activity 12-2

## Instructions

Download "circle animation.zip" from Canvas

* Run the app and fix any problem if it doesn't work (use Developer Tools)

* Try reload a few times and make sure it works correctly

## Review the Code

1. Line 7: Can you add parameters to the method (drawFrame)?

> Yes, the <span class="code">drawFrame</span> function can accept parameters such as position, speed, or rotation angle. For instance:
>
> <span class="code">function drawFrame(x, angle)</span>
>
> This allows more flexibility by passing updated values each frame instead of relying only on global variables.

2. Why are there two calls to "requestAnimationFramf" (Lines 5 and 20)?

> The first call (Line 5) starts the animation by invoking <span class="code">drawFrame</span> for the first time. The second call (Line 20) keeps the animation running by repeatedly requesting the next frame, creating a loop until the condition ( <span class="code">circleX < 150</span> ) is no longer true.

## Revise the Code

1. Add a boundary to the circle with 2 pixels in blue color.

2. Add a yellow cross in the circle with 2 pixels.

3. Make the circle rotate as the circle moves across.