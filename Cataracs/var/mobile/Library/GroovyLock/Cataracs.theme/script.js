$(document).ready(function(){
	$("div.content").css("padding-top", spacing + "px");
	if (date){
		$("div.date").show();
	}
	if (shadow){
		$("div.time").addClass("shadow");
	}
	if (blur){
		$("div.blur").blurjs({
			source: "div.bg",
			radius: radius
		});
	}
	if (bg_colour != "transparent"){
		$("div.time").css("background-color", "rgba(" + toRGB(bg_colour) + ", " + bg_opacity + ")");
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
	
	if (window.groovyAPI){
		if (groovyAPI.isShowingNotifications()){
			$("div.content").animate({
				"padding-top": "10px"
			}, 1000);
		} else if ($("div.content").css("padding-top") != spacing + "px"){
			$("div.content").animate({
				"padding-top": spacing + "px"
			}, 1000);
		}
	}
	
	setTimeout(run, 1000);
}

function toRGB(hex){
	var cut = hex.charAt(0) == "#" ? hex.substring(1, hex.length) : hex;
	var r = parseInt(cut.substring(0, 2), 16);
	var g = parseInt(cut.substring(2, 4), 16);
	var b = parseInt(cut.substring(4, 6), 16);
	
	return r + ", " + g + ", " + b;
}