# Calculator Verification Checklist

- [x] Open calculator app
- [x] Verify logo visibility at the top: Logo is visible (CalcBuddy).
- [x] Verify colorful and modern style: Yes, it has a modern gradient background and colorful buttons.
- [ ] Verify vertical responsiveness (fits vertically when resized): FAILED. When height is 600px, the bottom rows of the calculator are cut off.
- [x] Test leading zero prevention:
    - [x] '0' then '0' -> '0': PASSED.
    - [x] '0' then '5' -> '5': PASSED.
    - [x] '0' then '.' then '5' -> '0.5': PASSED.
    - [x] '0.0005' -> allowed: PASSED.
    - [x] '10+0' then '0' -> '10+0': PASSED.
    - [x] '10+0' then '5' -> '10+5': PASSED.
- [x] Verify basic calculation (2+2=4): PASSED.
