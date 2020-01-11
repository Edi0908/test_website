
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
	$('body').addClass('lock');
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
$(function() {
	$('.js__modal__open').click(function() {
		var modal = $(this).data('modal');
		$('#' + modal).addClass('filter__show');
		$('body').toggleClass('lock');
	});
	$('.modal-close').click(function() {
		$(this).parents().removeClass('filter__show');
		$('body').toggleClass('lock');
	});
});


// закрытие по клику вне окна
$(document).mouseup(function(e) {
	var popup = $('.modal');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.filter__show').removeClass('filter__show');
		$('body').removeClass('lock');
	}
});
});