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