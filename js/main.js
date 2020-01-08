
// carousel 

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		margin:25,
		loop: true,
		nav:true,
		navText:[''],	
		responsive:{
			320:{
				items:1
			},
			768:{
				items:2
			},
			1025:{
				items:3
			},
		}
	});


// scroll
$('a[href*="#"]').bind("click",function(e){
	var anchor =$(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top-60
	}, 1200);
	e.preventDefault();
});

// burger
var div = $('.header__button_menu');
var button = $('.span__btn');
var menu = $('.header__nav__list');

div.click(function() {
	button.toggleClass('open');
	menu.toggleClass('activ');
	$('body').toggleClass('lock');
});
$('.header__nav__list, .header__item').click(function(event){
	$('.header__nav__list').removeClass('activ');
	$('.span__btn').removeClass('open');
	$('body').removeClass('lock');
});


// animation elements
$(document).ready(function(){
  
    $('.element, .gradient__element').removeClass('anim');
  });

  

//   modall windows

// открыть по кнопке
$('.modal_1').click(function() {
	$('.filter_1').fadeIn();
	$('.filter_1').addClass('disabled');
	$('body').css('overflow', 'hidden');
});
$('.modal_2').click(function() {
	$('.filter_2').fadeIn();
	$('.filter_2').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

// закрытие окна на крестик
$('.modal-close').click(function(event) {
	$('.filter_1, .filter_2').fadeOut();
	event.preventDefault();
	$('body').css('overflow', 'auto');
});

// закрытие по клику вне окна
$(document).on('click', function(e){
	if (!(
	($(e.target).parents('.modal').length)
	||	($(e.target).hasClass('modal'))
	||	($(e.target).hasClass('modal_1')))
	) {
		$('.filter_1').fadeOut();
		$('body').css('overflow', 'auto');
	}
});
$(document).on('click', function(e){
	if (!(
	($(e.target).parents('.modal').length)
	||	($(e.target).hasClass('modal'))
	||	($(e.target).hasClass('modal_2')))
	) {
		$('.filter_2').fadeOut();
	}
});


// открыть по таймеру
// $(window).on('load', function () {
// 	setTimeout(function() {
// 		if($('.filter_2').hasClass('disabled')) {
// 			return false;
// 		} else {
// 			$('.filter_2').fadeIn();
// 		}
// 	}, 5000);
// });

});