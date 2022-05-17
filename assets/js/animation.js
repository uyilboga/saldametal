$(function() {
    if($(window).width() > 1200) {

        gsap.defaults = {
            duration: .4,
            ease: 'power3.out',
        }

        if($('.intro').length) {
            gsap.to('.intro .intro-wrapper .intro-content h4', { y: 0, autoAlpha: 1, delay: .5 });
            gsap.to('.intro .intro-wrapper .intro-content h2', { y: 0, autoAlpha: 1, delay: .7 });
            gsap.to('.intro .intro-products', { y: 0, delay: .9 });
        }

        if($(".home-about").length) {
            gsap.to('.home-about .about-wrapper .about-content .content *', { y: 0, autoAlpha: 1, stagger: .13, scrollTrigger: { trigger: '.home-about', start: "top center", } })
            gsap.to('.home-about .about-wrapper .about-image', { x: 0, autoAlpha: 1, scrollTrigger: { trigger: '.home-about', start: "top center+=200px", } })
        }

        if($(".home-products").length) {
            gsap.to('.home-products .home-products-title .title *', { y: 0, autoAlpha: 1, stagger: .13, scrollTrigger: { trigger: '.home-products', start: "top center+=200px", } })
        
            gsap.to('.home-products .home-products-slider .home-slider-wrapper .slider-left', {
                x: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: '.home-products .slider-left',
                    start: 'top center+=200px'
                }
            })

            gsap.to('.home-products .home-products-slider .home-slider-wrapper .slider-holder .swiper-container .swiper-slide', {
                y: 0,
                autoAlpha: 1,
                stagger: .13,
                scrollTrigger: {
                    trigger: '.home-products .slider-left',
                    start: 'top center+=200px'
                }
            })
        }

        if($(".industries").length) {
            gsap.to('.industries .industries-title h3', {
                y: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: '.industries',
                    start: 'top center+=200px'
                }
            })
            gsap.to('.industries .industries-wrapper .item', {
                autoAlpha: 1,
                stagger: .13,
                scrollTrigger: {
                    trigger: '.industries .industries-wrapper',
                    start: 'top center+=200px'
                }
            })
        }

        if($(".map").length) {
            gsap.to('.map .map-wrapper .content p', {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: '.map',
                    start: 'top center+=200px'
                }
            })

            gsap.to('.map .map-wrapper .content .map-img', {
                y: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: '.map',
                    start: 'top center+=200px',
                }
            })

            gsap.to(".map .map-wrapper .content .certificate .box", {
                autoAlpha: 1,
                stagger: .13,
                scrollTrigger: {
                    trigger: '.map .certificate',
                    start: 'top bottom-=100px',
                }
            })

            gsap.to('.map .map-wrapper .content .certificate h6', {
                autoAlpha: 1,
                x: 0,
                delay: .8,
                scrollTrigger: {
                    trigger: '.map .certificate',
                    start: 'top bottom-=100px',
                }
            })
        }

        if($(".our-news").length) {
            gsap.to('.our-news .our-news-content .news-text', {
                x: 0,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: '.our-news',
                    start: 'top center+=200px'
                }
            })

            gsap.to('.our-news .our-news-content .new-img .overlay-outer', {
                autoAlpha: 1,
                stagger: .13,
                scrollTrigger: {
                    trigger: '.our-news',
                    start: 'top center+=200px'
                }
            })
        }

        if($(".productions").length) {
            gsap.to('.productions .content .production-section-top .production-img', {
                y:0,
                autoAlpha: 1,
                stagger: .13,
                scrollTrigger: {
                    trigger: '.productions .content .production-section-top',
                    start: 'top center+=200px'
                }
            })

            gsap.to('.productions .content .production-section-bottom .production-img', {
                y:0,
                autoAlpha: 1,
                stagger: -.13,
                scrollTrigger: {
                    trigger: '.productions .content .production-section-bottom',
                    start: 'top center+=200px'
                }
            })
        }
    }
})