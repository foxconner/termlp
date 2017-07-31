$('.open-popup').click(function(){
	$('.popup').css({'top': $(window).scrollTop() + 
		($(window).innerHeight() /2 - 168)}).addClass('active');
	$('.bg-popup').fadeIn();

	$(window).scroll(function(){
		$('.popup').css({'top': $(window).scrollTop() + 
			($(window).innerHeight() /2 - 168)});
	}).scroll();

	$('.bg-popup').click(function(){
		$('.popup').removeClass('active');
		$('.bg-popup').fadeOut();
	});
});



$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Спасибо за Ваш интерес!\n\nВаши данные отправлены.\nНаш менеджер свяжется с Вами в ближайшее время.");
		setTimeout(function() {
			th.trigger("reset");
		}, 500);
		setTimeout(function() {
			$('.popup').removeClass('active');
			$('.bg-popup').fadeOut();
		}, 1500);
	});
	return false;
});