enchant();

//円の色指定
var CIRCLE_COLOR = "rgb(100,100,100)";
//円の半径指定
var CIRCLE_RADIUS = 30;
//円の個数指定
var CIRCLE_NUM = 10;

// htmlを読み込み終わったらロードされる
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    game.score = 0;

    //画像読み込み
    game.preload('http://enchantjs.com/assets/images/chara1.gif',
                 'http://enchantjs.com/assets/images/map0.gif',
                 'http://enchantjs.com/assets/images/icon0.gif');

    //サーフェイスに色指定メソッドの追加
    Surface.prototype.setColor = function(strokeColor, fillColor) {
        this.context.strokeStyle = strokeColor;
        this.context.fillStyle   = fillColor;
    };

    //サーフェイスに円塗りつぶしのメソッドの追加
    Surface.prototype.fillCircle = function(x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.fill();
    };

    //円の描画
    //これを呼び出すと、個数分の円の登録が完了する
    game.addCircle = function() {
        //サーフェイスオブジェクトの生成
        var surface = new Surface(50,50);

        //サーフェイスの色を指定
        surface.setColor("rgb(0,0,0)",CIRCLE_COLOR);

        //座標記憶用配列の準備
        var tmp = Array(CIRCLE_NUM);
        for (var i = 0; i < CIRCLE_NUM; i++) {
            tmp[i] = Array(2);
        }

        //for文の開始（円の個数分）
        for (var i = 0; i < CIRCLE_NUM; i++) {

            var isFull = false;
            var s = 0;

            while (!isFull) {
                //ランダムな座標を生成
                x = rand(280) + 10;
                y = rand(280) + 10;

                var isDuplication = false;
                for (var j = 0; j < tmp.length; j++) {
                    if (tmp[j][0] - 10 < x && x < tmp[j][0] + 10) {
                        isDuplication = true;
                    }
                    if (tmp[j][1] - 10 < y && y < tmp[j][1] + 10) {
                        isDuplication = true;
                    }
                }

                if (isDuplication) {
                    continue;
                }

                tmp[i][0] = x;
                tmp[i][1] = y;

                s++;

                if (s >= 10) {
                    isFull = true;
                }
            }
            console.log("END");

            for (var j = 0; j < tmp.length; j++) {
                console.log(tmp[j][0]);
            }
            //ランダムな座標は配列に記憶、重ならないように処理する
            //for (var j = 0; j < tmp.length; j++) {
            //    if (tmp[j])
            //ランダムな座標が決定
            //Sprite[i]の生成
            //imageにsurfaceを指定
            //ランダム座標を元に、sprite[i]のx,yを決定する
            //ルートシーンにsprite[i]を追加する
            //タッチされたときのsprite[i]の処理を書く（エフェクト）
            //for文終わり
        }
        //これで個数分のspriteの登録が終わった
    };

    //ロード完了時に呼ばれる
    //ここは画像の指定とか一番最初に処理するところ
    game.onload = function () {
        //背景の生成
        //背景スプライトの生成
        var bg = new Sprite(320, 320);
        //背景色の指定
        bg.backgroundColor = "rgb(100, 100, 100)";
        //ルートシーンに追加
        game.rootScene.addChild(bg);

        //円の追加
        game.addCircle();
    };

    //ルートシーンの定期処理
    game.tick = 16 * 10;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
    });

    //ゲームスタート
    game.start();
};


//乱数の生成
function rand(num) {
    return Math.floor(Math.random() * num);
}


