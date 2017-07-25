$('.open-popup').click(function(){
	$('.popup').css({'top': $(window).scrollTop() + 
		($(window).innerHeight() /2 - 168)}).addClass('active');
	$('.bg-popup').fadeIn();

	$('.bg-popup').click(function(){
		$('.popup').removeClass('active');
		$('.bg-popup').fadeOut();
	});
});

$(window).scroll(function(){
	$('.popup').css({'top': $(window).scrollTop() + 
		($(window).innerHeight() /2 - 168)});
}).scroll();

$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Thank you!");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});