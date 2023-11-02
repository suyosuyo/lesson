// ナビゲーション

$(function() {
    $("ul.botan li").hover(
      function() {
        $(".course:not(:animated)", this).slideDown();
      },
       function() {
         $(".course", this).slideUp();
      }
    );
  });
// なぜかすぐ帰る



//   画像切り替わり

$(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".koko").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".irasuto").addClass("wakatta");
    } 
    });
  });



//   質問のところ
$('.risuto').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    $(this).removeClass('none');
    $(".mousikomi").addClass("detekuru");
  });
//   なぜか一気に全部開く？


// ローディング画面
window.onload = () => {
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');

    setTimeout(classAdd,1000)
    // 遅らせたいやつ、時間(2000は２秒)
}

const classAdd = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
}