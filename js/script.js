$(document).ready(function () {
    $('.btn__menu').on('click', () => { $('body, .header nav, .btn__menu').toggleClass('active'); })
    $('.dropdown-btn').on('click', function (e) { $(this).toggleClass('active').next('.dropdown-content').slideToggle(300); })

    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.navbar').length) ||
            ($(e.target).parents('btn__menu').length) ||
            ($(e.target).parents('modal-content').length) ||
            ($(e.target).hasClass('btnPlay')) ||
            ($(e.target).hasClass('btn__menu')) ||
            ($(e.target).hasClass('navbar'))
        )) {
            $('#video_modal').fadeOut(300);
            $('body, .header nav, .btn__menu').removeClass('active');
        }
    });

    $(document).on('click', '.btnPlay', function (e) {
        $('#video_modal').fadeIn(300);
    });

    if (window.innerWidth >= 1000) {
        $('.slider').slick({
            arrows: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{ breakpoint: 1000, settings: "unslick" }]
        });

    }

    $('.copyText').on('click', function () {
        var dataToCopy = $(this).data('copy');
        navigator.clipboard.writeText(dataToCopy)
            .then(function () { alert('Промокод скопирован: ' + dataToCopy); })
            .catch(function (err) { console.error('Не удалось скопировать промокод: ', err); });
    })

});

