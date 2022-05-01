$(function() {

	// Header Scroll Active
	$(window).scroll(function() {
        $(window).scrollTop() > 100 ? $("header").addClass("scroll-active") : $("header").removeClass("scroll-active")
    }),
    $(document).ready(function() {
        $(window).scrollTop() > 100 ? $("header").addClass("scroll-active") : $("header").removeClass("scroll-active")
    });

	// Mobile Menü
	$(".mobile-btn").on('click', function() {
		$(".mobile-menu").addClass('active');
		$('body').addClass('overflow-hidden');
		setTimeout(function() {
			$(".mobile-menu-main").addClass('active');
		}, 300);
	})

	$(".mobile-close-btn, .mobile-menu .overlay").on('click', function() {
		$(".mobile-menu-main").removeClass('active');
		setTimeout(function() {
			$(".mobile-menu").removeClass('active');
			$('body').removeClass('overflow-hidden');
		}, 500);
	})

	$(".mobile-menu .menu ul li a.has-child").on('click', function() {
		$(this).parent().find('ul').slideToggle();
		$(this).toggleClass('active');

		$(this).parent().siblings().find('ul').slideUp();
		$(this).parent().siblings().find('a').removeClass('active');
	})

	// Language
	$('.language .current').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().find('ul').slideToggle();
	})
});
