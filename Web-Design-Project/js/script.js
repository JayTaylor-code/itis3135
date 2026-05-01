$(document).ready(function () {
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    $("body").append('<button id="topBtn">Top</button>');

    $("#topBtn").css({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        display: "none",
        background: "red",
        color: "white",
        border: "none",
        cursor: "pointer"
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    $("form").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val();

        if (name.length < 2) {
            alert("Please enter a valid name.");
        } else {
            alert("Thank you, " + name + "! Your request has been submitted.");
        }
    });
});
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 200
});
$.ajax({
    url: "data/faqs.json",
    method: "GET",

    success: function(data){
        let html = "";

        if (typeof data === "object" && data.faqs) {
            $.each(data.faqs, function(index, faq) {
                html += `
                    <h5>${faq.question}</h5>
                    <p>${faq.answer}</p>
                `;
            });
        }
        else {
            $(data).find("faq").each(function () {
                let question = $(this).find("question").text();
                let answer = $(this).find("answer").text();

                html += `
                    <h5>${question}</h5>
                    <p>${answer}</p>
                `;
            });
        }

        $("#faq-container").html(html);
    },

    error: function() {
        $("#faq-container").html("<p>Failed to load FAQs.</p>");
    }
});