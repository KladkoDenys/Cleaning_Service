

$(document).ready(function($){
   
	var full = $('#fullscreen');
	$(full).data('state','open');
	$('.main-part__btn-article,#callBack').click(function(){
		if($(full).data('state') == 'open'){
			$(full).fadeIn(300);
			$(full).data('state','close');
		}
	});
	$('.close').click(function(){
		if($(full).data('state') == 'close'){
			$(full).fadeOut();
			$(full).data('state','open');
		}
	});
	
	
});

$(document).ready(function () {

	$('#menuFAQ').click(function(){
		$("html,body").scrollTop($('#faq').offset().top);
	})	


	
	$('#logo,#logo-footer').click(function () { 
		$('html,body').scrollTop($('.main').offset().top);
	});

});

$(document).ready(function(){


	// let flag = false
	// $('.header__menu-items').click(function(){
	// 	if(!flag){
	// 		$('.header__menu-list').slideDown();
	// 	}else{
	// 		$('.header__menu-list').slideUp();
	// 	}
	// 	flag = !flag;
	// })


	// -----menu--click--btn1----
	$('.header__menu-btn1').on('click', function(){
		$('.header__menu-list1').fadeToggle();
	});
	
	let menuBtn1 = $('.header__menu-btn1');
	let categories1 = $('.header__menu-list1');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn1.is(e.target) && menuBtn1.has(e.target).length === 0 &&
			! categories1.is(e.target) && categories1.has(e.target).length === 0
		){
		categories1.fadeOut();
	}
	});
// ----------------menu--click--btn2----
	$('.header__menu-btn2').on('click', function(){
		$('.header__menu-list2').fadeToggle();
	});
	
	let menuBtn2 = $('.header__menu-btn2');
	let categories2 = $('.header__menu-list2');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn2.is(e.target) && menuBtn2.has(e.target).length === 0 &&
			! categories2.is(e.target) && categories2.has(e.target).length === 0
		){
		categories2.fadeOut();
	}
	});
// ---------------menu--click--btn4----
	$('.header__menu-btn4').on('click', function(){
		$('.header__menu-list4').fadeToggle();
	});
	
	let menuBtn4 = $('.header__menu-btn4');
	let categories4 = $('.header__menu-list4');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn4.is(e.target) && menuBtn4.has(e.target).length === 0 &&
			! categories4.is(e.target) && categories4.has(e.target).length === 0
		){
		categories4.fadeOut();
	}
	});

}
);


// faq-block--------------------------------------------

$(document).ready(function(){

	let flag1 = false;
	let flag2 = false;
	let flag3 = false;
	let flag4 = false;
	let flag5 = false;
	let flag6 = false;
	let flag7 = false;
	let flag8 = false;

	$('#faq__colum-head-hide1,#faq__colum-head-hide12,#faq__colum-head-hide13').click(function(){
		if(!flag1){
			$('.faq__colum-text1').slideDown(500);
			$('#faq__colum-head-hide13').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide13').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text1').slideUp(500);
			$('#faq__colum-head-hide13').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide13').addClass('faq__colum-head-hide-anim-up')
		}
		flag1 =!flag1
	})
	$('#faq__colum-head-hide2,#faq__colum-head-hide22,#faq__colum-head-hide23').click(function(){
		if(!flag2){
			$('.faq__colum-text2').slideDown(500);
			$('#faq__colum-head-hide23').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide23').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text2').slideUp(500);
			$('#faq__colum-head-hide23').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide23').addClass('faq__colum-head-hide-anim-up')
		}
		flag2 =!flag2
	})
	$('#faq__colum-head-hide3,#faq__colum-head-hide32,#faq__colum-head-hide33').click(function(){
		if(!flag3){
			$('.faq__colum-text3').slideDown(500);
			$('#faq__colum-head-hide33').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide33').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text3').slideUp(500);
			$('#faq__colum-head-hide33').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide33').addClass('faq__colum-head-hide-anim-up')
		}
		flag3 =!flag3
	})
	$('#faq__colum-head-hide4,#faq__colum-head-hide42,#faq__colum-head-hide43').click(function(){
		if(!flag4){
			$('.faq__colum-text4').slideDown(500);
			$('#faq__colum-head-hide43').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide43').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text4').slideUp(500);
			$('#faq__colum-head-hide43').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide43').addClass('faq__colum-head-hide-anim-up')
		}
		flag4 =!flag4
	})
	$('#faq__colum-head-hide5,#faq__colum-head-hide52,#faq__colum-head-hide53').click(function(){
		if(!flag5){
			$('.faq__colum-text5').slideDown(500);
			$('#faq__colum-head-hide53').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide53').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text5').slideUp(500);
			$('#faq__colum-head-hide53').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide53').addClass('faq__colum-head-hide-anim-up')
		}
		flag5 =!flag5
	})
	$('#faq__colum-head-hide6,#faq__colum-head-hide62,#faq__colum-head-hide63').click(function(){
		if(!flag6){
			$('.faq__colum-text6').slideDown(500);
			$('#faq__colum-head-hide63').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide63').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text6').slideUp(500);
			$('#faq__colum-head-hide63').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide63').addClass('faq__colum-head-hide-anim-up')
		}
		flag6 =!flag6
	})
	$('#faq__colum-head-hide7,#faq__colum-head-hide72,#faq__colum-head-hide73').click(function(){
		if(!flag7){
			$('.faq__colum-text7').slideDown(500);
			$('#faq__colum-head-hide73').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide73').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text7').slideUp(500);
			$('#faq__colum-head-hide73').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide73').addClass('faq__colum-head-hide-anim-up')
		}
		flag7 =!flag7
	})
	$('#faq__colum-head-hide8,#faq__colum-head-hide82,#faq__colum-head-hide83').click(function(){
		if(!flag8){
			$('.faq__colum-text8').slideDown(500);
			$('#faq__colum-head-hide83').removeClass('faq__colum-head-hide-anim-up')
			$('#faq__colum-head-hide83').addClass('faq__colum-head-hide-anim-dwn')
		}
		else{
			$('.faq__colum-text8').slideUp(500);
			$('#faq__colum-head-hide83').removeClass('faq__colum-head-hide-anim-dwn')
			$('#faq__colum-head-hide83').addClass('faq__colum-head-hide-anim-up')
		}
		flag8 =!flag8
	})

})


// --------------------------------------------Manufacturing Cleaning-page "Contacts-P2.html"----------------------------------
$(document).ready(function () {
	
	$('#main-P2__input-part-btn').click(function (e) { 
		e.preventDefault();
		location.reload();
	});

});

// --------------------------------------------P6-404--------


$(document).ready(function () {
	
	$('#main-p6__btn-go-back').click(function (e) { 
		e.preventDefault();
		history.back();
	});

});
