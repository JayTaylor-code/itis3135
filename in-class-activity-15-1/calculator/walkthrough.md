# Calculator Implementation Walkthrough

## Overview
Based on the `calculator original.png` design template, I have fully implemented the calculator application. The setup consists of three files within your workspace directory (`in-class-activity-15-1`), completely separating structure, styling, and behavior.

> [!NOTE]  
> All three files (`calculator.html`, `calculator.css`, and `calculator.js`) are located in `c:\Users\jayta\Documents (Local)\GitHub\itis3135\in-class-activity-15-1`.

## High-Level Changes

### 1. HTML Structure
Created [calculator.html](file:///c:/Users/jayta/Documents%20(Local)/GitHub/itis3135/in-class-activity-15-1/calculator.html):
- A `div` wrapper handles the central calculator body.
- An `<input type="text">` component acts as the calculator's screen (`calc-display`).
- The buttons match the layout specified in the image, organized via rows using `<button>` elements.

### 2. CSS Styling
Created [calculator.css](file:///c:/Users/jayta/Documents%20(Local)/GitHub/itis3135/in-class-activity-15-1/calculator.css):
- Uses Flexbox (`.keypad`, `.row`) to perfectly align the buttons in their respective rows.
- Thick directional borders (`border-bottom` and `border-right` offset with `border-top` and `border-left`) are used to create the 3D-inset visual effect matching the screenshot.
- Specialized classes like `.wide-btn` are applied to the `sqrt()`, `Floor`, and `Round` buttons to accommodate their text without breaking the layout.

### 3. JavaScript Functionality
Created [calculator.js](file:///c:/Users/jayta/Documents%20(Local)/GitHub/itis3135/in-class-activity-15-1/calculator.js):
- Selected all functional `.btn` classes and attached an event listener to dynamically insert button values into the screen as they are clicked.
- **Calculate Logic**: The logic cleanly handles standard and custom operations seamlessly using Regex parsing:
  - Exponentiation (`^`, `^2`) is intelligently parsed to JavaScript's `**` syntax.
  - Increment/Decrement decorations (`++`, `--`) are safely routed to inline `+1` / `-1` operations.
  - Functions are safely mapped locally (e.g. `sqrt()9` dynamically translates into `Math.sqrt(9)` and `Floor5.5` easily translates into `Math.floor(5.5)` for clean evaluation).

## Validation Results
- **Visuals**: Confirmed accurate positioning corresponding to the mock-up, including spacing, padding, and pseudo-active states (`:active`).
- **Functionality**: Replaces specialized custom keywords with real Javascript math logic before evaluating securely, with a fallback `try/catch` UI alert for syntactically invalid input strings.

> [!TIP]
> You can open `calculator.html` in your web browser securely and type numeric values on your keyboard manually into the screen or rely entirely on your mouse interactions by clicking the provided grid map.
