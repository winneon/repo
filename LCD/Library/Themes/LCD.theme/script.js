$(document).ready(function(){
    run();
    loc();
});

function run(){
    var date = new Date();
    var hours = date.getHours();
    if (!(hours24)){
    	hours = hours > 12 ? hours - 12 : hours;
    }
    $(".hours").html(hours);
    $(".mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
    $(".date").html(date.getDate() + " . " + new VerbalDate(false).getMonth() + " . " + date.getFullYear());
    setTimeout("run();", 1000);
}

function loc(){
    $.simpleWeather({
        location: "",
        woeid: woeid,
        unit: unit,
        success: function(weather){
            $(".right li:nth-child(1)").html(weather.temp + "&deg;" + weather.units.temp);
            $(".right li:nth-child(2)").html(weather.high + "&deg;" + weather.units.temp + " / " + weather.low + "&deg;" + weather.units.temp);
            $(".right li:nth-child(3)").html(weather.city + ", " + weather.region);
        },
        error: function(error){
            $(".error").prepend(error);
        }
    });
    setTimeout("loc();", 300000);
}