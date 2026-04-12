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