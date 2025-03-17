// ナビゲーションの開閉
$(function () {
    $('#header-btn').on('click', () => {
        $('body').toggleClass('is-openMenu');
    })
});


// ()で囲む → 即時関数　評価して優先させる？
(function () {
    'use strict';

    new Swiper('#kv', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });
})();