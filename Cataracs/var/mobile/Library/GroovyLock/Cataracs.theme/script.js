$.ajaxSetup({
	cache: false,
	headers: {
		"Cache-Control": "no-cache"
	}
});
$(document).ready(function(){
	if (xy != "auto, auto"){
		var x = xy.split(", ")[0];
		var y = xy.split(", ")[1];
		
		vertical_spacing = 0;
		horizontal_spacing = 0;
		notification_support = false;
		
		$("div.content").css("position", "absolute");
		$("div.content").css("top", (y - 15) + "px");
		$("div.content").css("left", x + "px");
	}
	if (horizontal){
		$("div.content").attr("data-orientation", "horizontal");
		$("div.content[data-orientation='horizontal'] div.hours").attr("data-separator", horizontal_separator);
		$("div.content").css("padding-top", horizontal_spacing + "px");
	} else {
		$("div.content").css("padding-top", vertical_spacing + "px");
	}
	if (date){
		$("div.date").show();
	}
	if (shadow){
		$("div.time").addClass("shadow");
	}
	if (bg_colour != "transparent"){
		$("div.time").css("background-color", "rgba(" + toRGB(bg_colour) + ", " + bg_opacity + ")");
	}
	if (iPhone_6_blur){
		$("div.bg").css("background-size", "375px auto");
	}
	if (iPhone_6_Plus_blur){
		$("div.bg").css("background-size", "420px auto");
	}
	if (border_width != 2){
		$("div.time").css("border-width", border_width);
	}
	if (font_family != "Gotham"){
		$("body").css("font-family", "'" + font_family + "', -apple-system-font, sans-serif");
	}
	if (scale != 1){
		$("div.time").css("-webkit-transform", "scale(" + scale + ", " + scale + ")");
	}
	if (blur){
		$("div.blur").blurjs({
			source: "div.bg",
			radius: radius
		});
	}
	if (temp){
		temperature();
	}
	
	run();
});

function run(){
	var date = new Date();
	var verbal = new VerbalDate(hours24);
	var hours = date.getHours();
	
	if (!(hours24)){
		hours = hours > 12 ? hours - 12 : hours;
		if (hours == 0){
			hours = 12;
		}
	}
	
	$("div.hours").html(hours > 9 ? hours : "0" + hours);
	$("div.mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	$("div.date").html(verbal.getShortDayOfWeek() + ", " + date.getDate() + " " + verbal.getShortMonth() + " " + date.getFullYear());
	
	if (window.groovyAPI && notification_support){
		if (groovyAPI.isShowingNotifications()){
			$("div.content").animate({
				"padding-top": notification_spacing + "px"
			}, 1000);
		} else if ($("div.content").css("padding-top") != (horizontal ? horizontal_spacing : vertical_spacing) + "px"){
			$("div.content").animate({
				"padding-top": (horizontal ? horizontal_spacing : vertical_spacing) + "px"
			}, 1000);
		}
	}
	if (battery){
		$.get("file:///var/mobile/Library/Stats/BatteryStats.txt", function(data){
			var split = data.split("\n");
			var level = split[0].split(": ")[1];
			var state = split[1].split(": ")[1];
			
			if (state == "Charging" || state == "Fully Charged"){
				$("div.time").css("background-image", "-webkit-linear-gradient(bottom, #27AE60, #27AE60 " + level + "%, transparent " + level + "%, transparent 100%)");
				$("div.time").css("border-width", "5px");
				$("div.cap").show();
			} else {
				$("div.time").css("border-width", border_width);
				$("div.time").css("background-image", "none");
				$("div.cap").hide();
			}
		});
	}
	
	setTimeout(run, 1000);
}

function temperature(){
	$.simpleWeather({
		woeid: woeid,
		unit: unit,
		success: function(data){
			console.log(data);
			$("div.temp").html(data.temp + "&deg; " + data.units.temp);
		}
	});
	$("div.temp").css("visibility", "visible");
	
	setTimeout(temp, 10000);
}

function toRGB(hex){
	var cut = hex.charAt(0) == "#" ? hex.substring(1, hex.length) : hex;
	var r = parseInt(cut.substring(0, 2), 16);
	var g = parseInt(cut.substring(2, 4), 16);
	var b = parseInt(cut.substring(4, 6), 16);
	
	return r + ", " + g + ", " + b;
}