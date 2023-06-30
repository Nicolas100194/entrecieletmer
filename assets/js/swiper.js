(function($){
    $('document').ready(function(){
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });


    })
})(jQuery);

(function($){
    $('document').ready(function(){
        const swiper = new Swiper('.swiper-obj-drainage', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 1,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });


    })
})(jQuery);



