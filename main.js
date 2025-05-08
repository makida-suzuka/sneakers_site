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
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,// 前後スライドを部分表示
        centerPadding: '10%',// 両端の見切れるスライド幅
            responsive:[{
                breakpoint: 485,
                settings:{
                    slidesToShow: 1,
                    centerPadding: '15%',// 両端の見切れるスライド幅
                }
            }]
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

    //href属性の「#」で始まるリンクを全て取得
    const links = document.querySelectorAll('a[href^="#"]');
    //取得したリンクを1つずつ処理を実行する
    links.forEach((link) =>{
        //リンクをクリックしたら処理を実行する
        link.addEventListener('click', (e) => {
        //リンクイベントをキャンセルする
        e.preventDefault();
        //クリックしたリンクのhref属性を取得
        const href = link.getAttribute('href');
        //目的のセクションを取得
        const targetSection = document.querySelector(href);
        //画面の上からセクションのtop位置までの垂直方向の距離
        const sectionTop = targetSection.getBoundingClientRect().top;
        //現在位置を取得
        const currentPos = window.scrollY;
        //ヘッダーの高さ
        const gap = 100;
        //現在位置から目的のsectionまでのスクロール量
        const target = sectionTop + currentPos - gap;
        //特定の位置までスクロールさせる
        window.scrollTo({
        top: target, //目的の位置のY座標を指定
            behavior: 'smooth', //スクロールの動きを指定
            });
        });
    });
})

