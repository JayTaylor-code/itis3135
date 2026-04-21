"use strict";

$("button").on("click", function() {
    // Make ajax request to weather.php with the entered zip code
    $.ajax({
       type: "GET",
       data: {"zip": $("#zip").val()},
       dataType: "json",
       url: "https://wp.zybooks.com/weather.php",
       error: function(jqXHR) {
         $("#forecast").html("There was a problem contacting the server: " +
            jqXHR.status + " " + jqXHR.responseText);
       },
       success: function(data) {          
          let html;
          if (data.success) {
             html = "<h3>Forecast</h3>\n<ol>";          
             data.forecast.forEach(function(day) {
                            html += "<li>" + day.desc + ": High is " + day.high + ", low is " + day.low
                                         + "</li>";
                       });
                    
             html += "</ol>";
          }
          else {         
             html = "<h3>" + data.error + "</h3>";         
          }
       
          $("#forecast").html(html);
       }
    });
 });
