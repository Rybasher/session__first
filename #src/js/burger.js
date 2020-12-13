$(".icon__menu").click(function () {
	$(this).addClass("active");
	$('.menu__body, .sec__img, .secreatar__container>p').addClass('active');

	$('body').addClass('lock');
	$('.icon__burger').addClass('active');
})
$('.icon__burger').click(function () {
	$(this).removeClass("active");
	$('.menu__body, .icon__menu, .sec__img, .secreatar__container>p').removeClass('active');
	$('body').removeClass('lock');
})