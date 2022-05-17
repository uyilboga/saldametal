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

	$(".mobile-menu .menu ul li a.has-child").on('click', function(e) {
		e.preventDefault();
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
        $(".detail-text p").css("font-size", fSize+ 'px');
    })
    $(".decrease").click(function() {
        fSize--;
        $(".detail-text p").css("font-size", fSize+ 'px');
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

	/* circular text */
	if($(".circularText").length) {
		document.querySelectorAll('.circularText').forEach(element => {
			new CircleType(element);
		});	
	}

	var introSlider = new Swiper('.intro .products-slider .swiper-container', {
		slidesPerView: 7,
		navigation: {
			prevEl: '.intro .navigation .prev',
			nextEl: '.intro .navigation .next'
		},
		breakpoints: {
			900: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			}
		}
	});

	var productDetailSlider = new Swiper('.product-detail-slider .slider .swiper-container', {
		slidesPerView: 1,
		navigation: {
			prevEl: '.product-detail-slider .navigation .prev',
			nextEl: '.product-detail-slider .navigation .next'
		}
	})

	var homeProductsSlider = new Swiper('.home-products-slider .swiper-container', {
		slidesPerView: 3,
		loop: true,
		scrollbar: {
			el: '.scrollbar'
		},
		breakpoints: {
			900: {
				slidesPerView: 1.8,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});

	var otherProducts = new Swiper('.other-products .swiper-container', {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 30,
		pagination: {
			el: '.pagination',
			clickable: true,
		},
		breakpoints: {
			900: {
				slidesPerView: 2
			},
			767: {
				slidesPerView: 1
			}
		}
	})

	var qualitySlider = new Swiper(".quality-slider .swiper-container", {
		slidesPerView: 5,
		spaceBetween: 25,
		loop: true,
		centerSlides:false,
		navigation: {
			nextEl: ".navigation .next",
			prevEl: ".navigation .prev",
		},
		breakpoints: {
			900: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 5,
			}
		}
	});

	var aboutSlider = new Swiper(".about-slider", {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		navigation: {
			nextEl: ".about-slider .swiper-next",
			prevEl: ".about-slider .swiper-prev",
		},
	});

	homeProductsSlider.on('slideChange', function() {
		var realIndex = homeProductsSlider.realIndex;
		$(".current-product .product-item").eq(realIndex).addClass('active').siblings().removeClass('active');
	})

	$(".megamenu .all-products a").on('click', function() {
		var title = $(this).data('title');
		$(this).text(title);
		$(this).parent().find('.product-list').slideDown();
	})

	$("header .menu ul li.has-child").on('mouseenter', function() {
		$('main').addClass('overlay-active');
	})

	$("header .menu ul li.has-child").on('mouseleave', function() {
		$('main').removeClass('overlay-active');
	});

	$(".search-button a").on('click', function() {
		$(".search-popup").fadeIn();
		$("body").addClass('overflow-hidden');
		$(document).on('keyup', function(e) {
			if(e.keyCode === 'Escape') {
				$(".search-popup").fadeOut();
				$("body").removeClass('overflow-hidden');
			}
		})
	});

	$(".close-search").on('click', function() {
		$(".search-popup").fadeOut();
		$("body").removeClass('overflow-hidden');
	});

	$(".offer-btn").on('click', function() {
		$(".request-form").fadeIn();
		$("body").addClass('overflow-hidden');
		$(document).on('keyup', function(e) {
			if(e.keyCode === 'Escape') {
				$(".request-form").fadeOut();
				$("body").removeClass('overflow-hidden');
			}
		})
	});

	$(".request-form .close-search").on('click', function() {
		$(".request-form").fadeOut();
		$("body").removeClass('overflow-hidden');
	});

	$(".intro-products").on('mouseenter', function() {
		$(this).addClass('active');
	})

	$(".intro-products").on('mouseleave', function() {
		$(this).removeClass('active');
	});

	if($(".about").length) {
		$('#tabs-nav li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function
        $('#tabs-nav li').click(function () {
            $('#tabs-nav li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();

            let activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
	}

	if($(".services").length) {
		var firstHeight = $(".services-item").first().height();
		$(".services-content").height(firstHeight);
		
		$(".services-tab .services-list ul li a").on('click', function() {
			var index = $(this).parent().index();
			$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	
			var height = $(".services-item").eq(index).height();
			$(".services-content").height(height);
	
			$(".services-item").eq(index).addClass('active').siblings().removeClass('active');
		})
	}

	$('.products-sidebar-list ul li.has-sub-menu a').on('click', function() {
		$(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
		$(this).parent().find('ul').slideToggle().parent().siblings().find('ul').slideUp();
	});

	const sidebarList = $('.products-sidebar-list');
	function displayWindowSize() {
		if ($(window).width() < 992) {
			$('.products-sidebar-title').on('click', function () {
				sidebarList.slideToggle();
				$('#pencet').toggleClass('Diam');
			});
		}
	}
	window.addEventListener("resize", displayWindowSize);
	displayWindowSize();

	if($(window).width() > 1200) {
		$(".home-products .slider-holder").on("mousemove", function(e) {
			var x = e.pageX;
			var y = e.pageY;
			var translateY;

			$("body").css("cursor", 'none');
			$(".slider-holder a").css('cursor', 'none');
			translateY = y - $(this).offset().top - 20;

			gsap.to(".slider-holder .scroll", {
				opacity: 1,
				x: x - 350,
				y: translateY,
			})
		});

		$(".home-products .slider-holder").on("mouseleave", function() {
			$("body").css("cursor", 'initial');
			$(".slider-holder a").css('cursor', 'initial');
			gsap.to(".slider-holder .scroll", {
				opacity: 0,
				x: 0,
				y: 0,
			})
		});
	}
	
});
