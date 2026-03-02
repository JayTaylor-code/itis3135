let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) { return document.querySelector("#" + id); };

document.addEventListener("DOMContentLoaded", function () {
    $("show_results").addEventListener("click", showResults);
    $("add").addEventListener("click", addHeight);
    $("display_height").addEventListener("click", displayHeight);

    $("name").focus();
});

function showResults() {
    let average;
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        sum += height[i];
    }
    average = Math.round(sum / height.length);

    let highest = height[0];
    let name = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > highest) {
            highest = height[i];
            name = i;
        }
        else {
            highest = highest;
        }
    }

    let result = "<h2>Results</h2><p>Average height = " + average + "</p><p>Highest height = "
        + names[name] + " with a height of " + highest + "</p>";
    $("result").innerHTML = result;
}

function addHeight() {
    let name = $("name").value;
    let h = parseInt($("height").value);

    if (name === "" || isNaN(h) || h < 0 || h > 100) {
        alert("Please enter a valid name and height.");
        $("name").focus();
        return;
    }

    names.push(name);
    height.push(h);

    $("name").value = "";
    $("height").value = "";
    $("name").focus();
}

function displayHeight() {
    let html = "<h2>Heights</h2><tr><th>Name</th><th>Height</th></tr>";

    for (let i = 0; i < names.length; i++) {
        html += "<tr><td>" + names[i] + "</td>";
        html += "<td>" + height[i] + "</td></tr>";;
    }

    $("height_table").innerHTML = html;
}