$(function() {

	$("select").niceSelect();

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

	$(".faq .faq-item .faq-header").on('click', function() {
		$(this).parent().toggleClass('active').siblings().removeClass('active');

		$(this).parent().find('.faq-content').slideToggle();
		$(this).parent().siblings().find('.faq-content').slideUp();
	})

	// News Detail Font Size Controller
	var fSize = 23;
    $(".increase").click(function() {
        fSize++;
        $("p").css("font-size", fSize+ 'px');
    })
    $(".decrease").click(function() {
        fSize--;
        $("p").css("font-size", fSize+ 'px');
    })

	$(".copy-url").on('click', function(){
		$(".copy-tooltip").addClass("active");
		setTimeout(function(){
			$(".copy-tooltip").removeClass("active");
		}, 1000)
		let href = window.location.href
		t = document.createElement("textarea");
            document.body.appendChild(t),
            t.value = href,
            t.select(),
            document.execCommand("copy"),
            document.body.removeChild(t)

	})
});
