$( document ).ready(function() {

    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("active");
        $('.menu-block').toggleClass('show');
        $('body').toggleClass('overflow-hidden');
    });

    if ($('#main').attr('id')) {
        $('footer').hide();
        $('header .logo').hide();
        $('.header-content').addClass('header-content-main');
    }
    else {
        $('footer').show();
        $('header .logo').show();
        $('.header-content').removeClass('header-content-main');
    }

});