$(document).ready(function(){       // плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1800);
	});
});


function burgerMenu(selector) {         // работа бургер меню
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');


$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
	if ($('#button__up').is(':hidden')) {
	$('#button__up').css({opacity : 3}).fadeIn(2000);
	}
}
	else { $('#button__up').stop(true, false).fadeOut(50);
}
});
	$('#button__up').click(function() {
	$('html, body').stop().animate({scrollTop : 0}, 1500);
});



$(document). ready(function(){
	$('.block__title').click(function(event){
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
});






$('.share__link').click(function(){
	$('.share__social').toggle();
});






