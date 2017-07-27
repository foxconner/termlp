$(document).ready(function(){
	var clock = $('.count').FlipClock({
		clockFace : 'DailyCounter',
		autoStart : false,
		language : 'russian',
		callbacks : {
			stop : function() {
				$('.massage').html('Время акции истекло!');
			}
		}
	});

	clock.setTime(50000);
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