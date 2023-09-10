const darkMode = $(".go-dark")
const button = $("button")

button.on("click", function(){
  darkMode.toggleClass("dark-mode")
})

//my map//

        const map = L.map('map').setView([39.091077, -94.564205],
           13);                             
 const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

var marker = L.marker([39.091077,-94.564205]).addTo(map);

var circle = L.circle([39.10, -94.56], {radius: 1000}).addTo(map);


$(function(){
    $("#get-in-touch").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Your message was sent successfully!");
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});




