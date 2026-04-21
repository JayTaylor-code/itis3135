# Web-Based Calculator Implementation Plan

## Goal Description
Create a web-based calculator that precisely matches the provided "calculator original.png" design. The project will be separated into three main files: `calculator.html`, `calculator.css`, and `calculator.js`. It will feature a grid of buttons for digits and operations, a display field, and evaluation logic.

## User Review Required
> [!IMPORTANT]  
> Please review the interpretation of the mathematical operations. I plan to build an expression string in the text field when buttons are clicked, and evaluate the full string when "Calculate" is pressed. For example:
> - `^` will act as a power operator (e.g. `2 ^ 3`).
> - `^2` will act as a square operator (e.g. `5 ^ 2`).
> - `--` and `++` will decrement/increment or act as literal `-1` and `+1` respectively to the evaluated result. 
> - `sqrt()` will wrap the number or be appended (e.g. `sqrt(9)`).
> - `Floor` and `Round` will append their respective functions (e.g. `Floor(4.5)`).
>
> If this logic differs from your expectations (e.g., if you want the operators to compute the value *immediately* upon click instead of waiting for "Calculate"), please let me know!

## Proposed Changes

### Calculator Application
This will consist of 3 new files in the working directory `in-class-activity-15-1`.

#### [NEW] [calculator.html](file:///c:/Users/jayta/Documents (Local)/GitHub/itis3135/in-class-activity-15-1/calculator.html)
- `<h1>` element for "My Calculator"
- A container `div` for the calculator body, styled to have the gray box effect with shadow/thick borders.
- Instruction text: "Please enter a numeric value or use the number buttons below."
- `<input type="text" id="calc-display">` for the display.
- Multiple button rows to match the exact visual layout:
  - Row 1: `1`, `2`, `3`, `+`
  - Row 2: `4`, `5`, `6`, `-`
  - Row 3: `7`, `8`, `9`, `*`
  - Row 4: `0`, `^`, `^2`, `/`
  - Row 5: `--`, `++`, `sqrt()`
  - Row 6: `Floor`, `Round`, `.`
  - Row 7: `Clear`, `Calculate`
- Bottom validate links for HTML and CSS (standard in this course).

#### [NEW] [calculator.css](file:///c:/Users/jayta/Documents (Local)/GitHub/itis3135/in-class-activity-15-1/calculator.css)
- Styling for the heading (bold, sans-serif font).
- Calculator container styling: background color `#cccccc`, padding, borders mimicking the original image's depth effect.
- Button styling: rounded edges if needed, monospace-like font, borders, and margins to perfectly replicate the spacing in the image.
- Input box styling.

#### [NEW] [calculator.js](file:///c:/Users/jayta/Documents (Local)/GitHub/itis3135/in-class-activity-15-1/calculator.js)
- Event listeners for all buttons using unobtrusive JavaScript.
- Most buttons will append their text to the `#calc-display` input value.
- "Clear" button will set the display value to `""`.
- "Calculate" button will fetch the string, perform necessary replacements (e.g., `^` to `**`, `sqrt(` to `Math.sqrt(`, `Floor(` to `Math.floor(`, `Round(` to `Math.round(`), and evaluate the string safely to output the result.

## Open Questions
> [!WARNING]
> 1. In many class environments, the `eval()` function is discouraged for security reasons. Shall I use `eval()` with sanitization (simple replace), or manual parsing? I will use `Function()` or `eval()` if not specified, since it's a simple, local class activity.
> 2. For `--` and `++`, do you want these to subtract/add 1 immediately from the current input box, or append `--`/`++` to the string?

## Verification Plan

### Manual Verification
- Open `calculator.html` in a web browser.
- Verify that the layout, fonts, and box shadows match the image.
- Verify that clicking numbers and symbols populates the input field.
- Type `2 + 3 * 4` and click Calculate -> must show `14`.
- Use the advanced buttons (`^`, `sqrt()`, `Floor`, etc.) and ensure they process correctly.
- Verify that clicking the "Clear" button empties the input field.
