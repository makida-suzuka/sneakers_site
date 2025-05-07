window.addEventListener('load', function(){
    const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
    const overlay = this.document.querySelector('#overlay');
    
    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        overlay.classList.toggle('active');
        console.log('ok!'); // コンソール画面でokというメッセージが出る
    });
    overlay.addEventListener('click', () => { //オーバーレイをクリックしても閉じる
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        overlay.classList.toggle('active');
        console.log('good!'); // コンソール画面でgood!というメッセージが出る
      });

      $(".pickup-list").slick({
        autoplay: false, // 自動再生
        arrows: false, // 矢印
        dots: false, // インジケーター
        slidesToShow: 2.1,
        slidesToScroll:1,
        centerMode: true,// 前後スライドを部分表示
        centerPadding: '20%'// 両端の見切れるスライド幅
      });

      window.addEventListener('scroll', function(){
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const boxes = document.querySelectorAll('.item-img');
      
        boxes.forEach(function(box) {
          const distanceToBox = box.offsetTop;
          if(scroll + windowHeight > distanceToBox) {
            box.classList.add('fade-in');
          }
        });
      });
})

