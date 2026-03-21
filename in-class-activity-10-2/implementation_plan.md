# Ducati Webpage Implementation Plan

This plan outlines the steps we will take to match your provided sketch and incorporate your advanced improvements into the current webpage.

## Proposed Changes

### Styling & Layout ([motor.css](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-10-2/motor.css))
- **Green Highlights**: Ensure all `<p>` tags with `strong` labels (including the `id="year"`) share the same bright green background color, matching the sketch.
- **Button Display (Grid & Borders)**: Group the buttons using CSS Grid or Flexbox to form a 2x2 layout. We will apply thick dark-blue borders with slight inner padding to mimic the sketch drawing boundaries.
- **Heading Background Width**: Set the `<h1>` element to `display: inline-block` with horizontal padding. This makes the background color extend beautifully past the text, without expanding across the entire screen.
- **Formal Aesthetic**: We'll adopt a cleaner, more readable serif font (e.g., Georgia or Merriweather) and fine-tune margins and padding. This provides a more premium feel, making it attractive to an older, mature demographic.

### DOM Updates ([motor.html](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-10-2/motor.html))
- **Wait... Purple Button**: The original sketch shows four buttons ("White", "Red", "Green", "Purple"). We will add the missing "Purple" button next to "Green".
- **Product & Background Images**: We'll dynamically insert the newly generated images.

### JavaScript Behaviors ([motor.js](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-10-2/motor.js))
- **Heading Background**: We will change [changeTextColor](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-10-2/motor.js#16-20) to modify `heading.style.backgroundColor` instead of text color to meet your requirement.
- **Purple Button Handler**: Implement an event listener for the newly added Purple button.

### Asset Generation
- **Background Texture**: We will use the `generate_image` tool to create a classy, subtle background texture suitable for an upscale listing.
- **Motorcycle Image**: We will generate an image of a 2012 Ducati Streetfighter 848 and insert it into the layout.

## Verification
- We will review the page in the browser (or run manual checks) to ensure the 2x2 button grid is visually correct and the color-changing mechanism works reliably for the background.
