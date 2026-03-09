<style>
    body {
        font-family: "Helvetica Neue", "Times New Roman", serif;
        font-size: 12pt;
    }
    p {
        line-height: 1.5;
    }
    blockquote {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 11pt;
        line-height: 1.25;
    }
    img {
        width: 400px;
        height: 250px;
    }
    .code {
        font-family: "Consolas", "Lucida Console", monospace;
        font-size: 11pt;
        line-height: 1.25;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 0.5px;
        padding-bottom: 0.5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 0.5px solid;
        border-radius: 8px;
    }
    .code-margin-right {
        font-family: "Consolas", "Lucida Console", monospace;
        font-size: 11pt;
        line-height: 1.25;
        margin-left: 10px;
        margin-right: 2px;
        padding-top: 0.5px;
        padding-bottom: 0.5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 0.5px solid;
        border-radius: 8px;
    }
    .code-margin {
        font-family: "Consolas", "Lucida Console", monospace;
        font-size: 11pt;
        line-height: 1.25;
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
# In-Class Activity 8-2

This application should display a prompt dialog box that gets a number grade from 0 through 120. Then, it should display an alert dialog box that displays the letter grade for that number. To derive the letter grade, you should use this table: 

* A 100-120, B 80-99, C 70-79, D 60-69, F < 60

The app should continue until the user enters "-1".

## Instructions

Download the Activity6_0.zip on Canvas.

1. Test the current app, note it currently doesn't work, why?

**Answer:**

> The original version didn't work because the <span class="code">checkNumber</span> always returned <span clas="code">true</span>, which is why any invalid input was never caught. The <span class="code">score</span> was a **string**, so comparisons like <span class="code">score >= 100</span> were incorrect. Also, they existed no loop, so the app would only run once.

![Question 1](Photos/question-1.png)

<div style="page-break-after: always"></div>

2. Fix the error(s) and test the app.

**Answer:**

> To fix the erros I added a numeric conversion and validation, and I added a loop so the program would continue unless the user inputs <span class="code-margin-right">-1</span>.

![Question 2](Photos/question-2.png)

3. Complete checkNumber function to make sure the entry is a valid number from 0 through 120.

**Answer:**

> I completed the <span class="code">checkNumber</span> by adding a validator to check if the user's input is in fact an integer, is between 0 and 120, and will allow -1 as a sentinel. Then, it will return <span class="code">num</span> if the user's input is in fact valid, it will return <span class="code">undefined</span> if the user's input is not valid, or it will return <span class="code">-1</span> to quit the app.

![Question 3](Photos/question-3.png)

<div style="page-break-after: always"></div>

4. Fix the code to ensure the app continues until "-1".

**Answer:**

> I wrapped everything within a <span class="code">while(true)</span> loop, and set a break for when <span class="code-margin-right">checked === -1</span>.

![Question 4](Photos/question-4.png)

5. Add "use strict"; and fix issues until the app works again.

**Answer:**

> I have added the <span class="code">use strict</span> so that I could declare variables (<span class="code-margin">let</span>, <span class="code-margin">const</span>) and to prevent any accidental globals.

![Question 5](Photos/question-5.png)