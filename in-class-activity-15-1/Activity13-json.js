$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        dataType: "json"
    })
    .done(
        function(data) {
            $("#team").html("");
            data.teammembers.forEach(function(m) {
                $("#team").append
                ("<h3>" + m.name + "</h3>" +
                          m.title + "<br>" +
                          m.bio + "<br>");
            });
    })
    .fail(function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
    });

});