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
                displayElement.value += btnText;
            }
        });
    });

    function calculateResult() {
        let expr = displayElement.value;

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
            // NOTE: Using eval or Function is generally a security risk in production,
            // but is fine for this local calculator implementation.
            const result = new Function('return ' + expr)();
            displayElement.value = result;
        } catch (error) {
            alert("Invalid mathematical expression.");
            console.error(error);
        }
    }
});
