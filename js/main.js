// Fixed header
$(function () {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".header");
    var headerHeight = $header.outerHeight();

    $window.scroll(function () {
        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
            $header.addClass("sticky-hidden");
        } else {
            $header.removeClass("sticky-hidden");
            $header.removeClass("sticky-show");
        }

        if ($header.hasClass("sticky-hidden")) {
            if (windowTop < lastScrollTop) {
            $header.addClass("sticky-show");
            } else {
            $header.removeClass("sticky-show");
            }
        }
        lastScrollTop = windowTop;
    });
});

// Open overlay menu by click on hamburger menu
$('.header-hamburger').on('click', function() {
    $('.header-modal').toggleClass('show');
});

$('.header-modal__close').on('click', function() {
    $('.header-modal').removeClass('show');
});

// Project carousel
$('.project-carousel').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});