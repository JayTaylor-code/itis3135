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
</style>

# In-Class Activity 14-2 Questions

## Instructions

* Download "cycle2-example.zip" from Canvas

* Download "images.zip" and add images

* Download "Activity11.zip" from canvas

## Examine the Code

1. **HTML Line 7**: Can you use a different class name?

> Yes, you can use a different class name, but it must still include <span class="code">cycle-slideshow</span> for the Cycle2 plugin to work automatically. You can add another class, but removing <span class="code">cycle-slideshow</span> would prevent the slideshow from initializing.

2. **HTML Lines 8-10**: What does the parameters mean?

> <span class="code">data-cycle-fx="fade</span> specifies the transition effect between images. <span class="code">data-cycle-speed="200"</span> contols how fast the transition animation occurs (lower values = faster transitions). <span class="code">data-cycle-timeout="2000"</span> sets how long each image is displayed before switching.

## Revise the Code

### Instructions

* Add some local images.

* Adjust the image size so all images look the same.

* Make the images go faster but still with fading effects.

* After **completing question 3**, add captions to the images.

<ul>
    <li>After completing the <strong>above steps</strong> and <strong>finishing question 3</strong>, review the <a href="https://api.jqueryui.com/tabs/">API</a> and open the files from "Activity11.zip" and complete the following:</li>
    <ul>
        <li>Add a new panel (make up some content)</li>
        <li>Make the active panel collapsible</li>
        <li>Make the middle panel active by default</li>
    </ul>
</ul>

<div style="page-break-after: always"></div>

### Questions

3. Change the cycle-fx from "fade" to "fadeout". What's the difference?

> With <span class="code">fade</span> the current image will fade out <strong>while</strong> the next image fades in simultaneously. While <span class="code">fadeout</span> will completly fade out the current image first, and then the next image appears afterward.
