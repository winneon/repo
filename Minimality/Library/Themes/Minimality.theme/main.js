var hours12 = false;

function init(){
	time();
	
}

function time(){
	
	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	
	var h = document.getElementById('hour');
	var m = document.getElementById('min');
	
	if (hours12){
		
		if (hour > 12){
			
			hour -= 12;
			
		}
		
	}
	
	hour = convert(hour);
	min = convert(min);
	
	h.innerHTML = hour;
	m.innerHTML = min;
	
	date(d);
	setTimeout('time()', 1000);
	
}

function date(d){
	
	var dd = document.getElementById('day');
	var da = document.getElementById('date');
	
	var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY',
		'THURSDAY', 'FRIDAY', 'SATURDAY'];
	var months = ['JANUARY', 'FEBRURARY', 'MARCH', 'APRIL',
		'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER',
		'OCTOBER', 'NOVEMBER', 'DECEMBER'];
	
	var day = days[d.getDay()];
	var month = months[d.getMonth()];
	
	dd.innerHTML = day;
	da.innerHTML = d.getDate() + ' ' + month;
	
}

function convert(min){
	
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five',
		'six', 'seven', 'eight', 'nine', 'ten',
		'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
		'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['twenty', 'thirty', 'forty', 'fifty',
		'sixty', 'seventy', 'eighty', 'ninety'];
	
	var ten;
	var one;
	var result;
	
	if (min < ones.length){
	
		result = ones[min];
		
	} else {
	
		ten = Math.floor(min / 10);
		one = min % 10;
		
		if (ten <= 9){
			
			result = tens[ten - 2];
			
			if (one > 0){
				
				result += " " + ones[one];
				
			}
			
		} else {
			
			result = "unknown";
			
		}
		
	}
	
	return result;
	
}
