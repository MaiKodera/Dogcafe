$(function () {


    /*スムーズジャンプ*/
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle-btn").on("click", function () {
        // if ($("header").hasClass("open")) {
        //     $("header").removeClass("open");
        // } else {
        //     $("header").addClass("open");
        // }
        $("header").toggleClass("open");


    });
    $(".nav-item a").on("click", function () {

        $("header").removeClass("open");
    });


    $("#mask").on("click", function () {

        $("header").removeClass("open");
    });
    //main-visualのスライドショー//
    $('.main-vis img:nth-child(n+2)').hide();
    setInterval(function () {
        $(".main-vis img:first-child").fadeOut(2000);
        $(".main-vis img:nth-child(2)").fadeIn(2000);
        $(".main-vis img:first-child").appendTo(".main-vis");
    }, 4000);

    

    $(window).scroll(function () {
        var classes = ["dog-item","topics-list","price-list", "menu-item", "left-item", "right-item", "menu-page-list"];
        var addClasses = [ "dog-fadein", "topics-fadein","price-fadein", "menu-fadein", "fadein-left", "fadein-right", "menu-page-fadein"];

        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        for (var i = 0; i < classes.length; i++) {
            $("." + classes[i]).each(function () {
                var targetPosition = $(this).offset().top;
                if (scroll > targetPosition - windowHeight + $(this).height() / 2) {
                    $(this).addClass(addClasses[i]);
                }
            });
        }
    });


    


});






