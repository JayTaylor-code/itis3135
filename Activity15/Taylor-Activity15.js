$(document).ready(function(){
    
    $.getJSON("facultyList.json", function(data) {
    
        let html = "";

        $.each(data.facultymembers, function(index, member) {
            html += `
            <div class="faculty-member">
                <img src="${member.image}" alt="${member.first_name}">
                <h2>${member.full_name}</h2>
                <h3>${member.department}</h3>
                <p>${member.bio}</p>
            </div>
            `;
        });

        $("#faculty").html(html);

    });
});
