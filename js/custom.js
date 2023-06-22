$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        // if문
        sct > 0
            ?
            $('.Header').addClass('on')
            :
            $('.Header').removeClass('on')
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: false,
        parallex: true,
        speed: 600,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.MainVisual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });
    $('.MainVisual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.MainVisual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });


    $('.MainVisual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    })

    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 900,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },


        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 400,
            }

        }
    })




    $('.MainItm .arrows .left').on('click', function () {
        ItmSlide.slidePrev();
    });

    // 자바 스크립트 방식
    document.querySelector('.MainItm .arrows .right').addEventListener('click', () => {
        ItmSlide.slideNext();
    })


    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    });

    $('.Gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.snb').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.Gnb .snb').removeAttr('style')
    })

})