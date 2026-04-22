document.addEventListener("DOMContentLoaded", () => {
    const displayElement = document.getElementById("calc-display");
    const buttons = document.querySelectorAll('.keypad .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btnText = e.target.textContent;
            
            if (e.target.id === 'btn-clear') {
                displayElement.value = '';
            } else if (e.target.id === 'btn-calculate') {
                calculateResult();
            } else {
                handleInput(btnText);
            }
        });
    });

    function handleInput(btnText) {
        const currentVal = displayElement.value;
        
        // Find the current number part (after the last operator or symbol)
        // We split by anything that isn't a digit or a dot.
        const parts = currentVal.split(/[^0-9.]/);
        const currentNumPart = parts[parts.length - 1];

        if (btnText >= '0' && btnText <= '9') {
            if (currentNumPart === '0') {
                if (btnText === '0') {
                    // Prevent multiple leading zeros (00 -> 0)
                    return;
                } else {
                    // Replace leading zero with digit (05 -> 5)
                    displayElement.value = currentVal.slice(0, -1) + btnText;
                    return;
                }
            }
        } else if (btnText === '.') {
            if (currentNumPart.includes('.')) {
                // Prevent multiple decimals in one number
                return;
            }
            if (currentNumPart === '') {
                // If starting a number with dot, prepend 0
                displayElement.value += '0.';
                return;
            }
        }

        displayElement.value += btnText;
    }

    function calculateResult() {
        let expr = displayElement.value;
        if (!expr) return;

        try {
            // Handle square root: matches "sqrt()9" or "sqrt() 9"
            expr = expr.replace(/sqrt\(\)\s*(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)');
            // Also handle just "sqrt(" if the user typed it
            expr = expr.replace(/sqrt\(/g, 'Math.sqrt(');
            
            // Handle Floor and Round: matches "Floor9" or "Round 9.5"
            expr = expr.replace(/Floor\s*(\d+(?:\.\d+)?)/g, 'Math.floor($1)');
            expr = expr.replace(/Round\s*(\d+(?:\.\d+)?)/g, 'Math.round($1)');
            
            // Handle squaring: matches "5^2"
            expr = expr.replace(/(\d+(?:\.\d+)?)\s*\^2/g, '($1**2)');
            // Handle power: matches "^" to "**"
            expr = expr.replace(/\^/g, '**');
            
            // Handle increment/decrement: "5++" -> "(5+1)"
            expr = expr.replace(/(\d+(?:\.\d+)?)\s*\+\+/g, '($1+1)');
            expr = expr.replace(/(\d+(?:\.\d+)?)\s*--/g, '($1-1)');

            // Evaluate the parsed mathematical expression
            const result = new Function('return ' + expr)();
            displayElement.value = result;
        } catch (error) {
            alert("Invalid mathematical expression.");
            console.error(error);
        }
    }
});
