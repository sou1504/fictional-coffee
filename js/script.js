$(function(){
    //ナビゲーション
    $(".header-nav-bar").on("click", function(){

        $(".header-nav").fadeToggle();
        $(".header-nav-bar").toggleClass("header-nav-bar_open");
    });

    //ナビゲーションcss変更
    function wResize() {
        if ($(window).width() >= 780) {
            $(".header-nav").show();
            $(".header-nav-bar").removeClass("header-nav-bar_open");
        } else {
            $(".header-nav").hide();  
        }
    }

    //スムーススクロール
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    

    // 初回実行
    wResize();

    $(window).on('resize', function() {
        wResize();
    });
});