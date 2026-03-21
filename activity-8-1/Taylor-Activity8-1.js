//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num--;
        document.frmCalc.txtNumber.value = num;
    }
}

// Increment
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

// Subtraction
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

// Multiplication
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

// Division
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

// Square root
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.sqrt(num);
    }
}

// Power (binary)
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

// Power ^2 (unary)
function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.pow(num, 2);
    }
}

// Floor
function floorVal() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.floor(num);
    }
}

// Round
function roundVal() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.round(num);
    }
}



//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var total;

        if (calc == "Add") {
            total = prevCalc + num;
        }
        else if (calc == "Subtract") {
            total = prevCalc - num;
        }
        else if (calc == "Multiply") {
            total = prevCalc * num;
        }
        else if (calc == "Divide") {
            total = prevCalc / num;
        }

        else if (calc == "Power") {
            total = Math.pow(prevCalc, num);
        }

        document.frmCalc.txtNumber.value = total;
    }
}

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}

document.addEventListener("DOMContentLoaded", function () {

    // Numbers 0–9
    for (let i = 0; i <= 9; i++) {
        let btn = document.querySelector(`[name='btn${i}']`);
        if (btn) {
            btn.addEventListener("click", function () {
                showNum(i);
            });
        }
    }

    // Decimal
    document.querySelector("[name='btnDecimal']")
        .addEventListener("click", function () {
            showNum('.');
        });

    // Operations
    document.querySelector("[name='btnPlus']")
        .addEventListener("click", add);

    document.querySelector("[name='btnMinus']")
        .addEventListener("click", subtract);

    document.querySelector("[name='btnTimes']")
        .addEventListener("click", multiply);

    document.querySelector("[name='btnDivide']")
        .addEventListener("click", divide);

    document.querySelector("[name='btnPow']")
        .addEventListener("click", power);

    document.querySelector("[name='btnPow2']")
        .addEventListener("click", power2);

    //Other buttons
    document.querySelector("[name='btnDecrement']")
        .addEventListener("click", decrement);

    document.querySelector("[name='btnIncrement']")
        .addEventListener("click", increment);

    document.querySelector("[name='btnSqrt']")
        .addEventListener("click", sqrt);

    document.querySelector("[name='btnFloor']")
        .addEventListener("click", floorVal);

    document.querySelector("[name='btnRound']")
        .addEventListener("click", roundVal);

    document.querySelector("[name='btnCalc']")
        .addEventListener("click", calculate);

    document.querySelector("[name='btnReset']")
        .addEventListener("click", clear);

});