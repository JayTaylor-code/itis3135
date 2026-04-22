# Calculator Modernization Plan

This plan aims to transform the current "boring" calculator into a vibrant, student-friendly application with improved input logic and a modern aesthetic.

## User Review Required

> [!IMPORTANT]
> The UI will undergo a significant overhaul using vibrant colors and rounded elements to appeal to young students. Please review the proposed color palette and layout.

## Proposed Changes

### UI & Aesthetics
- **Logo**: Integrate the newly generated vibrant logo at the top of the calculator.
- **Design System**: 
  - Use a modern, playful color palette (Teal, Orange, Purple, Soft White).
  - Implement glassmorphism or soft shadows for a premium feel.
  - Use rounded buttons with micro-animations on hover and active states.
  - Modern typography (Inter or Roboto).
- **Responsive Layout**: Use flexbox on the `body` to center the calculator and ensure it always fits within the viewport height (`max-height: 100vh`).

### Input Logic (calculator.js)
- **Leading Zeros**: Implement logic to prevent multiple leading zeros while allowing `0.xxx`.
  - If the current number input is `0` and a non-decimal digit is entered, replace the `0`.
  - Prevent `000...` by checking the last character and the context of the current number.

### Files to Modify

#### [MODIFY] [calculator.html](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-15-2/calculator/calculator.html)
- Add the logo image.
- Add a container for better layout control.
- Link Google Fonts.

#### [MODIFY] [calculator.css](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-15-2/calculator/calculator.css)
- Complete rewrite of the styles for the "young student" aesthetic.
- Add vertical centering and scaling to fit window.

#### [MODIFY] [calculator.js](file:///c:/Users/jayta/Documents%20%28Local%29/GitHub/itis3135/in-class-activity-15-2/calculator/calculator.js)
- Update button click handler to handle leading zero logic.
- Ensure the display doesn't overflow or break the layout.

## Verification Plan

### Automated Tests
- N/A (Manual visual and functional verification).

### Manual Verification
- **Aesthetics**: Verify the logo is visible and the design is colorful and appealing.
- **Responsiveness**: Resize the browser window vertically to ensure the calculator doesn't get cut off.
- **Leading Zeros**:
  - Type `0` then `0` -> should stay `0`.
  - Type `0` then `5` -> should show `5`.
  - Type `0` then `.` then `5` -> should show `0.5`.
  - Type `10` then `+` then `0` then `0` -> should stay `10+0`.
  - Type `10` then `+` then `0` then `5` -> should show `10+5`.
