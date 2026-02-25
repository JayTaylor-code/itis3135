# In-Class Activity 7-1 Questions

## Script Parsing

1. In motor.html, move the <code>script</code> element into the <code>head</code>. Reload the page and test the three buttons again. What do you observe?

    >After moving the <code>script</code> element into the <code>head</code>, I noticed that the script was no longer functioning within the html file.

2. Open the Developer Tools, check the "Console" output, what do you observe? Why?

    >After checking the "Console" output I found this <code>Uncaught TypeError</code>: "**Cannot read properties of null (reading script.js:2 'addEventListener')**". This was most likely caused by the fact that the script being located in <code>head</code> runs too early, because the **DOM** hasn't been built yet. 

3. Add "defer" in the <code>script</code> element. Reload the page and test the buttons again. Check the "Console" output. What do you observe? Why?

    >The buttons now work, there is no longer a <code>Uncaught TypeError</code> printed in the console. This is because <code>defer</code> delays execution until after HTML parsing is finished. So now the elements exist when the javascript runs.

## Javascript

4. Download <code>tinyscript.zip</code>, run the code, study the code, and improve the code. Center the box, center the heading "**Hello Friends!**", add "**.**" at the end of the date, send today's date to <code>javascript console</code> and check it using **developer tools**, move the script to an external file and import it using:
    * <code><\script type="text/javascript" src="your file"></\script></code> (remove <code>\\</code>)

