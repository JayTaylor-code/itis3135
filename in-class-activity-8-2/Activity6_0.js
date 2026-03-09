"use strict";
convertGrade();

function convertGrade() {
    let score;

    while (true) {
        score = prompt("Enter a number grade (0-120) or -1 to quit:");

        if (score === null) break;

        const checked = checkNumber(score);

        if (checked === -1) break;

        if (checked === undefined) continue;

        const letter = numberToLetterGrade(checked);
        alert(`Number grade: ${checked}\nLetter grade: ${letter}`);
    }
}

function checkNumber(input) {
    input = input.trim();

    if (input === "-1") return -1;

    const num = Number(input);

    if (!Number.isInteger(num) || num < 0 || num > 120) {
        alert("Please enter an integer from 0-120, or -1 to quit.");
        return undefined;
    }

    return num;
}

function numberToLetterGrade(score) {
    let grade = '';

    //score = parseInt(score);

    if (score >= 100) {
        grade = 'A';
    } else if (score >= 80 && score <= 99) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else if (score < 60) {
        grade = 'F';
    }
    return grade; //return the letter grade
}


