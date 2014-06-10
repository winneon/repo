$(document).ready(function(){
	run();
});

function run(){
	var date = new Date();
	
	$(".hours").html(date.getHours() > 9 ? date.getHours() : "0" + date.getHours());
	$(".mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	
	setTimeout("run();", 1000);
}