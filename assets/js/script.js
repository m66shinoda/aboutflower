// ナビゲーションの開閉
$(function () {
    $('#header-btn').on('click', () => {
        $('body').toggleClass('is-openMenu');
    })
})