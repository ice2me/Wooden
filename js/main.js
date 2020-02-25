$(document).ready(function(){		 // плавное перемещение страницы к нужному блоку
	$("nav, li, a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 2000);
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


// -------------predloader-------------
document.body.onload = function()
{
	$(".dot-1").css("animation", "dot-light 1s 0s forwards");
	$(".dot-2").css("animation", "dot-light 1s 0.75s forwards");
	$(".dot-3").css("animation", "dot-light 1s 1.5s forwards");
	$(".dot-4").css("animation", "dot-light 1s 2.25s forwards");
	setTimeout(function(){$(".item-1").css("width", "0");}, 2500);
	setTimeout(function(){$(".preloader").css("visibility", "hidden");}, 3000);
}

