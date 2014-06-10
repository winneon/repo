run();

function run(){
	var verbal = new VerbalDate(false);
	var date = new Date();
	var hours = date.getHours();
	
	if (!(hours24)){
		hours = hours > 12 ? hours - 12 : hours;
	}
	
	$(".date").html(date.getDate() + " " + verbal.getMonth() + " " + date.getFullYear());
	$(".hours").html(hours > 9 ? hours : "0" + hours);
	$(".mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	setTimeout("run();", 1000);
}
