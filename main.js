$(function() {
  // 固定ヘッダー
    var $header = $('.header');
    var headerHeight = $header.outerHeight();
  
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > headerHeight) {
        $header.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
      }
    });

  // フワッと表示
    $(window).on("scroll", function () {
      $(".fadein").each(function () {
        const elemPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass("active");
        }
      });
    });

    // アコーディオンメニュー
    $(".ac-menu .label").on("click", function () {
      $(this).next(".faq__answer").slideToggle(200);
      $(this).toggleClass("open");
    });

    // ハンバーガーメニュー
    $(".hamburger").on("click", function () {
      $(".header").toggleClass("open");
    });
  
    $(".mask, #global-nav .nav-list a").on("click", function () {
      $(".header").removeClass("open");
    });
    
    // スムーススクロール
    $('a[href*="#"]').on("click", function (event) {
      const href = $(this).attr("href");
      const url = new URL(href, location.href);
      const hash = url.hash;
  
      if (url.pathname === location.pathname && hash) {
        const target = $(hash);
        if (target.length) {
          event.preventDefault();
          const position = target.offset().top - 100;
          $("html, body").animate({ scrollTop: position }, 600, "swing");
        }
      }
    });
    
  });
  