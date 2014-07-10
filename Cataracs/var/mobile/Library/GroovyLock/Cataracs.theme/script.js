$(document).ready(function(){
	run();
});

function run(){
	var date = new Date();
	var hours = date.getHours();
	
	if (!(hours24)){
		hours = hours > 12 ? hours - 12 : hours;
		if (hours == 0){
			hours = 12;
		}
	}
	
	$(".hours").html(hours > 9 ? hours : "0" + hours);
	$(".mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	
	setTimeout(run, 1000);
}