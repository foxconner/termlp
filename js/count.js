$(document).ready(function(){
	var clock = $('.count').FlipClock({
		clockFace : 'DailyCounter',
		autoStart : false,
		language : 'russian',
		callbacks : {
			stop : function() {
				$('.massage').html('Время акции истекло!<br><br>');
			}
		}
	});

	var dt = 'Sep 15 2017 00:00:00';
	var first = new Date(dt);
	var last = new Date();
	var remaining = (first - last) / 1000;	

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();

	// var clock2 = $('.count2').FlipClock({
	// 	clockFace : 'DailyCounter',
	// 	language : 'russian',
	// 	showSeconds : false,
	// 	showMinutes : false,
	// 	setCountdown : true
	// });

	// clock2.setTime(5000000);
	// clock2.setCountdown(true);
});